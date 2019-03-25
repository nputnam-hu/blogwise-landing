import React from 'react'

import PricingCard from './PricingCard'

import styles from './PricingCardGrid.module.sass'

const PricingCardGrid = () => (
  <div className={styles.pricingCardGrid}>
    <PricingCard
      bgColor="#DCDCDC"
      title="Free"
      price="0"
      userNum="1"
      pageViews="5k"
      branding
      description="for a blog that will do the trick"
    />
    <PricingCard
      bgColor="#e6faff"
      title="Starter"
      price="9"
      userNum="2"
      pageViews="10k"
      description="for small businesses"
    />
    <PricingCard
      bgColor="rgba(103, 180, 249, 0.4)"
      title="Growth"
      price="29"
      userNum="5"
      pageViews="100k"
      description="for scaling startups"
    />
    <PricingCard
      bgColor="rgba(59, 103, 226, 0.4)"
      title="Enerprise"
      price="59"
      userNum="Unlimited"
      pageViews="1 million"
      description="for businesses killing the marketing game"
    />
  </div>
)

export default PricingCardGrid
