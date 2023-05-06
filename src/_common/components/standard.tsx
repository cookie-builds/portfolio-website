import React from 'react';
import styled from 'styled-components';

import { mediaQuery } from '../../global/style';
import { spacing } from '../../global/style';

export const StandardContainer = styled.div`
  width: calc(100%-${spacing.md*2}rem);
  padding: ${spacing.md}rem;

  ${mediaQuery.medium`
    width: calc(100%-3rem);
    padding: 1.5rem;
  `}

  ${mediaQuery.large`
    width: calc(100%-12rem);
    margin: 3rem;
    padding: 3rem;
  `}

  ${mediaQuery.extraLarge`
    width: 63rem;
  `}
  ${mediaQuery.huge`
    width: 82.5rem;
    padding: 5rem;
  `}
`;