import React from 'react';
import styled from 'styled-components';

import DarkLogo from '-!svg-react-loader!../../global/img/Dark.svg';

import { color, fontWeight, mediaQuery, textSize } from '../../global/style';
import { StandardContainer } from '../components/standard';

type HeaderProps = {
  title: string
  description: string
};

const Logo = styled(DarkLogo)`
  margin: 0 auto;
  max-height: 15rem;
  max-width: 90%;

  ${mediaQuery.large`
    max-height: 17.5rem;
  `}

  ${mediaQuery.huge`
    max-height: 20rem;
  `}
`;

const HeaderContainer = styled(StandardContainer)<{hasProps?: string}>`
  background-color: ${color.transparent};
  color: ${color.darkGray};
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: ${p => p.hasProps ? '8rem' : '4rem'};
  padding-top: 0;
  padding-bottom: 0;
  ${mediaQuery.large`
    margin-top: ${(p: any) => p.hasProps ? '12rem' : '4rem'};
  `}
`;

const Title = styled.div`
  ${textSize.huge}
  font-weight: ${fontWeight.bold};
  padding: 0;
  margin: 0;
`;
const Description = styled.div`
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