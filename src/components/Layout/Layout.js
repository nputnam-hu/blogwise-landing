import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Intercom from 'react-intercom'

import Navbar from '../Navbar'
import Footer from '../Footer'

import styles from './Layout.module.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        navbarLogo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(height: 52) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        footerLogo: file(relativePath: { eq: "logo-sqaureMark.png" }) {
          childImageSharp {
            fixed(height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        twitter: file(relativePath: { eq: "social/twitter.png" }) {
          childImageSharp {
            fixed(height: 23) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        facebook: file(relativePath: { eq: "social/facebook.png" }) {
          childImageSharp {
            fixed(height: 23) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        linkedin: file(relativePath: { eq: "social/linkedin.png" }) {
          childImageSharp {
            fixed(height: 23) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.layout}>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/favicon.ico" // Intentionally left in static/img
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon.ico"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon.ico"
            sizes="16x16"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#fff" />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          {/** Intentionally left in static/img */}
          <meta property="og:image" content="/img/og-image.png" />{' '}
        </Helmet>
        <Navbar logoFixed={data.navbarLogo.childImageSharp.fixed} />
        <div>{children}</div>
        <Intercom appID="bnz5sax3" />
        <Footer
          logoFixed={data.footerLogo.childImageSharp.fixed}
          linkedinFixed={data.linkedin.childImageSharp.fixed}
          facebookFixed={data.facebook.childImageSharp.fixed}
          twitterFixed={data.twitter.childImageSharp.fixed}
        />
      </div>
    )}
  />
)

export default TemplateWrapper
