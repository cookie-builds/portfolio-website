import React from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';
import { IoMdClose } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { color, fontFamily,fontWeight,mediaQuery,textSize } from '../../global/style/index';
import { StandardContainer } from '../components/standard';

const COLOR_CHANGE_CUTOFF = 25;

const MobileModalContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  margin: auto;
  background-color: ${color.lightGray}97;
`;

const CloseButton = styled.button`
  background-color: ${color.transparent};
  border: none;
  position: absolute;
  right: 0rem;
  top: 0rem;
  cursor: pointer;
  padding: 1.25rem;
`;

const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5rem;
`;

const MobileLink = styled(Link)<{active?: string}>`
  ${textSize.p}
  width: 100%;
  padding: 1.5rem 0;
  color: ${color.darkText};
  background-color: ${p => p.active ? color.white : color.transparent}50;
`;

const MobileModal = ({ selected, setOpen, handleLinkClick }: {selected: string, setOpen: React.Dispatch<React.SetStateAction<boolean>>, handleLinkClick: (link: string) => void}) => {
  return (
    <MobileModalContainer>
      <CloseButton onClick={() => setOpen(false)}><IoMdClose color={color.darkText} size='2rem' /></CloseButton>
      <MobileLinks>
        {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link) => 
        {
          return <MobileLink to={`/${link === 'Home' ? '' : link.toLowerCase()}`} key={link} onClick={() => handleLinkClick(link.toLowerCase())} active={selected === (link === 'Home' ? '' : link.toLowerCase()) ? 'true' : undefined}>
            {link}
          </MobileLink>;
        })}
      </MobileLinks>
    </MobileModalContainer>
  );
};

const NavigationContainer = styled.div<{bg: string, text: string}>`
  position: fixed;
  background-color: ${p => p.bg};
  color: ${p => p.text};
  width: 100vw;
  transition: background-color 0.2s, color 0.2s;
  margin: 0;
  padding: 0;
`;

const transition = css`
  transition-property: margin;
  transition-duration: 4s;
  transition-delay: 2s;
`;

const LinkBottomLine = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 0;
  margin: 0 auto;
  border: 1px ${color.primary} solid;
  border-radius: 2px;
  transform: translateY(0.5rem);
  ${transition}
`;

const NavLink = styled(Link)<{active?: string, textColor: string}>`
  display: flex;
  position: relative;
  color: ${p => p.active ? color.primary : p.textColor};
  transition: color 0.2s;
  /*font-weight: ${p => p.active ? fontWeight.bold : fontWeight.medium};*/
  &:before {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(0.5rem);
    width: ${p => p.active ? '100%' : '0'};
    height: 3px;
    border-radius: 1.5px;
    background-color: ${color.primary};
    transition: width 0.1s;
  }
  &:hover {
    &:before {
      width: 100%;
      transition: width 0.1s;
    }
  }
`;

const ContactNavLink = styled(NavLink)<{active?: string, textColor: string}>`
  
`;

const NavigationBar = styled(StandardContainer)`
  display: flex;
  padding: 1.5rem;
  margin: 0 auto;
`;

const LogoLink = styled(NavLink)<{textColor: string}>`
  ${textSize.subtitle}
  font-family: ${fontFamily.special};
  text-align: left;
  margin-right: auto;
  color: ${p => p.textColor};
  ${LinkBottomLine} {
    border: 2px ${color.primary} solid;
  }
  &:before {
    display: none;
  }
`;

const NavLinkContainer = styled.div`
  display: none;

  gap: 2rem;
  ${textSize.p}
  vertical-align: bottom; 

  ${mediaQuery.medium`
    display: flex;
  `}
`;


const Navigator = () => {
  const location = useLocation();
  const [bgColor, setBgColor] = React.useState(color.transparent);
  const [textColor, setTextColor] = React.useState(color.darkText);
  const [selectedLink, setSelectedLink] = React.useState(location.pathname.substring(1));
  const [modalOpen, setModalOpen] = React.useState(true);

  const handleScroll = React.useCallback(() => {
    if(window.scrollY < COLOR_CHANGE_CUTOFF) {
      setBgColor(color.transparent);
      setTextColor(color.darkText);
    } else if(window.scrollY >= COLOR_CHANGE_CUTOFF) {
      setBgColor(color.darkGray);
      setTextColor(color.lightText);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  React.useEffect(() => {document.body.style.overflow = modalOpen ? 'hidden' : 'visible';} ,[modalOpen]);

  const handleLinkClick = React.useCallback((link: string) => {
    if(link === 'home') link = '';
    setSelectedLink(link);
    setModalOpen(false);
  }, []);

  return (
    <>
      {modalOpen && <MobileModal setOpen={setModalOpen} selected={selectedLink} handleLinkClick={handleLinkClick} />}
      
      <NavigationContainer bg={bgColor} text={textColor}>
        <NavigationBar>
          <LogoLink to='' active={location.pathname === '/' ? 'true' : undefined} textColor={textColor} onClick={() => handleLinkClick('')}>
            JonathanCouck
          </LogoLink>
          <NavLinkContainer>
            {['About', 'Services', 'Projects'].map((link) => 
              <NavLink to={`/${link.toLowerCase()}`} key={link} onClick={() => handleLinkClick(link.toLowerCase())} active={selectedLink === link.toLowerCase() ? 'true' : undefined} textColor={textColor}>
                {link}
              </NavLink>
            )}
            <ContactNavLink to={'/Contact'} key='Contact' onClick={() => handleLinkClick('contact')} active={selectedLink === 'contact' ? 'true' : undefined} textColor={textColor}>
              Contact
            </ContactNavLink>
          </NavLinkContainer>
        </NavigationBar>
      </NavigationContainer>
    </>
  );
};

export default Navigator;