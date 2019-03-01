module.exports = {
  siteMetadata: {
    title: 'Blogwise — Build a fast, beautiful blog in minutes',
    description:
      'Blogwise is a blazing fast blogging platform that provides you professional blogs and tools to write great content',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'assets',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Serif Pro`, `Nunito:300,600,700`],
      },
    },
  ],
}
