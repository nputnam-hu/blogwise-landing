import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import './styles.sass'

const Navbar = ({ logoFixed }) => (
  <div id="navbar-container">
    <Img fixed={logoFixed} alt="Blogwise" />
    <nav>
      <Link className="navbar-link" to="/features">
        Features
      </Link>
      <Link className="navbar-link" to="/why-blogwise">
        Why Blogwise
      </Link>
      <Link className="navbar-link" to="/pricing">
        Pricing
      </Link>
      <a
        className="navbar-link"
        href="https://blog.blogwise.co"
        target="_blank"
        rel="noopener noreferrer"
      >
        Blog
      </a>
      <a className="button-blue" href="https://app.blogwise.co/register">
        Sign Up
      </a>
    </nav>
  </div>
)

export default Navbar
