import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import lightning from './lightning.png'
import './pricing.sass'

const PricingCard = ({
  bgColor,
  name,
  price,
  users,
  pageviews,
  branding,
  description,
}) => (
  <div className="pricingcard-container">
    <div className="pricingcard-top" style={{ background: bgColor }}>
      <h2>{name}</h2>
    </div>
    <div className="pricingcard-bottom">
      <h1>${price}</h1>
      <span className="permonth">per month, billed monthly</span>
      <ul className="pricingcard-list">
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
      <span className="pricingcard-description">{description}</span>
    </div>
  </div>
)

const Pricing = ({ data }) => (
  <Layout>
    <Img
      fixed={data.leftSwoosh.childImageSharp.fixed}
      style={{ position: 'absolute' }}
      alt="Left Swoosh"
      className="leftSwoosh"
    />
    <Img
      fixed={data.rightSwoosh.childImageSharp.fixed}
      style={{ position: 'absolute' }}
      alt="Right Swoosh"
      className="rightSwoosh"
    />
    <div id="pricing-container">
      <h1>Pricing Options</h1>
      <div id="pricingcards">
        <PricingCard
          bgColor="rgba(204, 204, 204, 0.42)"
          name="Free"
          price="0"
          users="1"
          pageviews="5k"
          branding
          description="for a blog that will do the trick"
        />
        <PricingCard
          bgColor="rgba(103, 180, 249, 0.26)"
          name="Starter"
          price="9"
          users="2"
          pageviews="10k"
          description="for small businesses"
        />
        <PricingCard
          bgColor="rgba(103, 180, 249, 0.4)"
          name="Startup"
          price="29"
          users="5"
          pageviews="50k"
          description="for scaling startups"
        />
        <PricingCard
          bgColor="rgba(59, 103, 226, 0.4)"
          name="Enterprise"
          price="59"
          users="Unlimited"
          pageviews="500k"
          description="for businesses killing the marketing game"
        />
      </div>
      <div id="sectiontwo-container">
        <h1>Not sure what plan is best for you?</h1>
        <span>Start with a free blog and upgrade later</span>
        <a href="https://app.blogwise.co" className="yellow-button">
          Get Started
        </a>
      </div>
    </div>
  </Layout>
)

export default Pricing

export const pageQuery = graphql`
  query PricingQuery {
    leftSwoosh: file(
      absolutePath: { regex: "//assets/pricing-leftSwoosh.png/" }
    ) {
      childImageSharp {
        fixed(height: 525) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    rightSwoosh: file(
      absolutePath: { regex: "//assets/pricing-rightSwoosh.png/" }
    ) {
      childImageSharp {
        fixed(height: 450) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
