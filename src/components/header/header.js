import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Logo from "../logo-components/logo"
import HeaderItem from "../header/header-item"

const Header = () => {
  const [navBackground, setNavBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      let show = window.scrollY > window.innerHeight - 100;
      setNavBackground(show);
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      style={{
        display: `block`,
        background: `black`,
      }}
    >
      <nav style={{
            overflow: `hidden`,
            position: `fixed`,
            top: 0,
            width: `100%`,
            display: `-webkit-box`,
            display: ` -webkit-flex`,
            display: `-ms-flexbox`,
            display: `flex`,
            // justifyContent: `center`,
            zIndex: 1,
            color: `hsla(0,0%,0%,0.7)`,
            // backgroundColor: `#fff`,
            backgroundColor: `${navBackground ? "#ffffff" : "transparent"}`,
            boxShadow: `${navBackground ? "0px 1px 20px -10px rgba(0,0,0,0.75)" : "none"}`,
            transition: '1s ease',
            fontFamily: `'Source Sans Pro',sans-serif`,
      }}>
        <Logo />
        <div style={{
          marginLeft: `auto`,
        }}>
          <HeaderItem title="contact" />
          <HeaderItem title="projects" />
          <HeaderItem title="technologies" />
          <HeaderItem title="process" />
          <HeaderItem title="story" />
        </div>
      </nav>
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Test
          </Link>
        </h1>
      </div> */}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
