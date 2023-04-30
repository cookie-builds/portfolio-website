import { css } from 'styled-components';

import { fontWeight } from './style';

export function makeTextStyle(
  fw: any = fontWeight.book,
  fs: any = '1em',
  ls: any = 0,
  lh: any = 'normal'
) {
  return css`
    font-weight: ${fw};
    font-size: ${fs};
    letter-spacing: ${ls};
    line-height: ${lh};
  `;
}