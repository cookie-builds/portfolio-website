import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { color, fontFamily,fontWeight,mediaQuery,shadow,textSize } from '../../global/style/index';
import { StandardContainer } from '../components/standard';

const COLOR_CHANGE_CUTOFF = 25;

const MobileModalContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  margin: auto;
  background-color: ${color.lightGray};
  opacity: 0.90;
`;

const HamburgerButton = styled.button`
  display: flex;
  ${mediaQuery.medium`
    display: none;
  `}
  background-color: ${color.transparent};
  border: none;
  position: absolute;
  right: 0rem;
  top: 0rem;
  cursor: pointer;
  padding: 1rem 0.5rem 1rem 1rem;
`;

const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 7.5rem;
`;

const MobileLink = styled(Link)<{active?: string}>`
  ${textSize.p}
  width: 100%;
  padding: 1.5rem 0;
  color: ${p => p.active ? color.lightText : color.darkText};
  background-color: ${p => p.active ? color.darkGray : color.transparent}99;

  &:hover {
    background-color: ${p => p.active ? color.darkGray : color.mediumGray}99;
  }
`;

const MobileModal = ({ selected, handleLinkClick }: {selected: string, handleLinkClick: (link: string) => void}) => {
  return (
    <MobileModalContainer>
      <MobileLinks>
        {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link) => 
          <MobileLink to={`/${link === 'Home' ? '' : link.toLowerCase()}`} key={link} onClick={() => handleLinkClick(link.toLowerCase())} active={selected === (link === 'Home' ? '' : link.toLowerCase()) ? 'true' : undefined}>
            {link}
          </MobileLink>
        )}
      </MobileLinks>
    </MobileModalContainer>
  );
};

const NavigationContainer = styled.div<{bg: string, text: string, shadow: string}>`
  position: fixed;
  background-color: ${p => p.bg};
  box-shadow: ${p => p.shadow};
  color: ${p => p.text};
  width: 100vw;
  transition: background-color 0.2s, color 0.2s;
  margin: 0;
  padding: 0;
  z-index: 1000;
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
  align-items: center;
  /*font-weight: ${p => p.active ? fontWeight.bold : fontWeight.medium};*/
  &:before {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-0.5rem);
    width: ${p => p.active ? '100%' : '0'};
    height: 4px;
    border-radius: 1px;
    background-color: ${color.primary};
    transition: width 0.1s;

    ${mediaQuery.large`
      transform: translateX(-50%) translateY(0.5rem);
    `}
  }
  &:hover {
    &:before {
      width: 100%;
      transition: width 0.1s;
    }
  }
`;

const ContactNavLink = styled(NavLink)<{active?: string, textColor: string}>`
  background-color: ${p => p.textColor === color.darkText ? color.darkGray : color.lightGray};
  color: ${p => p.textColor === color.darkText ? color.lightText : color.darkText};
  padding: 0.75rem 1.5rem;
  border-radius: 10rem;
  transition: 0.1s;
  height: min-content;
  margin: auto 0;
  &:hover {
    transform: scale(1.05);
  }
  &:before {
    display: none;
  }
`;

const NavigationBar = styled(StandardContainer)`
  display: flex;
  margin: auto;
  padding: 0;
  ${mediaQuery.medium`
    padding: 0.5rem 0;
  `}
  ${mediaQuery.large`
    padding: 1.5rem 0;
  `}
`;

const LogoLink = styled(NavLink)<{textColor: string}>`
  ${textSize.subtitle}
  font-family: ${fontFamily.special};
  text-align: left;
  margin-right: auto;
  padding: 1rem 0rem 1rem 0.5rem;
  color: ${p => p.textColor};
  line-height: 2rem;

  ${mediaQuery.large`
    padding: 0;
  `}
  ${LinkBottomLine} {
    border: 2px ${color.primary} solid;
  }
  &:before {
    display: none;
  }
`;

const NavLinkContainer = styled.div`
  gap: 2rem;
  ${textSize.p}
  display: none;
  ${mediaQuery.medium`
    display: flex;
  `}
`;

const Navigator = () => {
  const location = useLocation();
  const [bgColor, setBgColor] = React.useState(color.transparent);
  const [textColor, setTextColor] = React.useState(color.darkText);
  const [boxShadow, setBoxShadow] = React.useState(shadow.none);
  const [selectedLink, setSelectedLink] = React.useState(location.pathname.substring(1));
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    if(window.scrollY < COLOR_CHANGE_CUTOFF) {
      setBgColor(color.transparent);
      setTextColor(color.darkText);
      setBoxShadow(shadow.none);
    } else if(window.scrollY >= COLOR_CHANGE_CUTOFF) {
      setBgColor(color.darkGray);
      setTextColor(color.lightText);
      setBoxShadow(shadow.medium);
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
      {modalOpen && <MobileModal selected={selectedLink} handleLinkClick={handleLinkClick} />}
      
      <NavigationContainer bg={bgColor} text={textColor} shadow={boxShadow}>
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
          <HamburgerButton onClick={() => setModalOpen(!modalOpen)}>
            {modalOpen && <IoMdClose color={textColor} size='2rem' />}
            {!modalOpen && <HiMenuAlt3 color={textColor} size='2rem' />}
          </HamburgerButton>
        </NavigationBar>
      </NavigationContainer>
    </>
  );
};

export default Navigator;