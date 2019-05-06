import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Slider from 'react-slick'
import styles from './FeatureCards.module.sass'
import camera from './camera.png'
import clock from './clock.png'
import edit from './edit.png'
import search from './search.png'
import twitter from './twitter.png'

const ANIMATION_DELAY_TIME = 150

const FeatureCard = ({ img, title, description, color }) => (
  <div className={styles.featureCard}>
    <img src={img} alt={title} />
    <h2 style={{ color }}>{title}</h2>
    <p>{description}</p>
  </div>
)

const featureCardProps = [
  {
    img: clock,
    title: 'easy set up',
    color: '#447ADD',
    description:
      'Our templates autopopulate your information - so you never have to struggle with broken customization tools.',
  },
  {
    img: twitter,
    title: 'Twitter integration',
    color: '#67B4F9',
    description:
      'Our templates autopopulate your information - so you never have to struggle with broken customization tools.',
  },
  {
    img: search,
    title: 'Search Optimization',
    color: '#FFC702',
    description:
      'Our templates autopopulate your information - so you never have to struggle with broken customization tools.',
  },
  {
    img: edit,
    title: 'Live editing',
    color: '#FF9831',
    description:
      'Our templates autopopulate your information - so you never have to struggle with broken customization tools.',
  },
  {
    img: camera,
    title: 'Ready-made stock photos',
    color: '#447ADD',
    description:
      'Our templates autopopulate your information - so you never have to struggle with broken customization tools.',
  },
]

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
}

const FeatureCards = () => (
  <div className={styles.featureCards}>
    <Slider {...sliderSettings} className={styles.featureCards__slider}>
      {featureCardProps.map((props, i) => (
        <ScrollAnimation
          delay={i * ANIMATION_DELAY_TIME}
          animateIn="fadeIn"
          animateOnce
        >
          <FeatureCard {...props} />
        </ScrollAnimation>
      ))}
    </Slider>
  </div>
)

export default FeatureCards
