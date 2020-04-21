module.exports = {
  siteMetadata: {
    title: `SOLTUM`,
    description: `SOLTUM - firma z krakowa działająca w branży budowlanej. Kierownik budowy Kraków. Kierownik budowy małopolska. Inspektor nadzoru budowlanego. Inspektor nadzory inwestorskiego. Przegląd techniczny budynków. Odbiory budynków i mieszkań Kraków. Inwentaryzacje budynków i mieszkań. Wykonanie kosztorysów budowlanych.`,
    author: `pawel.banach@codeverest.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SOLTUM - Fachowa pomoc budowlana`,
        short_name: `soltum`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/logo/thumbnail-soltum.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
    // this (optional) plugin enables
    // Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
