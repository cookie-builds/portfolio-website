import React from 'react';
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { color, fontFamily, fontWeight, mediaQuery, textSize } from '../../global/style';
import { StandardContainer } from '../components/standard';

const LeftLinks = styled.div`
  position: absolute;
  margin-top: auto;
  bottom: 0;
  left: 0;

  ${mediaQuery.extraLarge`
    position: fixed;
  `}
`;

const RightLinks = styled.div`
  position: absolute;
  margin-top: auto;
  bottom: 0;
  right: 0;

  ${mediaQuery.extraLarge`
    position: fixed;
  `}
`;

const LogoLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  transition: 0.1s;
`;

const EmailLink = styled.a`
  color: ${color.darkGray};
  font-weight: ${fontWeight.medium};
  top: -110%;
  left: -6.2rem;
  position: absolute;
  transform: rotate(90deg);
  width: min-content;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    transform: scale(1.05) rotate(90deg) translateX(-0.4rem) ;
  left: -6.15rem;
  }
`;

const IconLink = styled.a`
  background-color: ${color.transparent};
  border: none;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Line = styled.div`
  width: 2px;
  height: 7.5rem;
  background-color: ${color.darkGray};
  margin: 0 1rem;
`;
export const MobileLinks = () => {
  return (
    <>
      <LeftLinks>
        <LogoLinks>
          <IconLink href='https://github.com/cookie-builds' target='_blank'><AiOutlineGithub size='1.75rem' color={color.darkGray} /></IconLink>
          <IconLink href='https://www.linkedin.com/in/jonathancouck/' target='_blank'><AiOutlineLinkedin size='1.75rem' color={color.darkGray} /></IconLink>
          <IconLink href='https://www.facebook.com/Jonathan.Couck/' target='_blank'><AiOutlineFacebook size='1.75rem' color={color.darkGray} /></IconLink>
          <IconLink href='https://www.instagram.com/jcouck/' target='_blank'><AiOutlineInstagram size='1.75rem' color={color.darkGray} /></IconLink>
        </LogoLinks>
        <Line />
      </LeftLinks>
      <RightLinks>
        <EmailLink href='mailto:jonathancouck@outlook.com'>
          jonathancouck@outlook.com
        </EmailLink>
        <Line />
      </RightLinks>
    </>
  );
};


const FooterDiv = styled.footer`
  padding-bottom: 5rem;
  flex-grow: 1;
  display: flex;
`;

const FooterContainer = styled(StandardContainer)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 5rem;
  margin: auto auto 0 auto;
  width: 70%;
  ${mediaQuery.large`
    width: 60%;
  `}
  ${mediaQuery.extraLarge`
    width: 50%;
  `}
  ${mediaQuery.huge`
    width: 40%;
  `}
`;

const FooterText = styled.p`
  ${textSize.title}
  ${mediaQuery.medium`
    ${textSize.huge}
  `}
  font-family: ${fontFamily.special};
  text-align: left;
  color: ${color.darkGray};
`;

const ContactUs = styled(Link)`
  ${textSize.subtitle}
  ${mediaQuery.medium`
    ${textSize.title}
  `}
  color: ${color.darkGray};
  font-weight: ${fontWeight.book};
  &:hover {
    color: ${color.primary};
    font-weight: 600;
    padding-left: 1rem;
    transition: 0.1s;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <FooterContainer>
          <FooterText>Questions or think I have what it takes to create your website?</FooterText>
          <ContactUs to='/contact'>Get in contact <u>here</u>&nbsp;→</ContactUs>
        </FooterContainer>
      </FooterDiv>
      <MobileLinks />
    </>
  );
};

export default Footer;