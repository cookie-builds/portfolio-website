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
  width: 80%;
  height: 10rem;
  vertical-align: top;



  ${mediaQuery.medium`
    height: 15rem;
  `}

  ${mediaQuery.huge`
    height: 17.5rem;
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
        <Logo height='10rem' />
      }
    </HeaderContainer>
  );
};

export default Header;