import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import PostGenius from '../components/PostGenius'

import dots from '../images/dots.svg'
import styles from '../styles/features.module.sass'

const HowCard = ({ stepNumber, title, description, imgFluid, last }) => (
  <div className={styles.howCard}>
    <div className={styles.howCard__top}>
      <h2
        className={styles.howCard__stepcounter}
        style={last ? {} : { marginLeft: '30px' }}
      >
        {stepNumber}
      </h2>
      <img
        style={last && { visibility: 'hidden' }}
        src={dots}
        className={styles.howCard__dots}
        alt="dots"
      />
    </div>
    <div className={styles.howCard__bottom}>
      <span>{title}</span>
      <Img fluid={imgFluid} alt={title} className={styles.howCard__img} />
      <p>{description}</p>
    </div>
  </div>
)

const FeatureSection = ({ imgFluid, title, description, reversed }) => (
  <div
    className={styles.feature}
    style={{ flexDirection: reversed ? 'row-reverse' : 'row' }}
  >
    <Img fluid={imgFluid} alt={title} className={styles.feature__img} />
    <div className={styles.feature__text}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </div>
)

const scrollToFeature = () => {
  document.querySelector('.featuresection-container').scrollIntoView({
    behavior: 'smooth',
  })
}

const Features = ({ data }) => (
  <Layout>
    <div className={styles.features}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.header__text1}>
          Start your blog, lightning fast –
        </div>
        <Img
          fluid={data.headerPhoto.childImageSharp.fluid}
          className={styles.header__photo}
        />
        <div className={styles.header__text2}>
          – then make content like a pro
        </div>
      </div>
      <a
        className={styles.header__link}
        href="https://app.blogwise.co/register"
      >
        Get Started &#10230;
      </a>
      {/* How It Works Section */}
      <div className={styles.howItWorksSection}>
        <div className={styles.howItWorksSection__header}>
          Here&rsquo;s how it works
        </div>
        <div className={styles.howItWorksSection__howCards}>
          <HowCard
            stepNumber="1"
            title="Fill in some info"
            description="Fill in information about your business and what you want your blog to be about."
            imgFluid={data.fillin.childImageSharp.fluid}
          />
          <HowCard
            stepNumber="2"
            title="Upload your brand assets"
            description="Customize your blog by uploading your logo and other assets."
            imgFluid={data.cloud.childImageSharp.fluid}
          />
          <HowCard
            stepNumber="3"
            title="Start writing!"
            description="Make use of our blogwise writing suite of tools to write content to reach your customers."
            imgFluid={data.writing.childImageSharp.fluid}
            last
          />
        </div>
      </div>
      <div className={styles.postGenius}>
        <PostGenius />
        <div className={styles.postSection__featureList}>
          <div className={styles.featureCard}>
            <Img
              fluid={data.twitter.childImageSharp.fluid}
              alt="twitter integration"
              className={styles.featureCard__image}
            />{' '}
            <div className={styles.featureCard__text}>
              <div className={styles.featureCard__text__title}>
                Twitter Integration
              </div>
              <div className={styles.featureCard__text__body}>
                When writing relevant content, it&apos;s important to know
                what&apos;s going on with your audience. Stay in the know
                without leaving blogwise. We&apos;ll automatically pull tweets
                that we think are relevant to you.
              </div>
            </div>
          </div>
          <div className={styles.featureCard}>
            <Img
              fluid={data.calendar.childImageSharp.fluid}
              alt="editorial calendar"
              className={styles.featureCard__image}
            />{' '}
            <div className={styles.featureCard__text}>
              <div className={styles.featureCard__text__title}>
                Editorial Calendar
              </div>
              <div className={styles.featureCard__text__body}>
                Starting a blog isn&apos;t the hardest part -- maintaining it.
                Our Editorial Calendar lets you schedule and assign posts,
                making planning a breeze whether you&apos;re just adding a
                couple posts or launching a full a content campaign.
              </div>
            </div>
          </div>
          <div className={styles.featureCard}>
            <Img
              fluid={data.headlines.childImageSharp.fluid}
              alt="headline generator"
              className={styles.featureCard__image}
            />{' '}
            <div className={styles.featureCard__text}>
              <div className={styles.featureCard__text__title}>
                Headline Generator
              </div>
              <div className={styles.featureCard__text__body}>
                Facing a bit of writer&apos;s block? Having trouble of thinking
                of a catchy title or topic? We&apos;ve got you covered with an
                automated headline generator.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Future Section */}
      <div className={styles.futureSection}>
        <h1>Content Marketing is the Future</h1>
        <h2>Are you ready to blogwise?</h2>
        <br />
        <a
          className={`${styles.header__button}`}
          href="https://app.blogwise.co/register"
        >
          Get Started
        </a>
      </div>
    </div>
  </Layout>
)

export default Features

export const pageQuery = graphql`
  query FeaturesQuery {
    postGenius: file(relativePath: { eq: "postGenius.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    twitter: file(relativePath: { eq: "twitter-integration.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    calendar: file(relativePath: { eq: "calendar.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    headlines: file(relativePath: { eq: "headline-generator.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    headerPhoto: file(relativePath: { eq: "megaphone.png" }) {
      childImageSharp {
        fluid(maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    cloud: file(relativePath: { eq: "cloud.png" }) {
      childImageSharp {
        fluid(maxWidth: 225) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fillin: file(relativePath: { eq: "fillin.png" }) {
      childImageSharp {
        fluid(maxWidth: 225) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    writing: file(relativePath: { eq: "writing.png" }) {
      childImageSharp {
        fluid(maxWidth: 225) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
