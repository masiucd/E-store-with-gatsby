import { css } from 'styled-components';

export const handleHref = (imgName: string) => {
  switch (imgName) {
    case 'insta':
      return 'https://github.com/masiuciszek';
    case 'devil':
      return 'https://masiuciszek.com/';
    case 'twitter':
      return 'https://twitter.com/CiszekMarcell';
    case 'facebook':
      return 'https://twitter.com/CiszekMarcell';
    default:
      return 'https://github.com/masiuciszek';
  }
};

type FlexDirection = 'row' | 'column' | 'column-reverse' | 'row-reverse';
type JustifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

export const handleFlex = (
  flexDirection: FlexDirection,
  justifyContent: JustifyContent,
  alignItems: AlignItems
) => {
  return css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;
};
