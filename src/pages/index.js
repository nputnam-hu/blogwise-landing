import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import Layout from '../components/Layout'
import styles from '../styles/index.module.sass'
import FeatureCards from '../components/FeatureCards/FeatureCards'

class Index extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      emailSubmitted: false,
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    await addToMailchimp(this.state.email, this.state)
    this.setState({ emailSubmitted: true })
  }

  render() {
    const { data } = this.props

    return (
      <Layout footerIsBlue>
        <div className={styles.index}>
          {/* Header Section */}
          <div className={styles.header}>
            <Img
              fluid={data.header.childImageSharp.fluid}
              alt="People working to build a blog"
              className={styles.header__image}
            />
            {/* <HeaderImage /> */}
            <div className={styles.header__content}>
              <div className={styles.header__content__title}>
                <h1 className={styles.header__content__title__line}>
                  You made the perfect product.
                </h1>
                <h1 className={styles.header__content__title__line}>
                  Time to tell everyone.
                </h1>
              </div>
              <div className={styles.header__content__body}>
                <div
                  className={`${styles.header__content__body__line} ${
                    styles.first
                  }`}
                >
                  blogwise is the easiest way to start content marketing for
                  your business. <br />
                  Sign up in minutes to get a full website hosted under your own
                  domain.{' '}
                </div>
                <div className={styles.header__content__body__line}>
                  Building a great product is hard. <br />
                  Having a great blog doesn’t have to be.{' '}
                </div>
              </div>
              <a
                className={styles.header__button}
                href="https://app.blogwise.co/register"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Middle Section */}
          <div className={styles.midSection}>
            <div className={styles.midSection__text}>
              <div className={styles.midSection__text__title}>
                Get your message out with a beautiful blog built in minutes
              </div>
              <div className={styles.midSection__text__body}>
                Like actually in minutes, no joke
              </div>
              <Img
                fluid={data.screenshot2.childImageSharp.fluid}
                alt="blog demo2"
                className={styles.midSection__screenshot2}
              />
            </div>
            <Img
              fluid={data.screenshot1.childImageSharp.fluid}
              alt="blog demo"
              className={styles.midSection__screenshot1}
            />
            <div className={styles.midSection__mobileCaption}>
              Our templates autopopulate your information so you never have to
              struggle with broken customization tools.{' '}
            </div>
          </div>
          <div className={styles.midSection__caption}>
            Our templates autopopulate your information — <br /> so you never
            have to struggle with broken customization tools.{' '}
          </div>
          <div className={styles.toolSection}>
            <h1>The tools you need to build a loyal audience</h1>
            <span className={styles.toolSection__subheader}>
              Establish your expertise, broaden the top of your funnel, and
              convert leads into sales, all through your blog.
            </span>
            <div style={{ height: '80px' }} />
            <FeatureCards />
            <div style={{ height: '120px' }} />
            <Link to="/why-blogwise" className={styles.toolSection__button}>
              Explore More
            </Link>
          </div>
          <div className={styles.bottomSection}>
            <h1>What are you waiting for? Reach your customers today!</h1>
            <a
              className={styles.bottomSection__button}
              href="https://app.blogwise.co/register"
            >
              Get Started
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    header: file(relativePath: { eq: "index-header.png" }) {
      childImageSharp {
        fluid(maxWidth: 542, maxHeight: 417, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ellipse: file(relativePath: { eq: "index-ellipse.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
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
    postGenius: file(relativePath: { eq: "postGenius.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cycle: file(relativePath: { eq: "cycle.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
