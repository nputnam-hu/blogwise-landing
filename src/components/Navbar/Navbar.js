import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import HamburgerMenu from './components/Hamburger'
import styles from './Navbar.module.sass'

const Navbar = ({ logoFixed }) => (
  <>
    <div className={styles.mobile}>
      <HamburgerMenu />
    </div>
    <div className={styles.navbar}>
      <Link to="/">
        <Img fixed={logoFixed} alt="Blogwise" />
      </Link>
      <nav>
        <Link className={styles.navbar__link} to="/features">
          Features
        </Link>
        <Link className={styles.navbar__link} to="/why-blogwise">
          Why Blogwise
        </Link>
        <Link className={styles.navbar__link} to="/pricing">
          Pricing
        </Link>
        <a
          className={styles.navbar__link}
          href="https://blog.blogwise.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <a className={styles.loginButton} href="https://app.blogwise.co/login">
          Login
        </a>
        <a
          className={styles.signUpButton}
          href="https://app.blogwise.co/register"
        >
          Sign Up
        </a>
      </nav>
    </div>
  </>
)

export default Navbar
