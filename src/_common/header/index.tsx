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

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  gap: 1rem;
  align-items: center;
  text-align: left;
  color: ${color.darkGray};
`;

const Title = styled(StandardContainer)`
  ${textSize.huge}
  font-weight: ${fontWeight.bold};
`;
const Description = styled(StandardContainer)`
  ${textSize.subtitle}
  font-weight: ${fontWeight.medium};
`;

const Header = ({ headerProps }: {headerProps?: HeaderProps}) => {
  return (
    <HeaderContainer>
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