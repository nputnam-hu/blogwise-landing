import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import WhyCardGrid from '../components/WhyCardGrid'
import './index.sass'

const Index = ({ data }) => (
  <Layout>
    <div id="index-container">
      <Img
        fluid={data.upperSwoosh.childImageSharp.fluid}
        style={{ position: 'absolute' }}
        alt="Woman with megaphone"
        className="upperSwoosh"
      />
      <div id="sectionone-container">
        <h1>You made the perfect product.</h1>
        <h1>Time to tell everyone.</h1>
        <div style={{ paddingBottom: '60px' }} />
        <Img
          fixed={data.mobile.childImageSharp.fixed}
          alt="cloud of blogs"
          className="mobile-headerPhoto"
        />
        <p>
          blogwise is the easiest way to create a blog for your business. Sign
          up in minutes to get a world-class site hosted under your own domain.
        </p>
        <p>
          Building a great product is hard. Having a great blog doesn’t have to
          be.{' '}
        </p>
        <p>
          We're launching in late March. Email support@blogwise.co if you'd like
          to to sign up as a beta user.
        </p>
        <div style={{ paddingBottom: '50px' }} />
        {/* <a className="yellow-button sectionone" href="https://app.blogwise.co">
          Get Started
        </a> */}
        <a className="yellow-button sectionone">Coming Soon</a>
      </div>
      <div id="sectiontwo-container">
        <div id="sectiontwo-text">
          <h2>Get your message out with a beautiful blog built in minutes</h2>
          <p>Like actually in minutes, no joke</p>
        </div>
        <Img
          fluid={data.screenshot1.childImageSharp.fluid}
          alt="blog demo"
          className="screenshot1"
        />
        <p id="template-explanation">
          Our templates autopopulate your information - <br /> so you never have
          to struggle with broken customization tools.{' '}
        </p>
        <Img
          fluid={data.screenshot2.childImageSharp.fluid}
          alt="blog demo"
          className="screenshot2"
        />
      </div>
      <Img
        fluid={data.midSwoosh.childImageSharp.fluid}
        style={{ position: 'absolute' }}
        alt="swoosh"
        className="midSwoosh"
      />
      <div id="sectionthree-container">
        <h1>WHY BLOGWISE?</h1>
        <WhyCardGrid />
      </div>
      <div id="sectionfour-container">
        <h1>Content Marketing is the Future</h1>
        <h2>Are you ready to blogwise?</h2>
        <br />
        <Link className="yellow-button" to="/features">
          Explore Features
        </Link>
      </div>
    </div>
  </Layout>
)

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    upperSwoosh: file(
      absolutePath: { regex: "//assets/index-upperSwoosh.png/" }
    ) {
      childImageSharp {
        fluid(maxHeight: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobile: file(absolutePath: { regex: "//assets/megaphone.png/" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    midSwoosh: file(absolutePath: { regex: "//assets/index-midSwoosh.png/" }) {
      childImageSharp {
        fluid(maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    screenshot1: file(
      absolutePath: { regex: "//assets/index-screenshot1.png/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    screenshot2: file(
      absolutePath: { regex: "//assets/index-screenshot2.png/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
