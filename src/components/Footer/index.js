import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import './styles.sass'

const Footer = ({ logoFixed, twitterFixed, linkedinFixed, facebookFixed }) => (
  <div id="footer-container">
    <Img fixed={logoFixed} alt="Blogwise" />
    <div id="footer-bottom">
      <div id="footer-links">
        <span>©blogwise 2019</span>
        <a href="mailto:support@blogwise.co">contact us</a>
        <Link to="/privacy-policy">privacy policy</Link>
      </div>
      <div id="footer-social">
        <a
          href="https://www.twitter.com/realblogwise"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fixed={twitterFixed} alt="Twitter" />
        </a>
        <a
          href="https://www.linkedin.com/company/blogwise"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fixed={linkedinFixed} alt="LinkedIn" />
        </a>
        <a
          href="https://www.facebook.com/blogwise.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fixed={facebookFixed} alt="Facebook" />
        </a>
      </div>
    </div>
  </div>
)

export default Footer
