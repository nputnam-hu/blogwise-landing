import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import PricingCardGrid from '../components/PricingCardGrid'

import lightning from '../images/small-lightning.png'
import styles from '../styles/pricing.module.sass'

const PricingCard = ({
  bgColor,
  name,
  price,
  users,
  pageviews,
  branding,
  description,
}) => (
  <div className={styles.pricingCard}>
    <div className={styles.pricingCard__top} style={{ background: bgColor }}>
      <h2>{name}</h2>
    </div>
    <div className={styles.pricingCard__bottom}>
      <h1>${price}</h1>
      <span className={styles.pricingCard__permonth}>
        per month, billed monthly
      </span>
      <ul className={styles.pricingCard__list}>
        <li>
          <img src={lightning} alt="Bullet Point" />
          <span>
            {users} Staff User
            {(parseInt(users, 10) > 1 || users === 'Unlimited') && 's'}
          </span>
        </li>
        <li>
          <img src={lightning} alt="Bullet Point" />
          <span>{pageviews} page views/mo</span>
        </li>
        <li>
          <img src={lightning} alt="Bullet Point" />
          <span>{branding ? 'blogwise branding' : 'ad free'}</span>
        </li>
      </ul>
      <span className={styles.pricingCard__description}>{description}</span>
    </div>
  </div>
)

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
          Start with a free blog and upgrade later
        </div>
        <a href="https://app.blogwise.co" className={styles.yellowButton}>
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
