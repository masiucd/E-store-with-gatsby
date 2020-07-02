import { css } from 'styled-components';

export const handleHref = (imgName: string) => {
  switch (imgName) {
    case 'github_light':
      return 'https://github.com/masiuciszek';
    case 'brochure':
      return 'https://masiuciszek.com/';
    case 'twitter_light':
      return 'https://twitter.com/CiszekMarcell';
    case 'js':
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
