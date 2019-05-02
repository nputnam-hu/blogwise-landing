import React from 'react'

import PricingCard from './PricingCard'

import styles from './PricingCardGrid.module.sass'

const PricingCardGrid = () => (
  <div className={styles.pricingCardGrid}>
    <PricingCard
      bgColor="#e6faff"
      title="Starter"
      price="9"
      strikethrough="18"
      userNum="2"
      pageViews="5k"
      description="for small businesses"
      freeTrial
    />
    <PricingCard
      bgColor="rgba(103, 180, 249, 0.4)"
      title="Growth"
      price="29"
      userNum="5"
      pageViews="50k"
      description="for scaling startups"
    />
    <PricingCard
      bgColor="rgba(59, 103, 226, 0.4)"
      title="Enterprise"
      price="59"
      userNum="Unlimited"
      pageViews="500k"
      description="for businesses killing the marketing game"
    />
  </div>
)

export default PricingCardGrid
