import styled from 'styled-components';

import { mediaQuery, spacing } from '../../global/style';

export default styled.div`
  margin: ${spacing.sm} auto;
  padding: ${spacing.sm};
  width: 100%;

  ${mediaQuery.medium`
    width: 90%;
    margin: ${spacing.md} auto;
    padding: ${spacing.md};
  `}
  ${mediaQuery.large`
    width: 80%;
    margin: ${spacing.lg} auto;
    padding: ${spacing.lg};
  `}
  ${mediaQuery.extraLarge`
    width: 70rem;
    margin: ${spacing.xl} auto;
    padding: ${spacing.xl};
  `}
  ${mediaQuery.huge`
    width: 82.5rem;
    margin: ${spacing.xl} auto;
    padding: ${spacing.xl};
  `}
`;