import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from './Navbar'
import Footer from './Footer'

import '../all.sass'

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
        file(absolutePath: { regex: "//assets/logo.png/" }) {
          childImageSharp {
            fixed(height: 52) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data =>
      !console.log(data) && (
        <div>
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
              href="/img/favicon.ico"
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

            <meta name="theme-color" content="#fff" />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content="/img/og-image.png" />
          </Helmet>
          <Navbar logoFixed={data.file.childImageSharp.fixed} />
          <div>{children}</div>
          <Footer />
        </div>
      )
    }
  />
)

export default TemplateWrapper
