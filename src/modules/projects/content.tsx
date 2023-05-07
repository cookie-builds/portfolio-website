import React from 'react';
import styled from 'styled-components';

import { StandardContainer, StandardSection } from '../../_common/components/standard';
import { color, textSize } from '../../global/style';

const ProjectContainer = styled.div`
  width: 100%;
`;

const ProjectInner = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 1rem;
`;

const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 2rem 2rem;
`;

const Title = styled.h3`
  ${textSize.subtitle}
  margin: 0;
  font-weight: 700;
`;

const Description = styled.p`
  ${textSize.p}
  text-align: left;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: auto;
  color: ${color.darkText};
`;
const StyledTag = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${color.lightGray};
  border-radius: 1rem;
`;
const ImageWrapper = styled.div`
  width: 100%;
  padding: 2rem 2rem 2rem 0;
`;

const Image = styled.img`
  width: 100%;
  border: 2px solid ${color.primary};
`;

type ProjectProps = {
  title: string,
  description: string,
  tags: Tag[],
  image: string,
};

const Project = ({ title, description, tags, image }: ProjectProps): JSX.Element => {
  return (
    <ProjectContainer style={{ background: 'linear-gradient(-90deg, rgba(102,102,102,1) 0%, rgba(34,34,34,1) 100%)' }}>
      <ProjectInner>
        <ProjectText>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Tags>
            {tags.map((value) => <StyledTag>{value}</StyledTag>)}
          </Tags>
        </ProjectText>
        <ImageWrapper>
          <Image src={image} />
        </ImageWrapper>
      </ProjectInner>
    </ProjectContainer>
  );
};

const StyledSection = styled(StandardSection)`
  color: ${color.lightText};
  gap: 2rem;
`;

type Tag = 'Front-end' | 'Back-end' | 'Blazor' | 'React' | 'NodeJS' | '.Net';

const Content = () => {
  const projects: ProjectProps[] = [
    {
      'title': 'Mercurius Aalst',
      'description': 'I created the website for the student association of Mercurius Aalst. This is a static website created in Blazor. This website was created because I am the current Webmaster for the association and their previous one needed a serious overhaul.',
      'tags': ['Front-end', 'Blazor'],
      'image': 'https://imgur.com/SbJXaUm.jpg',
    },
    {
      'title': 'Poker Tracker',
      'description': 'A website designed to make tracking poker results easier. Created as a school project, with front- and back-end in React and NodeJS. This is not live anymore, but do please check out the code if you`re interested',
      'tags': ['Front-end', 'Back-end', 'React', 'NodeJS'],
      'image': 'https://imgur.com/I8lukzH.jpg',
    },
  ];

  ;
  return (
    <StandardContainer>
      <StyledSection>
        {projects.map((p: ProjectProps) => <Project {...p} /> )}
      </StyledSection>
    </StandardContainer>
  );
};

export default Content;