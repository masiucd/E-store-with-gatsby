import * as React from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import NavList from './NavList';
import useToggle from '../../../hooks/useToggle';
import Img from 'gatsby-image';
import { IFixedObject } from 'gatsby-background-image';
import { handleFlex } from '../../../utils/styled/flex';
import Search from './Search';
import { below } from '../../../utils/styled/media';
import { countCartItems } from '../../../context/cart/utils';
import {
  useCartState,
  useCartDispatch,
} from '../../../context/cart/CartProvider';
import CartDropDown from '../../cart/CartDropDown';

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
  const { cart } = useCartState();
  const dispatch = useCartDispatch();

  return (
    <nav className={className}>
      <div className="title">
        <h3>
          {' '}
          <Link to="/">{title}</Link>{' '}
        </h3>
      </div>
      <div id="navToggle" onClick={toggle}>
        <Img fixed={b.node.childImageSharp.fixed} />
      </div>
      <Search type="text" placeholder="Search product" />
      <NavList on={on} onPaths={paths} onTitle={title} onToggle={toggle} />
      <Icons>
        <div className="col">
          <Img fixed={c.node.childImageSharp.fixed} />
        </div>
        <div className="col" onClick={() => dispatch({ type: 'IS_OPEN' })}>
          <Img fixed={a.node.childImageSharp.fixed} />
          <span id="cart-amount">{countCartItems(cart)}</span>
        </div>
      </Icons>
      <CartDropDown />
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
  .col {
    ${handleFlex('row', 'center', 'center')};

    span {
      margin-left: 1rem;
      font-size: 2rem;
    }
  }
  ${below.medium`
      position: absolute;
      top: 1rem;
      right: 0;
  `}
`;

export default styled(Nav)`
  padding: 2.5rem 2rem;
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.text};
  position: relative;
  height: 18rem;
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto;
    /* ${handleFlex('row', 'space-between', 'center')} */
  ${below.medium`
    grid-template-columns: 20px 2fr;
  `}

  .title {
    width: 100%;
    font-family: 'Montserrat Alternates', sans-serif;
    text-transform: capitalize;
    padding: 1.5rem 0.5rem;
    h3 {
      position: relative;
      border-bottom: 2px solid ${({ theme: { colors } }) => colors.secondary};
      a {
        color: ${({ theme: { colors } }) => colors.text};
        font-size: 3rem;
      }
    }
    ${below.medium`
      h3{
        margin: 1rem 0;
        position: absolute;
        top: 2rem;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}

    ${below.small`
      display: none;
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
    top: 0.5rem;
    left: 2rem;
    cursor: pointer;
    z-index: 100;
  }
`;
