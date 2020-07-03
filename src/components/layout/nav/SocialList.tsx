import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { IFixedObject } from 'gatsby-background-image';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { handleFlex, handleHref } from '../../../utils/styled/flex';
import { below } from '../../../utils/styled/media';
type Node = {
  node: {
    name: string;
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
};

interface Query {
  socialIcons: {
    edges: Array<Node>;
  };
}

const SocialList: React.FC = () => {
  const {
    socialIcons: { edges },
  } = useStaticQuery<Query>(SOCIAL_QUERY);

  return (
    <StyledSocialList>
      {edges.map(({ node }) => (
        <li key={node.name}>
          <a href={handleHref(node.name)} target="_blank">
            <Img fixed={node.childImageSharp.fixed} alt={node.name} />
          </a>
        </li>
      ))}
    </StyledSocialList>
  );
};

const StyledSocialList = styled.ul`
  ${handleFlex('row', 'space-between', 'center')};
  padding: 3rem;
  width: calc(100% - 10px);
  transition: ${({ theme }) => theme.transition.quickTransition};
  background: ${({ theme }) => theme.colors.secondary};
  margin-top: auto;
  clip-path: polygon(0% 0%, 95% 0, 100% 50%, 95% 100%, 0% 100%);

  li {
  }
  a {
    color: ${({ theme }) => theme.colors.text};
  }
  ${below.small`



  `}
`;

const SOCIAL_QUERY = graphql`
  {
    socialIcons: allFile(filter: { relativeDirectory: { eq: "social" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 35, height: 35) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default SocialList;
