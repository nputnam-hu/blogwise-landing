import React, { Component } from 'react'
import { Link } from 'gatsby'
import { stack as Menu } from 'react-burger-menu'

import styles from '../../Navbar.module.sass'

class Hamburger extends Component {
  state = {
    hamburgerDisplay: false,
  }

  render() {
    const crossStyles = {
      bmBurgerButton: {
        display: 'none',
      },
      bmCross: {
        display: 'block',
        background: '#C4C4C4',
        right: '20px',
        top: '40px',
        marginTop: '-30px',
        paddingBottom: '20px',
      },
      bmBurgerBars: { display: 'none' },
    }
    const burgerStyles = {
      bmBurgerButton: {
        display: 'block',
        position: 'absolute',
        width: '28px',
        height: '26px',
        right: '30px',
        top: '33px',
      },
      bmCross: {
        display: 'none',
        background: 'white',
        right: '20px',
        marginTop: '-10px',
        paddingBottom: '20px',
      },
      bmBurgerBars: {
        display: 'block',
        background: '#C4C4C4',
      },
    }
    const defaultStyles = {
      bmBurgerButton: {
        width: '28px',
        height: '26px',
      },
      bmCrossButton: {
        height: '26px',
        width: '26px',
      },
      bmMenu: {
        background: 'rgba(255, 255, 255, 0)',
        overflow: 'hidden',
      },
      bmMorphShape: { fill: '#373a47' },
      bmItemList: {
        textAlign: 'right',
        marginRight: '30px',
        marginTop: '67px',
      },
      bmOverlay: {
        background: 'rgba(255, 255, 255, 0.96)',
        marginTop: '-50px',
        height: '120vh',
      },
    }

    const stateStyles = this.state.hamburgerDisplay ? crossStyles : burgerStyles

    return (
      <div>
        <div
          style={{ display: 'flex', flex: 1 }}
          onClick={() =>
            this.setState({ hamburgerDisplay: !this.state.hamburgerDisplay })
          }
        >
          <Menu
            right
            styles={{ ...defaultStyles, ...stateStyles }}
            isOpen={this.state.hamburgerDisplay}
          >
            <br />
            <br />
            <br />
            <Link
              onClick={() => this.setState({ hamburgerDisplay: true })}
              className={styles.navbar__linkMobile}
              to="/"
            >
              Home
            </Link>
            <Link
              onClick={() => this.setState({ hamburgerDisplay: true })}
              className={styles.navbar__linkMobile}
              to="/why-blogwise"
            >
              Why Blogwise
            </Link>
            <Link
              onClick={() => this.setState({ hamburgerDisplay: true })}
              className={styles.navbar__linkMobile}
              to="/pricing"
            >
              Pricing
            </Link>
            <a
              onClick={() => this.setState({ hamburgerDisplay: true })}
              href="https://blog.blogwise.co"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navbar__linkMobile}
            >
              Blog
            </a>
            <a
              href="https://app.blogwise.co/login"
              className={styles.navbar__linkMobile}
            >
              Log In
            </a>
            <a
              href="https://app.blogwise.co/register"
              className={styles.navbar__linkMobile}
            >
              Sign Up
            </a>
          </Menu>
        </div>
      </div>
    )
  }
}

export default Hamburger
