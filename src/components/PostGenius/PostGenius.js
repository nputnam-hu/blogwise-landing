import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from './PostGenius.module.sass'

const PostGenius = () => (
  <StaticQuery
    query={graphql`
      query PostGenius {
        postGenius: file(relativePath: { eq: "postGenius.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div className={styles.postSection__title}>
          <Img
            fluid={data.postGenius.childImageSharp.fluid}
            alt="postgenius icon"
            className={styles.postSection__title__image}
          />
          <div className={styles.postSection__title__text}>
            <div className={styles.postSection__title__text__line1}>
              Not sure what to write about?
            </div>
            <div className={styles.postSection__title__text__line2}>
              Consult the <span className={styles.accentText}>PostGenius</span>
            </div>
            <div className={styles.postSection__title__text__line3}>
              PostGenius gives you the tools you need to make content fast
            </div>
          </div>
        </div>
      </>
    )}
  />
)

export default PostGenius
