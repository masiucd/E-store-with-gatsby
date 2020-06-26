import * as React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import NavList from './NavList';
import useToggle from '../../../hooks/useToggle';
import Img from 'gatsby-image';
import { IFixedObject } from 'gatsby-background-image';
import { handleFlex } from '../../../utils/styled/flex';
import Search from './Search';
interface Props {
  className: string;
}

interface Path {
  text: string;
  path: string;
}
interface IconNode {
  node: {
    name: string;
    childImageSharp: {
      fixed: IFixedObject;
    };
  };
}
interface NavQuery {
  site: {
    siteMetadata: {
      title: string;
      paths: Path[];
    };
  };
  navIcons: {
    edges: Array<IconNode>;
  };
}

const Nav: React.FC<Props> = ({ className }) => {
  const {
    site: {
      siteMetadata: { title, paths },
    },
    navIcons,
  } = useStaticQuery<NavQuery>(NAV_QUERY);
  const [on, toggle] = useToggle(false);
  const [a, b, c] = navIcons.edges;

  return (
    <nav className={className}>
      <div className="title">
        <h3> {title} </h3>
      </div>
      <Search type="text" placeholder="Search product" />
      <NavList on={on} onPaths={paths} onTitle={title} />
      <div id="cart">
        <Img fixed={a.node.childImageSharp.fixed} />
      </div>
      <div id="navToggle" onClick={toggle}>
        <Img fixed={b.node.childImageSharp.fixed} />
      </div>
    </nav>
  );
};

const NAV_QUERY = graphql`
  {
    site {
      siteMetadata {
        title
        paths {
          text
          path
        }
      }
    }
    navIcons: allFile(filter: { relativeDirectory: { eq: "navicons" } }) {
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

export default styled(Nav)`
  padding: 2.5rem 2rem;
  position: relative;
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.text};

  /* ${handleFlex('row', 'space-around', 'center')}; */
  display: grid;
  grid-template-columns: 200px 1fr auto auto;

  .title {
    width: 100%;
    font-family: 'Montserrat Alternates', sans-serif;
    text-transform: capitalize;
  }
  #cart {
    position: absolute;
    top: 3.5rem;
    right: 7rem;
    cursor: pointer;
    z-index: 100;
  }
  #navToggle {
    position: fixed;
    /* position: absolute; */
    top: 3.5rem;
    right: 1rem;
    cursor: pointer;
    z-index: 100;
  }
`;
