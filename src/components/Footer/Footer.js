import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './Footer.module.sass'

const Footer = ({ logoFixed, twitterFixed, facebookFixed, isBlue }) => (
  <div
    className={styles.footer}
    style={{ background: isBlue ? '#447ADC' : '#F6F6F6' }}
  >
    <div
      className={styles.footer__links}
      style={{ color: isBlue ? 'white' : 'black' }}
    >
      <Img fixed={logoFixed} alt="Blogwise" />
      <span>©blogwise 2019</span>
      <a
        style={{ color: isBlue ? 'white' : 'black' }}
        href="mailto:support@blogwise.co"
      >
        contact us
      </a>
      <Link style={{ color: isBlue ? 'white' : 'black' }} to="/privacy-policy">
        privacy policy
      </Link>
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
        href="https://www.facebook.com/blogwise.co"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fixed={facebookFixed} alt="Facebook" />
      </a>
    </div>
  </div>
)

export default Footer
