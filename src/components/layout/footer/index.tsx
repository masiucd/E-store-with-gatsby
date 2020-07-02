import * as React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import SocialList from '../nav/SocialList';
import { below, above } from '../../../utils/styled/media';
import { handleFlex } from '../../../utils/styled/flex';
import FooterLinks from './FooterLinks';

interface Props {
  className: string;
}
interface Path {
  text: string;
  path: string;
}
interface Query {
  site: {
    siteMetadata: {
      title: string;
      paths: Path[];
    };
  };
}

const Footer: React.FC<Props> = ({ className }) => {
  const {
    site: {
      siteMetadata: { title, paths },
    },
  } = useStaticQuery<Query>(FOOTER_QUERY);

  return (
    <footer className={className}>
      <div className="title">
        <h3>{title}</h3>
        <p>Awesome Fits for you</p>
      </div>
      <div className="linksAndIcons">
        <SocialList />
        <FooterLinks links={paths} />
      </div>
    </footer>
  );
};

const FOOTER_QUERY = graphql`
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
  }
`;

export default styled(Footer)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem 0.5rem;
  ${handleFlex('column', 'center', 'center')};
  .title {
    text-align: center;
    margin: 2rem 0;
    p {
      text-transform: capitalize;
    }
  }
  .linksAndIcons {
    ${handleFlex('column', 'center', 'center')};
    ul {
      padding: 0;
      background: 0;
      clip-path: none;
      li {
        background: ${({ theme: { colors } }) => colors.secondary};
        padding: 1rem;
        border-radius: 0.5rem;
      }
    }
  }
  width: 100%;
  .title {
    h3 {
      border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
      width: 240px;
    }
  }
  ${below.medium`
    .linksAndIcons {
      width: 60%;
    }
  `}
  ${below.small`
    .linksAndIcons {
      width: 100%;
    }
  `}
  ${above.medium`
  .title {
    margin-left: 2rem;
  }
    display: grid;
    grid-template-columns: 50% 50%;
    .title {
      p,h3 {
        text-align: left;
      }
    }
  `}
`;
