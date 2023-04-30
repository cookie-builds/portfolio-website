import styled from 'styled-components';

import { mediaQuery } from '../../global/style';

export const StandardContainer = styled.div`
  width: 90%;

  ${mediaQuery.medium`
    width: 90%;
  `}
  ${mediaQuery.large`
    width: 80%;
  `}
  ${mediaQuery.extraLarge`
    width: 70rem;
  `}
  ${mediaQuery.huge`
    width: 82.5rem;
  `}
`;