import styled from 'styled-components';

import { mediaQuery, spacing } from '../../global/style';

export const StandardContainer = styled.div`
  margin: ${spacing.sm} auto;
  padding: ${spacing.sm};
  width: 100%;

  ${mediaQuery.medium`
    width: 90%;
    margin: ${spacing.md} auto;
  `}
  ${mediaQuery.large`
    width: 80%;
    margin: ${spacing.lg} auto;
  `}
  ${mediaQuery.extraLarge`
    width: 70rem;
    margin: ${spacing.xl} auto;
  `}
  ${mediaQuery.huge`
    width: 82.5rem;
    margin: ${spacing.xl} auto;
  `}
`;