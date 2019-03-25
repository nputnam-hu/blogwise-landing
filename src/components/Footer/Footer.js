import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './Footer.module.sass'

const Footer = ({ logoFixed, twitterFixed, linkedinFixed, facebookFixed }) => (
  <div className={styles.footer}>
    <Img fixed={logoFixed} alt="Blogwise" />
    <div className={styles.footer__bottom}>
      <div className={styles.footer__links}>
        <span>©blogwise 2019</span>
        <a href="mailto:support@blogwise.co">contact us</a>
        <Link to="/privacy-policy">privacy policy</Link>
      </div>
      <div className={styles.footer__social}>
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
