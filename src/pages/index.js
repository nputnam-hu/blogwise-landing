import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import Layout from '../components/Layout'
import WhyCardGrid from '../components/WhyCardGrid'

import styles from '../styles/index.module.sass'

class Index extends Component {
  state = {
    email: '',
    emailSubmitted: false,
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
      <Layout>
        <div className={styles.index}>
          {/* Header Section */}
          <div className={styles.header}>
            <Img
              fluid={data.upperSwoosh.childImageSharp.fluid}
              style={{ position: 'absolute' }}
              alt="woman with megaphone"
              className={styles.header__swoosh}
            />
            <div className={styles.header__content}>
              <div className={styles.header__content__title}>
                <div className={styles.header__content__title__line}>
                  You made the perfect product.
                </div>
                <div className={styles.header__content__title__line}>
                  Time to tell everyone.
                </div>
              </div>
              <Img
                fixed={data.mobile.childImageSharp.fixed}
                alt="cloud of blogs"
                className={styles.header__mobile}
              />
              <div className={styles.header__content__body}>
                <div className={styles.header__content__body__line}>
                  blogwise is the easiest way to start content marketing for
                  your business. Sign up in minutes to get a full website hosted
                  under your own domain.{' '}
                </div>
                <div className={styles.header__content__body__line}>
                  Building a great product is hard. Having a great blog doesn’t
                  have to be.{' '}
                </div>
              </div>
              <a
                className={`${styles.header__button}`}
                href="https://app.blogwise.co"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className={styles.midSection}>
            <div className={styles.midSection__text}>
              <h2>
                Get your message out with a beautiful blog built in minutes
              </h2>
              <p>Like actually in minutes, no joke</p>
            </div>
            <Img
              fluid={data.screenshot1.childImageSharp.fluid}
              alt="blog demo"
              className={styles.midSection__screenshot1}
            />
            <p className={styles.midSection__caption}>
              Our templates autopopulate your information - <br /> so you never
              have to struggle with broken customization tools.{' '}
            </p>
            <Img
              fluid={data.screenshot2.childImageSharp.fluid}
              alt="blog demo"
              className={styles.midSection__screenshot2}
            />
          </div>
          <Img
            fluid={data.midSwoosh.childImageSharp.fluid}
            style={{ position: 'absolute' }}
            alt="swoosh"
            className={styles.midSection__swoosh}
          />
          <div className={styles.whySection}>
            <h1>WHY BLOGWISE?</h1>
            <WhyCardGrid />
          </div>
          <div className={styles.futureSection}>
            <h1 className="scrollTo">Content Marketing is the Future</h1>
            <h2>Are you ready to blogwise?</h2>
            <br />
            {/* <Link className="yellow-button" to="/features">
          Explore Features
        </Link> */}
            <form
              onSubmit={this.handleSubmit}
              className={styles.futureSection__form}
            >
              {' '}
              <input
                type="email"
                onChange={this.handleChange}
                placeholder="your email"
                name="email"
                value={this.state.email}
              />
              <button type="submit" className={styles.yellowButton}>
                {this.state.emailSubmitted
                  ? 'Subscribed!'
                  : 'Join the Waitlist Now'}
              </button>
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}

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
