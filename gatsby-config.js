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
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://blogwise.us20.list-manage.com/subscribe/post?u=d7ba10510adbea5f592d86002&amp;id=488bab2af1',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Serif Pro`, `Nunito:300,600,700`],
      },
    },
    {
      resolve: 'gatsby-plugin-intercom-spa',
      options: {
        app_id: 'bnz5sax3',
        include_in_development: true,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
