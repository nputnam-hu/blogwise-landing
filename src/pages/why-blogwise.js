import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Demo from '../components/Demo'

import styles from '../styles/why-blogwise.module.sass'

const companyLinks = {
  'tutoringLogo.png': 'https://blog.hsatutoring.com',
  'hsalogo.png': 'https://blog.hsa.net',
  'devLogo.png': 'https://blog.hsadev.com',
}

const WhySection = ({ fixed, header, text }) => (
  <div className={styles.whySection}>
    <Img fixed={fixed} alt="Header" />
    <h2>{header}</h2>
    <p>{text}</p>
  </div>
)

const FounderSection = ({ fixed, name, title }) => (
  <div className={styles.founderSection}>
    <Img
      fixed={fixed}
      alt="Header"
      className={styles.founderSection__headshot}
    />
    <h3>{name}</h3>
    <p>{title}</p>
  </div>
)

const WhyBlogwise = ({ data }) => (
  <Layout>
    <div className={styles.whyBlogwise}>
      <div className={styles.demos}>
        <h1 className={styles.demos__title}>Blogging made easy</h1>
        <div className={styles.demos__subheader}>
          Design your blog, brainstorm ideas, and write and publish articles all
          in one place. We build our tools to make blogging as efficient as
          possible so you can focus on engaging your audience.
        </div>
        <Demo />
      </div>
      <div className={styles.easierBanner}>
        <h1 className={styles.easierBanner__title}>Why blogwise?</h1>
        <div className={styles.easierBanner__body}>
          <WhySection
            fixed={data.womanWithLaptop.childImageSharp.fixed}
            header="blazingly fast"
            text="blogwise is built with the latest web technology to be up to 2x as fast as Wordpress. Faster page load times means less customer churn and higher engagement. Don’t get bogged down with legacy software: use the best and latest."
          />
          <WhySection
            fixed={data.seo.childImageSharp.fixed}
            header="search optimized"
            text="When you're busy building your own business, you don't have time to be worrying about the technical details of your blog. We use automated tools to give your site the benefis of SEO, all under the hood."
          />
        </div>
      </div>
      <div className={styles.companies}>
        <div className={styles.companiesSection}>
          <h1>
            We’re dedicated to giving you the best blog experience possible
          </h1>
          <h4>Meet the team behind the scenes</h4>
          <div className={styles.companiesSection__founderSections}>
            <FounderSection
              fixed={data.noah.childImageSharp.fixed}
              name="Noah Putnam"
              title="CEO"
            />
            <FounderSection
              fixed={data.dara.childImageSharp.fixed}
              name="Dara Li"
              title="COO"
            />
            <FounderSection
              fixed={data.annelise.childImageSharp.fixed}
              name="Annelise Hillmann"
              title="CMO"
            />
            <FounderSection
              fixed={data.ivraj.childImageSharp.fixed}
              name="Ivraj Seerha"
              title="CTO"
            />
          </div>
          <a
            className={styles.founderSection__readMore}
            href="https://blog.blogwise.co/a/2019-03-24-blogwise_our_team"
            target="_blank"
            rel="noopener noreferrer"
          >
            READ MORE
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon/navigation/chevron_right_24px">
                <path
                  id="icon/navigation/chevron_right_24px_2"
                  d="M10.194 5.77783L8.6665 7.30533L13.6282 12.2778L8.6665 17.2503L10.194 18.7778L16.694 12.2778L10.194 5.77783Z"
                  fill="#C4C4C4"
                />
              </g>
            </svg>
          </a>
          <h1>Hear from our users</h1>
          <div style={{ height: '60px' }} />
          <div className={styles.companiesSection__imgs}>
            {data.companies.edges.map(({ node }) => (
              <a
                href={companyLinks[node.childImageSharp.fixed.originalName]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img
                  fixed={node.childImageSharp.fixed}
                  alt={node.name}
                  className={styles.companiesSection__img}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default WhyBlogwise

export const pageQuery = graphql`
  query WhyBlogwiseQuery {
    womanWithLaptop: file(relativePath: { eq: "womanWithLaptop.png" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    seo: file(relativePath: { eq: "seo.png" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    noah: file(relativePath: { eq: "noah.png" }) {
      childImageSharp {
        fixed(width: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dara: file(relativePath: { eq: "dara.png" }) {
      childImageSharp {
        fixed(width: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    annelise: file(relativePath: { eq: "annelise.png" }) {
      childImageSharp {
        fixed(width: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ivraj: file(relativePath: { eq: "ivraj.png" }) {
      childImageSharp {
        fixed(width: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    companies: allFile(filter: { relativePath: { regex: "/companies/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(height: 100, quality: 90) {
              originalName
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
