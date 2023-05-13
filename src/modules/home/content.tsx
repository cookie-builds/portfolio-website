import React from 'react';
import styled from 'styled-components';

import { StandardContainer, StandardSection } from '../../_common/components/standard';
import { color, mediaQuery, textSize } from '../../global/style';

const MyImage = require('../../global/img/LeMe.jpg');

const StyledSection = styled(StandardSection)`
  color: ${color.lightText};
  gap: 4rem;
  text-align: left;
  display: grid;
  ${mediaQuery.large`
    grid-template-columns: 1fr 1fr;
    align-items: center;
  `}
`;

const Title = styled.div`
  ${textSize.huge}
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Text = styled.div`
  ${textSize.p}
  margin: 0;
`;

const UnorderedList = styled.ul`
  margin: 0 0 0 -1rem;
`;

const BlueText = styled.span`
  color: ${color.primary};
`;

const ImageWrapper = styled.div`
  display: flex;
`;

const MyImg = styled.img`
  border-radius: 100rem;
  border: 2px ${color.primary} solid;
  margin: auto;
  max-width: 100%;
`;

const EmptyDiv = styled.div`
  display: none;
  ${mediaQuery.large`display: flex;`}
`;

const Content = () => {
  return (
    <StandardContainer>
      <StyledSection>
        <ImageWrapper>
          <MyImg src={MyImage}/>
        </ImageWrapper>
        <TextBlock>
          <Title>
          Welcome
          </Title>
          <Text>
          My name is <BlueText>Jonathan Couck</BlueText>, and I recently started CookieBuilds to get some <BlueText>experience</BlueText> in the programming business. I'm currently in my <BlueText>final year of Applied Information Technology</BlueText> at HOGENT, so I'm getting ready to head <BlueText>into the market</BlueText>! <br /> <br />
          If you think CookieBuilds can be of service to you, <BlueText>don't hesitate</BlueText> to get in touch! <br /> <br />
            <BlueText>Thanks in advance ;)</BlueText>
          </Text>
        </TextBlock>
        <TextBlock>
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
        </TextBlock>
        <EmptyDiv/>
        <EmptyDiv/>
        <TextBlock>
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
        </TextBlock>
      </StyledSection>
    </StandardContainer>
  );
};

export default Content;