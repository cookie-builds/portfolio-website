import React from 'react';
import styled from 'styled-components';

import { StandardContainer } from '../../_common/components/standard';
import { color, mediaQuery, textSize } from '../../global/style';

const MyImage = require('../../global/img/Codifly.jpg');

const StyledContainer = styled(StandardContainer)`
  background-color: ${color.darkGray};
  margin: 4rem auto;
  padding: 4rem;
  color: ${color.lightText};
  gap: 2rem;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr;

  ${mediaQuery.large`
    grid-template-columns: 1fr 1fr;
  `}
`;

const Title = styled.h1`
  ${textSize.title}
`;

const Text = styled.p`
  ${textSize.p}
`;

const UnorderedList = styled.ul`
  margin-left: -1rem;
`;

const BlueText = styled.span`
  color: ${color.primary};
`;

const MyImg = styled.img`
  border-radius: 100rem;
  border: 2px ${color.primary} solid;
  margin: auto;
`;

const Flex = styled.div`
  display: flex;
`;

const Content = () => {
  return (
    <StyledContainer>
      <Flex>
        <MyImg src={MyImage}/>
      </Flex>
      <div>
        <Title>
          Welcome
        </Title>
        <Text>
          My name is <BlueText>Jonathan Couck</BlueText>, and I recently started CookieBuilds to get some <BlueText>experience</BlueText> in the programming business. I'm currently in my <BlueText>final year of Applied Information Technology</BlueText> at HOGENT, so I'm getting ready to head <BlueText>into the market</BlueText>! <br /> <br />
          If you think CookieBuilds can be of service to you, <BlueText>don't hesitate</BlueText> to get in touch! <br /> <br />
          <BlueText>Thanks in advance ;)</BlueText>
        </Text>
      </div>
      <div>
        <Title>
          My Goals
        </Title>
        <Text>
          <UnorderedList>
            <li>Fulfill <BlueText>customers' dream</BlueText> of owning their own personalized website</li>
            <li>Learn how to <BlueText>value myself</BlueText> and my work</li>
            <li><BlueText>Develop my knowledge</BlueText> of website and application building even further</li>
            <li>Gain <BlueText>experience</BlueText> in this wonderful business</li>
          </UnorderedList>
        </Text>
      </div>
      <div></div>
      <div></div>
      <div>
        <Title>
        Why choose CB?
        </Title>
        <Text>
          <UnorderedList>
            <li>Great attention to <BlueText>detail</BlueText></li>
            <li><BlueText>Easy</BlueText> to work with</li>
            <li>Focus on <BlueText>results</BlueText></li>
            <li><BlueText>Affordable, quality</BlueText> end product</li>
            <li>Planning, designing, coding and maintenance, <BlueText>all done in one place</BlueText></li>
            <li><BlueText>Small business</BlueText> supports small business</li>
          </UnorderedList>
        </Text>
      </div>
    </StyledContainer>
  );
};

export default Content;