import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Slider from 'react-slick'
import styles from '../components/FeatureCards/FeatureCards.module.sass'
import camera from '../components/FeatureCards/camera.png'
import clock from '../components/FeatureCards/clock.png'
import edit from '../components/FeatureCards/edit.png'
import search from '../components/FeatureCards/search.png'
import twitter from '../components/FeatureCards/twitter.png'

const ANIMATION_DELAY_TIME = 250

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
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 4,
  initialSlide: 0,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const FeatureCards = () => (
  // <div className={styles.featureCards}>
  <Slider {...sliderSettings}>
    {/* <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
    <div>
      <h3>6</h3>
    </div>
    <div>
      <h3>7</h3>
    </div>
    <div>
      <h3>8</h3>
    </div> */}
    {featureCardProps.map((props, i) => (
      // <ScrollAnimation
      //   delay={i * ANIMATION_DELAY_TIME}
      //   animateIn="fadeIn"
      //   animateOnce
      // >
      <FeatureCard {...props} />
      // </ScrollAnimation>
    ))}
  </Slider>
  // </div>
)

export default FeatureCards
