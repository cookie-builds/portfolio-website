import React from 'react';
import styled from 'styled-components';

import { StandardContainer, StandardSection } from '../../_common/components/standard';
import { color, fontWeight, mediaQuery, textSize } from '../../global/style';

const ProjectContainer = styled.div`
  width: 100%;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
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
      'description': 'A website designed to make tracking poker results easier. Created as a school project, with front-end in React and back-end in NodeJS. This is not live anymore, but do please check out the code if you’re interested.',
      'tags': ['Front-end', 'Back-end', 'React', 'NodeJS'],
      'image': 'https://imgur.com/I8lukzH.jpg',
    },
    {
      'title': 'Squads reservation tool',
      'description': 'A reservation tool made for a local fitness in Aalst. Created as a school project, made in .Net. This is not live anymore, but do please check out the code if you’re interested.',
      'tags': ['Front-end', 'Back-end', 'Blazor', '.Net'],
      'image': 'https://imgur.com/JIrPt2i.jpg',
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