import { css } from 'styled-components';

export const color = {
  lightText: '#DDDDDD',
  darkText: '#222222',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  primary: '#00CDF2',
  lightGray: '#DDDDDD',
  mediumGray: '#AAAAAA',
  darkGray: '#222222',
  backgroundGradient: 'linear-gradient(0deg, rgba(170,170,170,1) 0%, rgba(221,221,221,1) 100%)',
};

export const screenSize = {
  small: '30rem',
  medium: '48rem',
  large: '64rem',
  extraLarge: '75rem',
  huge: '120rem',
};

export const mediaQuery = {
  small: (...args: any) => css`
    @media only screen and (min-width: ${screenSize.small}) {
      ${css(args)}
    }
  `,
  medium: (...args: any) => css`
    @media only screen and (min-width: ${screenSize.medium}) {
      ${css(args)}
    }
  `,
  large: (...args: any) => css`
    @media only screen and (min-width: ${screenSize.large}) {
      ${css(args)}
    }
  `,
  extraLarge: (...args: any) => css`
    @media only screen and (min-width: ${screenSize.extraLarge}) {
      ${css(args)}
    }
  `,
  huge: (...args: any) => css`
    @media only screen and (min-width: ${screenSize.huge}) {
      ${css(args)}
    }
  `,
};

export const shadow = {
  none: 'none',
  medium: `0px 8px 22px 1px ${color.mediumGray}`,
};

export const fontWeight = {
  light: 300,
  book: 400,
  medium: 500,
  bold: 700,
  black: 800,
};

export const textSize = {
  p: () => css`
    font-weight: ${fontWeight.book};
    font-size: 1.125rem;
    
    ${mediaQuery.small`
      font-size: 1.125rem;
    `}
    ${mediaQuery.medium`
      font-size: 1.125rem;
    `}
    ${mediaQuery.large`
      font-size: 1.25rem;
    `}
    ${mediaQuery.extraLarge`
      font-size: 1.25rem;
    `}
  `,
  subtitle: () => css`
    font-weight: ${fontWeight.medium};
    line-height: 1;
    font-size: 1.5rem;

    ${mediaQuery.small`
      font-size: 1.75rem;
    `}
    ${mediaQuery.medium`
      font-size: 1.75rem;
    `}
    ${mediaQuery.large`
      font-size: 1.875rem;
    `}
    ${mediaQuery.extraLarge`
      font-size: 1.875rem;
    `}
  `,
  title: () => css`
    font-weight: ${fontWeight.bold};
    font-size: 2rem;

    ${mediaQuery.small`
      font-size: 2.25rem;
    `}
    ${mediaQuery.medium`
      font-size: 2.25rem;
    `}
    ${mediaQuery.large`
      font-size: 2.5rem;
    `}
    ${mediaQuery.extraLarge`
      font-size: 2.5rem;
    `}
  `,
  huge: () => css`
    font-weight: ${fontWeight.black};
    line-height: 1;
    font-size: 2.25rem;

    ${mediaQuery.small`
      font-size: 3rem;
    `}
    ${mediaQuery.medium`
      font-size: 3rem;
    `}
    ${mediaQuery.large`
      font-size: 2.625rem;
    `}
    ${mediaQuery.extraLarge`
      font-size: 3.5rem;
    `}
  `,
};

export const fontFamily = { regular: 'Gotham', special: 'Roboto Mono' };

export const spacing = { xs: 0.25, sm: 0.5, md: 1, lg: 1.5, xl: 2, xxl: 4, huge: 8 };

export const borderWidth = { sm: '1px', md: '2px' };
