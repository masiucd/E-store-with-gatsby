import * as React from 'react';
import styled from 'styled-components';
import { handleFlex } from '../../utils/styled/flex';
import { MyLink } from '../styled/Buttons';

interface Props {
  className: string;
  mainTitle: string;
  secondaryTitle?: string;
  needCta?: boolean;
  pathname?: string;
  ctaText?: string;
  textShadow?: boolean;
  textCenter?: boolean;
  textColor?: string;
}

const Title: React.FC<Props> = ({
  className,
  mainTitle,
  secondaryTitle,
  needCta,
  pathname,
  ctaText,
  textShadow,
  textCenter,
  textColor,
}) => {
  return (
    <section className={className}>
      <h1>{mainTitle}</h1>
      <h3>{secondaryTitle}</h3>
      {needCta && (
        <CtaWrapper>
          <MyLink to={pathname || '/products'}>{ctaText || 'Products'}</MyLink>
        </CtaWrapper>
      )}
    </section>
  );
};

const CtaWrapper = styled.div`
  width: 20vmax;
  padding: 2rem 1rem;
  margin: 0 auto;
  ${handleFlex('row', 'center', 'center')};
`;

export default styled(Title)`
  z-index: 5;
  ${handleFlex('column', 'center', 'center')};
  color: ${({ textColor, theme: { colors } }) =>
    textColor ? textColor : colors.text};
  text-align: ${props => (props.textCenter ? 'center' : null)};
  h1,
  h3 {
    text-shadow: 2px 2px 3px
      ${({ theme, textShadow }) =>
        textShadow ? theme.colors.secondary : 'none'};
  }
`;
