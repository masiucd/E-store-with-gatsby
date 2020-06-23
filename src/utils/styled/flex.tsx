import { css } from 'styled-components';

export const handleHref = (imgName: string) => {
  switch (imgName) {
    case 'jonkri':
      return 'https://github.com/masiuciszek';
    case 'avancera':
      return 'https://masiuciszek.com/';
    case 'marcellable':
      return 'https://marcellable.com';
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
