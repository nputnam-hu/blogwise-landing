module.exports = {
  siteMetadata: {
    title: 'blogwise — Build a fast, beautiful blog in minutes',
    description:
      'blogwise is a blazing fast blogging platform that provides you professional blogs and tools to write great content',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
