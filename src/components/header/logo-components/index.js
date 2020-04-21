import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import styles from './logo.module.scss';

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "logo/LogoSoltum.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={((data) => {
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <div className={styles.logoContainer}>
          <Img
            // Must be styled inline
            style={{minWidth: `250px`, minHeight: `75px`}}
            fixed={imageData}
            objectFit="cover"
          />
        </div>
      );
    })}
  />
);

export default Logo;
