import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import HamburgerMenu from './components/Hamburger'
import './styles.sass'

const Navbar = ({ logoFixed }) => (
  <>
    <div id="nav-mobile">
      <HamburgerMenu />
    </div>
    <div id="navbar-container">
      <Link to="/">
        <Img fixed={logoFixed} alt="Blogwise" />
      </Link>
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
  </>
)

export default Navbar
