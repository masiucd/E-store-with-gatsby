import * as React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import NavList from './NavList';
import useToggle from '../../../hooks/useToggle';
import Img from 'gatsby-image';
import { IFixedObject } from 'gatsby-background-image';
import { handleFlex } from '../../../utils/styled/flex';
import Search from './Search';
import { below } from '../../../utils/styled/media';
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
      <div id="navToggle" onClick={toggle}>
        <Img fixed={c.node.childImageSharp.fixed} />
      </div>
      <Search type="text" placeholder="Search product" />
      <NavList on={on} onPaths={paths} onTitle={title} onToggle={toggle} />
      <Icons>
        <Img fixed={a.node.childImageSharp.fixed} />
        <Img fixed={b.node.childImageSharp.fixed} />
      </Icons>
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

const Icons = styled.div`
  ${handleFlex('row', 'space-evenly', 'center')};
  img {
    cursor: pointer;
  }
  ${below.medium`

    ${handleFlex('row', 'flex-end', 'center')};
    & > *{
      margin-right: 2rem;
    }
  `}
`;

export default styled(Nav)`
  padding: 2.5rem 2rem;
  position: relative;
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.text};

  /* ${handleFlex('row', 'space-around', 'center')}; */
  display: grid;
  grid-template-columns: 200px 1fr 200px ;
  grid-template-rows: auto;
  ${below.medium`
    grid-template-columns: 20px 1fr 200px ;
  `}

  .title {
    width: 100%;
    font-family: 'Montserrat Alternates', sans-serif;
    text-transform: capitalize;
    padding: 1.5rem .5rem;
    h3{
      position: relative;
    }
    ${below.medium`
      h3{
        display:none;
      }
    `}
  }
  #cart {
    position: absolute;
    top: 3.5rem;
    right: 7rem;
    cursor: pointer;
    /* z-index: ; */
  }
  #navToggle {
    position: fixed;
    /* position: absolute; */
    top: .5rem;
    left: 2rem;
    cursor: pointer;
    z-index: 100;
  }
`;
