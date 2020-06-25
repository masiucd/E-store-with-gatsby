import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

const SEO_QUERY = graphql`
  {
    seo: site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        twitterUsername: twitter
        siteUrl
        description
        defaultImage: image
      }
    }
  }
`;

interface SeoQuery {
  seo: {
    siteMetadata: {
      defaultImage: string;
      defaultTitle: string;
      description: string;
      siteUrl: string;
      titleTemplate: string;
      twitterUsername: string;
    };
  };
}

const Seo: React.FC<Props> = ({ title, description, image, article }) => {
  const { pathname } = useLocation();
  const {
    seo: { siteMetadata },
  } = useStaticQuery<SeoQuery>(SEO_QUERY);

  const seo = {
    title: title || siteMetadata.defaultTitle,
    description: description || siteMetadata.description,
    image: `${siteMetadata.siteUrl}${image || siteMetadata.defaultImage}`,
    url: `${siteMetadata.siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={siteMetadata.titleTemplate}>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {siteMetadata.twitterUsername && (
        <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default Seo;
