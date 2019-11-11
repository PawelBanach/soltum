import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"
import styles from "./logo.module.scss"

const Logo = () => (
<StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "logo/logo1.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={(data => {
        const imageData = data.desktop.childImageSharp.fluid;
        return (
            <div className={styles.logoContainer}>
                <Img 
                  // Must be styled inline
                  style={{ minWidth: `400px`, minHeight: `80px` }}
                  fixed={imageData}
                  objectFit="cover"
                />
            </div>
        );
    })}
/>
)

export default Logo;