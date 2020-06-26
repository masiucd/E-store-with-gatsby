import * as React from 'react';
import styled from 'styled-components';
import GatsbyBgImage, { IFluidObject } from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import { handleFlex } from '../../utils/styled/flex';

interface Props {
  className: string;
  children: React.ReactNode;
  isLarge?: boolean;
}

interface HeroQuery {
  heroImg: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
}

const Hero: React.FC<Props> = ({ className, children, isLarge }) => {
  const {
    heroImg: { childImageSharp },
  } = useStaticQuery<HeroQuery>(HERO_QUERY);

  return (
    <GatsbyBgImage fluid={childImageSharp.fluid} className={className}>
      {children}
    </GatsbyBgImage>
  );
};

const HERO_QUERY = graphql`
  {
    heroImg: file(relativePath: { eq: "hero22.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default styled(Hero)`
  ${handleFlex('column', 'center', 'center')};
  background: ${props =>
    props.isLarge
      ? `linear-gradient(rgba(36, 64, 111, 0.3), rgba(9, 1, 00, 0.7))`
      : 'none'};
  width: 100%;
  min-height: ${props => (props.isLarge ? 'calc(90vh - 80px)' : '50vh')};
  background-repeat: repeat-y;
  background-position: bottom;
  background-size: cover;
  opacity: 1 !important;
`;
