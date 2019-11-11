import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({className, children}) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "landing-page.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => {
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          // To style via external CSS see layout.css last examples:
          // className="test"
          fluid={imageData}
          // backgroundColor={`#040e18`}
          backgroundColor={`#ddd`}
          // Title get's passed to both container and noscriptImg.
          title="gbitest"
          // You are able to set a classId and style by wrapper (see below or
          // https://github.com/timhagn/gatsby-background-image/#styling--passed-through-styles):
          // classId="gbi"
          style={{
            // Defaults are overwrite-able by setting one of the following:
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: `100vh`,
            lineHeigh: `100vh`,
            overflow: `auto`,
          }}
          // To "force" the classic fading in of every image (especially on
          // imageData change for fluid / fixed) by setting `soft` on `fadeIn`:
          fadeIn={`soft`}
          // To be able to use stacking context changing elements yourself,
          // set this to true to disable the "opacity hack":
          // preserveStackingContext={true}
          // You can "safely" (look them up beforehand ; ) add other props:
          id="gbitest"
          role="img"
          aria-label="gbitest"
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

export default BackgroundSection;
