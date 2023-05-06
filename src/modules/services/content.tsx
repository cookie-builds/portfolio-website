import React from 'react';
import { FaNodeJs,FaReact } from 'react-icons/fa';
import { HiCode,HiOutlineDesktopComputer, HiOutlineDeviceMobile } from 'react-icons/hi';
import { SiBlazor, SiDotnet } from 'react-icons/si';
import styled from 'styled-components';

import { StandardContainer } from '../../_common/components/standard';
import { color, mediaQuery, textSize } from '../../global/style'; ;

const StyledContainer = styled(StandardContainer)`
  background-color: ${color.darkGray};
  display: flex;
  flex-direction: column;
  margin: 4rem auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
  color: ${color.lightText};
  gap: 6rem;
  text-align: left;
`;

const FlexWhatWeDo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  text-align: center;
  justify-content: center;
`;

const FlexWhatWeUse = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  text-align: center;
  justify-content: center;
`;

const WhatWeDo = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem;
  min-width: 12rem;
  border-radius: 1rem;
`;

const WhatWeUse = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 2rem;
  gap: 1rem;
  width: calc(100%-4rem);
  border-radius: 1rem;
  justify-content: space-between;

  ${mediaQuery.medium`
    flex-direction: row;
  `}
`;

const Title = styled.h3`
  ${textSize.subtitle}
  font-weight: 700;
`;

const Text = styled.p`
  ${textSize.p}
  text-align: left;

  ${mediaQuery.medium`
    text-align: center;
  `}
`;

const TitleWWU = styled(Title)`
  ${mediaQuery.medium`
    text-align: left;
  `}
`;

const TextWWU = styled.p`
  text-align: left;
`;

const Logos = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  ${mediaQuery.medium`
    margin-left: 5rem;
    justify-content: right;
  `}
`;

const Content = () => {
  return (
    <StyledContainer>
      <FlexWhatWeDo>
        <WhatWeDo style={{ background: 'linear-gradient(0deg, rgba(102,102,102,1) 0%, rgba(34,34,34,1) 100%)' }}>
          <HiOutlineDesktopComputer color={color.primary} size='8rem' style={{ margin: '0 auto' }} />
          <Title>Custom websites</Title>
          <Text>I design, create and maintain custom websites, scalable for devices of any size.</Text>
        </WhatWeDo>
        <WhatWeDo style={{ background: 'linear-gradient(0deg, rgba(102,102,102,1) 0%, rgba(34,34,34,1) 100%)' }}>
          <HiCode color={color.primary} size='8rem' style={{ margin: '0 auto' }} />
          <Title>Web applications</Title>
          <Text>CookieBuilds combines front- and back-end work to create a highly functioning application, tailored to your needs</Text>
        </WhatWeDo>
        <WhatWeDo style={{ background: 'linear-gradient(0deg, rgba(102,102,102,1) 0%, rgba(34,34,34,1) 100%)' }}>
          <HiOutlineDeviceMobile color={color.primary} size='8rem' style={{ margin: '0 auto' }} />
          <Title>Mobile applications</Title>
          <Text>CookieBuilds helps create an application downloadable and runnable on any mobile device!</Text>
        </WhatWeDo>
      </FlexWhatWeDo>
      <FlexWhatWeUse>
        <WhatWeUse style={{ background: 'linear-gradient(90deg, rgba(102,102,102,1) 0%, rgba(34,34,34,1) 100%)' }}>
          <div>
            <TitleWWU>Front-end</TitleWWU>
            <TextWWU>
              For front-end purposes, CookieBuilds uses React (and React Native) or Blazor for web applications to create user-friendly and engaging websites or applications.
            </TextWWU>
          </div>
          <Logos>
            <FaReact color={color.primary} size='6rem' />
            <SiBlazor color='#562b88' size='6rem' />
          </Logos>
        </WhatWeUse>
        <WhatWeUse style={{ background: 'linear-gradient(90deg, rgba(102,102,102,1) 0%, rgba(34,34,34,1) 100%)' }}>
          <div>
            <TitleWWU>Back-end</TitleWWU>
            <TextWWU>
              As a developer, I specialize in using NodeJS for backend purposes. With its flexibility and scalability, I am able to create fast and dynamic web applications that meet the needs of my clients and their users.
            </TextWWU>
          </div>
          <Logos>
            <FaNodeJs color='#8ecd00' size='6rem' />
            <SiDotnet color='#562b88' size='6rem' />
          </Logos>
        </WhatWeUse>
      </FlexWhatWeUse>
    </StyledContainer>
  );
};

export default Content;