import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"

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
            <div style={{
                maxWidth: `500px`,
                maxHeight: `100px`,
                display: `block`,
                marginLeft: `50px`,
            }}>
                <Img style={{
                    minWidth: `400px`,
                    minHeight: `80px`,
                }}
                fixed={imageData}
                objectFit="cover"
                />
            </div>
        );
    })}
/>
)

export default Logo;