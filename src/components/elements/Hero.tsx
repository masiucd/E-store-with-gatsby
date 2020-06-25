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
    heroImg: file(relativePath: { eq: "hero.jpg" }) {
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
  width: 100%;
  background-position: bottom;
  /* background-repeat: repeat-y; */
  background-size: cover;
  height: ${props => (props.isLarge ? 'calc(90vh - 80px)' : '50vh')};
`;
