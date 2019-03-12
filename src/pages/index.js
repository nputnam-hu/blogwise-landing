import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import WhyCardGrid from '../components/WhyCardGrid'
import styles from '../styles/index.module.sass'

const Index = ({ data }) => (
  <Layout>
    <div className={styles.index}>
      <Img
        fluid={data.upperSwoosh.childImageSharp.fluid}
        style={{ position: 'absolute' }}
        alt="Woman with megaphone"
        className={styles.upperSwoosh}
      />
      <div className={styles.sectionone}>
        <div style={{ height: '4vh' }} />
        <h1>You made the perfect product.</h1>
        <h1>Time to tell everyone.</h1>
        <div style={{ paddingBottom: '60px' }} />
        <Img
          fixed={data.mobile.childImageSharp.fixed}
          alt="cloud of blogs"
          className={styles.sectionone__mobileHeaderPhoto}
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
        {/* <a className="yellow-button sectionone">Coming Soon</a> */}
        <a
          className="yellow-button"
          href="mailto:support@blogwise.co?subject=Blogwise Beta Inquiry"
        >
          Apply For Beta
        </a>
      </div>
      <div className={styles.sectiontwo}>
        <div className={styles.sectiontwo__text}>
          <h2>Get your message out with a beautiful blog built in minutes</h2>
          <p>Like actually in minutes, no joke</p>
        </div>
        <Img
          fluid={data.screenshot1.childImageSharp.fluid}
          alt="blog demo"
          className={styles.sectiontwo__screenshot1}
        />
        <p className={styles.sectiontwo__template}>
          Our templates autopopulate your information - <br /> so you never have
          to struggle with broken customization tools.{' '}
        </p>
        <Img
          fluid={data.screenshot2.childImageSharp.fluid}
          alt="blog demo"
          className={styles.sectiontwo__screenshot2}
        />
      </div>
      <Img
        fluid={data.midSwoosh.childImageSharp.fluid}
        style={{ position: 'absolute' }}
        alt="swoosh"
        className={styles.midSwoosh}
      />
      <div className={styles.sectionthree}>
        <h1>WHY BLOGWISE?</h1>
        <WhyCardGrid />
      </div>
      <div className={styles.sectionfour}>
        <h1>Content Marketing is the Future</h1>
        <h2>Are you ready to blogwise?</h2>
        <br />
        {/* <Link className="yellow-button" to="/features">
          Explore Features
        </Link> */}
        <a
          className="yellow-button"
          href="mailto:support@blogwise.co?subject=Blogwise Beta Inquiry"
        >
          Apply For Beta
        </a>
      </div>
    </div>
  </Layout>
)

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    upperSwoosh: file(relativePath: { eq: "index-upperSwoosh.png" }) {
      childImageSharp {
        fluid(maxHeight: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobile: file(relativePath: { eq: "megaphone.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    midSwoosh: file(relativePath: { eq: "index-midSwoosh.png" }) {
      childImageSharp {
        fluid(maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    screenshot1: file(relativePath: { eq: "index-screenshot1.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    screenshot2: file(relativePath: { eq: "index-screenshot2.png" }) {
      childImageSharp {
        fluid(maxWidth: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
