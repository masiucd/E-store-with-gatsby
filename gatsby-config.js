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
    paths: [
      {
        text: 'products',
        path: '/products',
      },
      {
        text: 'faq',
        path: '/faq',
      },
      {
        text: 'about',
        path: '/about',
      },
    ],
    faq: [
      {
        q: 'How long does the order take?',
        a: 'depends where you live , but at most 2 weeks',
      },
      {
        q: 'How can you have a free shipping?',
        a: 'Because we are awesome 🧨',
      },
      {
        q: 'Do you take Bitcoin payment?',
        a: 'Not now, but in the feature we will accept crypto-currencies',
      },
      {
        q: 'Can I look for a job?',
        a: 'Yes you can contact us here https://marcellable.com',
      },
    ],
    aboutUs: {
      title: "About Masiu's fits",
      content1: `Masiu's fits Marketplace is home to 900+ small businesses including independent brands from 200+ countries.`,
      content2: `Whether you're on the hunt for a vintage sweatshirt from your favourite brand, the perfect pair of vintage jacket or pants, our vintage boutiques have done the hard work for you, sourcing loads of incredible one-off items. Our 80s style and vintage sportswear edits are a great place to start.`,
      content3: `We are focused in you the customer and we will always work for such a great progress ass possible`,
    },
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
