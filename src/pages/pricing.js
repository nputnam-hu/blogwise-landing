import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import PricingCardGrid from '../components/PricingCardGrid'

import styles from '../styles/pricing.module.sass'

const Pricing = ({ data }) => (
  <Layout>
    <Img
      fixed={data.leftSwoosh.childImageSharp.fixed}
      style={{ position: 'absolute' }}
      alt="Left Swoosh"
      className={styles.leftSwoosh}
    />
    <Img
      fixed={data.rightSwoosh.childImageSharp.fixed}
      style={{ position: 'absolute' }}
      alt="Right Swoosh"
      className={styles.rightSwoosh}
    />
    <div className={styles.pricing}>
      <div className={styles.pricing__title}>Pricing Options</div>
      <PricingCardGrid />
      <div className={styles.getStartedSection}>
        <div className={styles.getStartedSection__title}>
          Not sure what plan is best for you?
        </div>
        <div className={styles.getStartedSection__message}>
          Start your 14 day free trial with the starter plan today
        </div>
        <a
          href="https://app.blogwise.co/register"
          className={styles.yellowButton}
        >
          Get Started
        </a>
      </div>
    </div>
  </Layout>
)

export default Pricing

export const pageQuery = graphql`
  query PricingQuery {
    leftSwoosh: file(relativePath: { eq: "pricing-leftSwoosh.png" }) {
      childImageSharp {
        fixed(height: 525) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    rightSwoosh: file(relativePath: { eq: "pricing-rightSwoosh.png" }) {
      childImageSharp {
        fixed(height: 450) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
