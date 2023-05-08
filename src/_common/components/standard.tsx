import styled from 'styled-components';

import { color, mediaQuery } from '../../global/style';

export const StandardContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  padding: 3rem 1rem;
  background-color: ${color.darkGray};
  ${mediaQuery.medium`
    width: 100%;
    margin: 3rem 0;
    padding: 3rem 2rem;
    background-color: ${color.darkGray};
  `}
  ${mediaQuery.large`
    width: calc(100% - 8rem);
    margin: 4rem;
    padding: 4rem;
    background-color: ${color.darkGray};
  `}
  ${mediaQuery.extraLarge`
    width: calc(100% - 12rem);
    margin: 6rem;
    padding: 6rem;
    background-color: ${color.darkGray};
  `}
  ${mediaQuery.huge`
    width: 90rem;
    margin: 8rem auto;
    padding: 8rem;
    background-color: ${color.darkGray};
  `}
`;

export const StandardSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${color.lightText}
`;