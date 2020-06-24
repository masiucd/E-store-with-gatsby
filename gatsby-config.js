require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Masiu's fits`,
    titleTemplate: "%s · Masiu's Fits",
    siteUrl: 'https://marcellable.com',
    description: `Find all you need and what you really want!`,
    author: `@CiszekMarcell`,
    twitter: `@CiszekMarcell`,
    image: `/images/demo.png`,
  },
  plugins: [
    'gatsby-plugin-stripe',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'masius-fits',
        accessToken: process.env.SHOPIFY_TOKEN,

        apiVersion: '2020-01',

        verbose: true,

        paginationSize: 250,

        includeCollections: ['shop', 'content'],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/math.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
