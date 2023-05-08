import React from 'react';
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { color, fontFamily, fontWeight, mediaQuery, textSize } from '../../global/style';
import { StandardContainer, StandardSection } from '../components/standard';

const LeftLinks = styled.div`
  position: absolute;
  margin-top: auto;
  bottom: 0;
  left: 0.5rem;

  ${mediaQuery.large`
    position: fixed;
  `}
`;

const RightLinks = styled.div`
  position: absolute;
  margin-top: auto;
  bottom: 0;
  right: 0.5rem;

  ${mediaQuery.large`
    position: fixed;
  `}
`;

const LogoLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

const EmailLink = styled.a`
  color: ${color.darkGray};
  font-weight: ${fontWeight.medium};
  top: -110%;
  left: -5.5rem;
  position: absolute;
  transform: rotate(90deg);
  width: min-content;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    transform: scale(1.05) rotate(90deg) translateX(-0.4rem) ;
  }
`;

const IconLink = styled.a`
  background-color: ${color.transparent};
  border: none;
  transition: 0.1s;
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
        <EmailLink href='mailto:jonathan.couck@outlook.com'>
          jonathan.couck@outlook.com
        </EmailLink>
        <Line />
      </RightLinks>
    </>
  );
};


const FooterDiv = styled.footer`
  position: relative;
  padding-bottom: 5rem;
  flex-grow: 1;
  display: flex;
`;

const StyledContainer = styled(StandardContainer)`
  background-color: ${color.transparent};
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 0;
  padding-bottom: 0;
  margin: auto auto 0 auto;
  width: 70%;
  ${mediaQuery.large`
    width: 50rem;
  `}
`;

const StyledSection = styled(StandardSection)`
  font-family: ${fontFamily.special};
`;

const FooterText = styled.p`
  ${textSize.title}
  ${mediaQuery.medium`
    ${textSize.huge}
  `}
  text-align: left;
  color: ${color.darkGray};
`;

const ContactUs = styled(Link)`
  ${textSize.subtitle}
  text-align: left;
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

const Copyright = styled.div`
  position: absolute;
  font-weight: ${fontWeight.light};
  bottom: 0rem;
  right: 0rem;
  left: 0rem;

  ${mediaQuery.medium`
    right: 5rem;
    left: unset; 
  `}
  ${mediaQuery.medium`
    right: 10rem;
    left: unset; 
  `}
`;

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <>
      {!pathname.includes('contact') &&
      <>
        <FooterDiv>
          <StyledContainer>
            <StyledSection>
              <FooterText>Questions or think I have what it takes to create your website?</FooterText>
              <ContactUs to='/contact'>Get in touch <u>here</u>&nbsp;→</ContactUs>
            </StyledSection>
          </StyledContainer>
          <Copyright>© CookieBuilds 2022</Copyright>
        </FooterDiv>
        <MobileLinks />
      </> 
      }
    </>
  );
};

export default Footer;