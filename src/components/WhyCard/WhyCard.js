import React from 'react'
import Img from 'gatsby-image'
import styles from './WhyCard.module.sass'

const WhyCard = ({ title, description, iconFixed }) => (
  <div className={styles.whyCard}>
    <Img fixed={iconFixed} alt={title} className={styles.whyCard__icon} />
    <div className={styles.whyCard__text}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
)

export default WhyCard
