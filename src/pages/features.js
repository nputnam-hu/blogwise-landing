import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import dots from './dots.svg'
import './features.sass'

const HowCard = ({ stepNumber, title, last }) => (
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
    </div>
  </div>
)

const scrollToFeature = () => {
  document.querySelector('#features-header').scrollIntoView({
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
          <HowCard stepNumber="1" title="Fill in some info" />
          <HowCard stepNumber="2" title="Upload your brand assets" />
          <HowCard stepNumber="3" title="Start writing!" last />
        </div>
      </div>
      <h2 id="features-header">Features</h2>
    </div>
  </Layout>
)

export default Features

export const pageQuery = graphql`
  query FeaturesQuery {
    sectiononeHeader: file(absolutePath: { regex: "//assets/megaphone.png/" }) {
      childImageSharp {
        fluid(maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
