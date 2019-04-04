import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import WhyCardGrid from '../components/WhyCardGrid'

import styles from '../styles/why-blogwise.module.sass'

const companyLinks = {
  'tutoringLogo.png': 'https://blog.hsatutoring.com',
  // 'devLogo.png': 'https://blog.hsa.dev',
}

const WhyBlogwise = ({ data }) => (
  <Layout>
    <div className={styles.whyBlogwise}>
      <div className={styles.whyCards}>
        <div className={styles.whyCards__title}>Why Blogwise, you ask?</div>
        <WhyCardGrid />
      </div>
      <div className={styles.easierBanner}>
        <div className={styles.easierBanner__title}>
          We&apos;re here to make your life easier.
        </div>
        <div className={styles.easierBanner__body}>
          blogwise is here to take your site to the next level by adding in
          functionalty perfect for bragging. Improved your product? Tell your
          audience. Have insights? Tell your audience.
        </div>
      </div>
      <div className={styles.companies}>
        <div className={styles.companiesSection}>
          <h1>Companies that use blogwise</h1>
          <div className={styles.companiesSection__imgs}>
            {data.companies.edges.map(({ node }) => (
              <a href={companyLinks[node.childImageSharp.fixed.originalName]} target="_blank" rel="noreferrer nooponner">
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
