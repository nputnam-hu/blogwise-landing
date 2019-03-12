import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import dots from './dots.svg'
import './features.sass'

const HowCard = ({ stepNumber, title, description, imgFluid, last }) => (
  <div className="howcard-items">
    <div className="howcard-top">
      <h2
        className="howcard-stepcounter"
        style={last ? {} : { marginLeft: '30px' }}
      >
        {stepNumber}
      </h2>
      <img
        style={last && { visibility: 'hidden' }}
        src={dots}
        className="howcard-dots"
        alt="dots"
      />
    </div>
    <div className="howcard-container">
      <span>{title}</span>
      <Img fluid={imgFluid} alt={title} className="howcard-img" />
      <p>{description}</p>
    </div>
  </div>
)

const FeatureSection = ({ imgFluid, title, description, reversed }) => (
  <div
    className="featuresection-container"
    style={{ flexDirection: reversed ? 'row-reverse' : 'row' }}
  >
    <Img fluid={imgFluid} alt={title} className="featuresection-img" />
    <div className="featuresection-text">
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
    <div id="features-container">
      <Img
        fluid={data.sectiononeHeader.childImageSharp.fluid}
        style={{ position: 'absolute' }}
        className="sectionone-header"
      />
      <div id="sectionone-container">
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
          className="yellow-button"
          onClick={scrollToFeature}
          onKeyDown={scrollToFeature}
          role="button"
          tabIndex="0"
        >
          Explore Features
        </div>
      </div>
      <div id="sectiontwo-container">
        <h2 id="sectiontwo-header">Here&rsquo;s how it works</h2>
        <div id="howcards">
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
      <div id="sectionthree-container">
        <h2 id="features-header">Features</h2>
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
      <div id="sectionfour-container">
        <h1>Companies that use blogwise</h1>
        <div id="sectionfour-imgs">
          {data.companies.edges.map(({ node }) => (
            <Img
              fixed={node.childImageSharp.fixed}
              alt={node.name}
              className="sectionfour-img"
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
