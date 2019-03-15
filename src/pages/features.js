import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'

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
      <Img
        fluid={data.sectiononeHeader.childImageSharp.fluid}
        style={{ position: 'absolute' }}
        className={styles.header__photo}
      />
      <div className={styles.header}>
        <h1>The lightning fast way to start content marketing</h1>
        <p>
          <b>
            Businesses that run blogs get 67% more leads per month than
            businesses who don&rsquo;t
          </b>
          *. blogwise makes it easy to set up your blog and create content to
          drive engagement and build your brand.
        </p>
        <div
          className={styles.yellowButton}
          onClick={scrollToFeature}
          onKeyDown={scrollToFeature}
          role="button"
          tabIndex="0"
        >
          Explore Features
        </div>
      </div>
      <div className={styles.howItWorksSection}>
        <h2 className={styles.howItWorksSection__header}>
          Here&rsquo;s how it works
        </h2>
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
      <div className={styles.featuresSection}>
        <h2 className={styles.featuresSection__title}>Features</h2>
        <FeatureSection
          title="Feature name"
          description="blogwise is built with the latest web technology to be up to twice as fast as Wordpress. Faster page load times means less customer churn and higher engagement. Don’t get bogged down with legacy software: use the best and latest."
          imgFluid={data.feature1.childImageSharp.fluid}
        />
        <div style={{ height: 100 }} />
        <FeatureSection
          title="Feature name"
          description="blogwise is built with the latest web technology to be up to twice as fast as Wordpress. Faster page load times means less customer churn and higher engagement. Don’t get bogged down with legacy software: use the best and latest."
          imgFluid={data.feature1.childImageSharp.fluid}
          reversed
        />
      </div>
      <div className={styles.companiesSection}>
        <h1>Companies that use blogwise</h1>
        <div className={styles.companiesSection__imgs}>
          {data.companies.edges.map(({ node }) => (
            <Img
              fixed={node.childImageSharp.fixed}
              alt={node.name}
              className={styles.companiesSection__img}
            />
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default Features

export const pageQuery = graphql`
  query FeaturesQuery {
    sectiononeHeader: file(relativePath: { eq: "megaphone.png" }) {
      childImageSharp {
        fluid(maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    feature1: file(relativePath: { eq: "megaphone.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
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
    companies: allFile(filter: { relativePath: { regex: "/companies/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
