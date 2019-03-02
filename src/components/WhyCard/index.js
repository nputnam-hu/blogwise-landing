import React from 'react'
import Img from 'gatsby-image'
import './styles.sass'

const WhyCard = ({ title, description, iconFixed }) => (
  <div className="whycard-container">
    <Img fixed={iconFixed} alt={title} className="whycard-icon" />
    <div className="whycard-text">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
)

export default WhyCard
