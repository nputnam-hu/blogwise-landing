import React from 'react'

import PricingCard from './PricingCard'

import styles from './PricingCardGrid.module.sass'

const PricingCardGrid = () => (
  <div className={styles.pricingCardGrid}>
    <PricingCard
      bgColor="#e6faff"
      title="Starter"
      price="18"
      userNum="2"
      pageViews="10k"
      description="for small businesses"
      freeTrial
    />
    <PricingCard
      bgColor="rgba(103, 180, 249, 0.4)"
      title="Growth"
      price="38"
      userNum="5"
      pageViews="100k"
      description="for scaling startups"
    />
    <PricingCard
      bgColor="rgba(59, 103, 226, 0.4)"
      title="Enterprise"
      price="68"
      userNum="Unlimited"
      pageViews="1 million"
      description="for businesses killing the marketing game"
    />
  </div>
)

export default PricingCardGrid
