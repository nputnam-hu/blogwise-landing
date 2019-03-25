import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import WhyCard from '../WhyCard'

import styles from './WhyCardGrid.module.sass'

const WhyCardGrid = () => (
  <StaticQuery
    query={graphql`
      query WhyCardGridQuery {
        ligtning: file(relativePath: { eq: "lightning.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        pointer: file(relativePath: { eq: "pointer.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        search: file(relativePath: { eq: "search.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        design: file(relativePath: { eq: "design.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div className={styles.whyCardGrid}>
          <WhyCard
            iconFixed={data.ligtning.childImageSharp.fixed}
            title="Blazingly Fast"
            description="blogwise is built with the latest web technology to be up to 2x as fast as Wordpress. Faster page load times means less customer churn and higher engagement. Don’t get bogged down with legacy software: use the best and latest."
          />
          <WhyCard
            iconFixed={data.search.childImageSharp.fixed}
            title="search optimized"
            description="When you're busy building your own business, you don't have time to be worrying about the technical details of your blog. We use automated tools to give your site the benefis of SEO, all under the hood."
          />
          <WhyCard
            iconFixed={data.design.childImageSharp.fixed}
            title="elegant design"
            description="blogwise blogs feature a clean, sharp UI that gets out of the way and lets your content do the talking. Each blog is designed mobile-first, so you can reach customers across all different platforms."
          />
          <WhyCard
            iconFixed={data.pointer.childImageSharp.fixed}
            title="easy to manage"
            description="Don’t waste time managing code or writing markdown files. Megaphone uses NetlifyCMS for a first-class writing and editing experience. Create your site and upload your first blog post in minutes."
          />
        </div>
      </>
    )}
  />
)

export default WhyCardGrid
