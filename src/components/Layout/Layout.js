import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Intercom from 'react-intercom'

import Navbar from '../Navbar'
import Footer from '../Footer'

import styles from './Layout.module.sass'
import '../../styles/global.sass'
import 'animate.css/animate.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TemplateWrapper = ({ children, footerIsBlue }) => (
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
            fixed(height: 35) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        footerLogo_grey: file(
          relativePath: { eq: "logo-sqaureMark_grey.png" }
        ) {
          childImageSharp {
            fixed(height: 35) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        twitter: file(relativePath: { eq: "social/twitter.png" }) {
          childImageSharp {
            fixed(height: 25) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        twitter_grey: file(relativePath: { eq: "social/twitter_grey.png" }) {
          childImageSharp {
            fixed(height: 25) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        facebook: file(relativePath: { eq: "social/facebook.png" }) {
          childImageSharp {
            fixed(height: 25) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        facebook_grey: file(relativePath: { eq: "social/facebook_grey.png" }) {
          childImageSharp {
            fixed(height: 25) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        # linkedin: file(relativePath: { eq: "social/linkedin.png" }) {
        #   childImageSharp {
        #     fixed(height: 23) {
        #       ...GatsbyImageSharpFixed
        #     }
        #   }
        # }
      }
    `}
    render={data => {
      const footerProps = footerIsBlue
        ? {
            logoFixed: data.footerLogo.childImageSharp.fixed,
            facebookFixed: data.facebook.childImageSharp.fixed,
            twitterFixed: data.twitter.childImageSharp.fixed,
          }
        : {
            logoFixed: data.footerLogo_grey.childImageSharp.fixed,
            facebookFixed: data.facebook_grey.childImageSharp.fixed,
            twitterFixed: data.twitter_grey.childImageSharp.fixed,
          }
      return (
        <div className={styles.layout}>
          <Helmet>
            <link rel="stylesheet" href="https://use.typekit.net/nxa2kay.css" />
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
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#fff" />
            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:url" content="/" />
            {/** Intentionally left in static/img */}
            <meta property="og:image" content="/img/og-image.png" />{' '}
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-135783812-1"
            />
          </Helmet>
          <Navbar logoFixed={data.navbarLogo.childImageSharp.fixed} />
          <>{children}</>
          <Footer isBlue={footerIsBlue} {...footerProps} />
        </div>
      )
    }}
  />
)

export default TemplateWrapper
