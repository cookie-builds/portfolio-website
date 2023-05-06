import React from 'react';
import styled from 'styled-components';

import DarkLogo from '-!svg-react-loader!../../global/img/Dark.svg';

import { color, fontWeight, mediaQuery, screenSize, textSize } from '../../global/style';
import { StandardContainer } from '../components/standard';

type HeaderProps = {
  title: string
  description: string
};

const Logo = styled(DarkLogo)`
  margin-top: 0;
  max-height: 15rem;
  max-width: 90%;

  ${mediaQuery.large`
    max-height: 17.5rem;
  `}

  ${mediaQuery.huge`
    max-height: 20rem;
  `}
`;

const HeaderContainer = styled.div<{hasProps?: string}>`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  gap: 1rem;
  align-items: center;
  text-align: left;
  color: ${color.darkGray};
  
  @media only screen and (min-width: ${screenSize.large}) {
    margin-top: ${p => p.hasProps ? '12rem' : '7rem'};
  }
`;

const Title = styled(StandardContainer)`
  ${textSize.huge}
  font-weight: ${fontWeight.bold};
  padding: 0;
  margin: 0;
`;
const Description = styled(StandardContainer)`
  ${textSize.p}
  font-weight: ${fontWeight.book};
  padding: 0;
  margin: 0;
`;

const Header = ({ headerProps }: {headerProps?: HeaderProps}) => {
  return (
    <HeaderContainer hasProps={headerProps ? 'true' : undefined}>
      {headerProps && 
      <>
        <Title>
          {headerProps.title}
        </Title>
        <Description>
          {headerProps.description}
        </Description>
      </>}
      {!headerProps && 
        <Logo/>
      }
    </HeaderContainer>
  );
};

export default Header;