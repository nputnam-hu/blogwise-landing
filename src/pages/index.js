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
          {/* Middle Section */}
          <div className={styles.midSection}>
            <div className={styles.midSection__text}>
              <div className={styles.midSection__text__title}>
                Get your message out with a beautiful blog built in{' '}
                <em>minutes</em>
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
          <Img
            fluid={data.midSwoosh.childImageSharp.fluid}
            style={{ position: 'absolute' }}
            alt="swoosh"
            className={styles.midSection__swoosh}
          />
          <div className={styles.midSection__caption}>
            Our templates autopopulate your information - <br /> so you never
            have to struggle with broken customization tools.{' '}
          </div>
          {/* PostGenius Section */}
          <div className={styles.postSection}>
            <div className={styles.postSection__title}>
              <Img
                fluid={data.postGenius.childImageSharp.fluid}
                alt="postgenius icon"
                className={styles.postSection__title__image}
              />
              <div className={styles.postSection__title__text}>
                <div className={styles.postSection__title__text__line1}>
                  Not sure what to write about?
                </div>
                <div className={styles.postSection__title__text__line2}>
                  Consult the{' '}
                  <span className={styles.accentText}>PostGenius</span>
                </div>
                <div className={styles.postSection__title__text__line3}>
                  PostGenius gives you the tools you need to make content fast
                </div>
              </div>
            </div>
            <div className={styles.postSection__features}>
              <Img
                fluid={data.cycle.childImageSharp.fluid}
                alt="feature cylce icon"
                className={styles.postSection__features__image}
              />{' '}
              <div className={styles.postSection__features__featuresList}>
                <div className={styles.featuresList__title}>
                  PostGenius Features
                </div>
                <div className={styles.featureList__cards}>
                  <div className={styles.card}>
                    <div className={styles.card___title}>
                      Twitter Integration
                    </div>
                    <div className={styles.card__description}>
                      Stay in the know without even having to leave blogwise.
                      We'll automatically pull tweets that we think are relevant
                      to you.
                    </div>
                  </div>
                  <div className={`${styles.card} ${styles.stagger}`}>
                    <div className={styles.card___title}>
                      Headline Generator
                    </div>
                    <div className={styles.card__description}>
                      Having trouble of thinking of a catchy title or topic?
                      We've got you covered with an automated headline
                      generator.
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.card___title}>
                      Editorial Calendar
                    </div>
                    <div className={styles.card__description}>
                      Our Editorial Calendar lets you schedule and assign posts,
                      making planning a breeze whether you&apos;re just adding a
                      couple posts or launching a full a campaign.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Why Section */}
          <div className={styles.whySection}>
            <h1>WHY BLOGWISE?</h1>
            <WhyCardGrid />
          </div>
          {/* Future Section */}
          <div className={styles.futureSection}>
            <h1>Content Marketing is the Future</h1>
            <h2>Are you ready to blogwise?</h2>
            <br />
            <a
              className={`${styles.header__button}`}
              href="https://app.blogwise.co"
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
