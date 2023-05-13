import React from 'react';
import styled from 'styled-components';

import { StandardContainer, StandardSection } from '../../_common/components/standard';
import { color, fontWeight, mediaQuery, textSize } from '../../global/style';
import projects, { ProjectProps } from './projects';

const ProjectContainer = styled.div`
  width: 100%;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  max-width: 40rem;
  ${mediaQuery.large`
    max-width: unset;
  `}
`;

const ProjectInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  padding: 2rem;
  gap: 1rem;

  ${mediaQuery.large`
    grid-template-columns: 50% 50%;
  `}

  ${mediaQuery.extraLarge`
    grid-template-columns: 60% 40%;
  `}
`;

const Title = styled.h3`
  ${textSize.subtitle}
  text-align: center;
  margin: 0;
  font-weight: 700;

  ${mediaQuery.large`
    text-align: left;
`}
`;

const Description = styled.p`
  ${textSize.p}
  text-align: left;
  margin: 0;
  padding: 0;
  ${mediaQuery.large`
    padding: 1rem 0;
  `}
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  color: ${color.darkText};
`;

const StyledTag = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${color.lightGray};
  font-weight: ${fontWeight.bold};
  border-radius: 1rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 16rem;
  max-width: 25rem;
  grid-row: span 3;
  margin: 0 auto;
  ${mediaQuery.large`
    max-height: unset;
    max-width: unset;
    padding: 0 1rem;
  `}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid ${color.primary};
`;

const Project = ({ title, description, tags, image }: ProjectProps): JSX.Element => {
  return (
    <ProjectContainer style={{ background: 'linear-gradient(-90deg, rgba(102,102,102,1) 0%, rgba(34,34,34,1) 100%)' }}>
      <ProjectInner>
        <Title>{title}</Title>
        <ImageWrapper>
          <Image src={image} />
        </ImageWrapper>
        <Description>{description}</Description>
        <Tags>
          {tags.map((value) => <StyledTag>{value}</StyledTag>)}
        </Tags>
      </ProjectInner>
    </ProjectContainer>
  );
};

const StyledSection = styled(StandardSection)`
  color: ${color.lightText};
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = () => {
  return (
    <StandardContainer>
      <StyledSection>
        {projects.map((p: ProjectProps) => <Project {...p} /> )}
      </StyledSection>
    </StandardContainer>
  );
};

export default Content;