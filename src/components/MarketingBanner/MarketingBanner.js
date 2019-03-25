import React from 'react'

import styles from './MarketingBanner.module.sass'

const MarketingBanner = () => (
  <div className={styles.futureSection}>
    <h1>Content Marketing is the Future</h1>
    <h2>Are you ready to blogwise?</h2>
    <br />
    <a className={`${styles.header__button}`} href="https://app.blogwise.co">
      Get Started
    </a>
  </div>
)

export default MarketingBanner
