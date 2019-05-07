import React, { Component } from 'react'
import DemoTab from './DemoTab'
import styles from './Demo.module.sass'
import setupWM from './setup.webm'
import setupMP4 from './setup.mp4'
import inspirationWM from './inspiration.webm'
import inspirationMP4 from './inspiration.mp4'
import smartToolsWM from './smartTools.webm'
import smartToolsMP4 from './smartTools.mp4'

const DemoPresentation = ({
  mp4Uri,
  webmUri,
  title,
  paragraph1,
  paragraph2,
}) => (
  <div className={styles.presentation}>
    <div style={{ margin: 'auto' }}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        className={styles.presentation__video}
        autoPlay
        loop
        playsInline
        muted
        src={mp4Uri}
      >
        {/* <source type="video/webm" src={webmUri} />
        <source type="video/mp4" src={mp4Uri} /> */}
      </video>
    </div>
    <div className={styles.presentation__text}>
      <h2 className={styles.presentation__title}>{title}</h2>
      <p className={styles.presentation__paragraph}>{paragraph1}</p>
      <p className={styles.presentation__paragraph}>{paragraph2}</p>
    </div>
  </div>
)

class Demo extends Component {
  state = {
    activeTab: 0,
  }
  setActiveTab = i => () => this.setState({ activeTab: i })
  render() {
    const { activeTab } = this.state
    const presentationProps = [
      {
        webmUri: setupWM,
        mp4Uri: setupMP4,
        title: 'Build your blog in 5 minutes',
        paragraph1:
          "Answer a few questions and we'll be able to set up an initial blog for you. Connect the blog to a domain you own and write a few articles and you'll be on your way to building a loyal audience.",
        paragraph2:
          "Once you've built your initial blog, use our integrated blog editor to customize it fully to your company's brand.",
      },
      {
        webmUri: inspirationWM,
        mp4Uri: inspirationMP4,
        title: 'Tools to Empower Your Creativity',
        paragraph1:
          'We are making content creation streamlined so you can have a great blog and scale your company. Every blog is bundled with tools for generating click-worthy headlines, finding free, professional cover photos, and compiling relevant links from twitter.',
        paragraph2: '',
      },
      {
        webmUri: smartToolsWM,
        mp4Uri: smartToolsMP4,
        title: 'View your changes in real time',
        paragraph1:
          'Manage everything about your blog in one place: connect a custom domain, upload brand assets, and write articles all on our dashboard.',
        paragraph2:
          'Our live preview tools lets you preview how your audience will see your blog and posts.',
      },
    ]

    return (
      <div className={styles.demo}>
        <div className={styles.demo__tabs}>
          <DemoTab
            isActive={activeTab === 0}
            onClick={this.setActiveTab(0)}
            icon="clock"
            headerText="Easy set up"
          />
          <DemoTab
            isActive={activeTab === 1}
            onClick={this.setActiveTab(1)}
            icon="lightbulb"
            headerText="Smart tools"
          />
          <DemoTab
            isActive={activeTab === 2}
            onClick={this.setActiveTab(2)}
            icon="thumbsup"
            headerText="Intuitive Editor"
          />
        </div>
        <div className={styles.tabLine}>
          <div
            className={`${styles.tabLine__segment} ${
              activeTab === 0 ? styles.active : ''
            }`}
          />
          <div
            className={`${styles.tabLine__segment} ${
              activeTab === 1 ? styles.active : ''
            }`}
          />
          <div
            className={`${styles.tabLine__segment} ${
              activeTab === 2 ? styles.active : ''
            }`}
          />
        </div>
        <DemoPresentation {...presentationProps[activeTab]} />
      </div>
    )
  }
}
export default Demo
