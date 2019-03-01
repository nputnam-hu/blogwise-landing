import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import './styles.sass'

const Index = ({ data }) => (
  <Layout>
    <div id="index-container">
      <Img
        fixed={data.file.childImageSharp.fixed}
        style={{ position: 'absolute' }}
        alt="Woman with megaphone"
        className="upperSwoosh"
      />
    </div>
  </Layout>
)

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    file(absolutePath: { regex: "//assets/index-upperSwoosh.png/" }) {
      childImageSharp {
        fixed(height: 800) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
