    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

  module.exports = {
    /* Your site config here */
    siteMetadata:{
      title:"gatsby-Bootstrap",
      description:"This is the description of our website",
      keywords:"gatsby, gatsbyjs project, gatsby bootstrap",
      image: '/src/images/gatsby.jpg',
      url: 'https://www.gatsbyjs.org/'
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
      {resolve: `gatsby-transformer-remark`},
      {resolve: `gatsby-source-wordpress`, 
        options:{
        baseUrl:`codingsrc.com/`,
        protocol:`http`,
        hostingWPCOM: false,
      },
      },
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `GatsbyJS Bootstrap Tutorial`,
          short_name: `GatsbyJS`,
          start_url: `/`,
          background_color: `#f8f9fa`,
          theme_color: `#FFFFFF`,
          display: `standalone`,
        },
      },
      `gatsby-plugin-offline`
    ],
  };

