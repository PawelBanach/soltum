import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styles from '../projects.module.scss';
import LeftArrow from '../left-arrow';
import RightArrow from '../right-arrow';

const MaacSlide = ({goToPrevSlide, goToNextSlide}) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "projects/wcag.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <div className={`slide ${styles.slide}`}>
      <div className={`w60`}>
        <Img fluid={data.desktop.childImageSharp.fluid} />
      </div>
      <div className={`w40`}>
        <div className={styles.header}>
          <div className={`w70`}>
            <h3 className={`align-center`}>MAAC</h3>
          </div>
          <div className={`w30`}>
            <RightArrow onClick={goToNextSlide}/>
            <LeftArrow onClick={goToPrevSlide}/>
          </div>
        </div>
        <span className={`align-justify ${styles.text}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla convallis sem vel arcu feugiat, ut faucibus. Ut elementum,
              lorem ut eleifend finibus, est sem posuere lorem, nisi eros.
              Proin faucibus porta eros eget elementum. Scelerisque risus dui,
              in sodales nibh feugiat in.
        </span>
        <div className={styles.technologiesList}>
          <ul>
            <li>Ruby on Rails</li>
            <li>Python</li>
            <li>ReactJS</li>
            <li>AWS Lambda</li>
            <li>AWS S3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

MaacSlide.propTypes = {
  goToPrevSlide: PropTypes.func.isRequired,
  goToNextSlide: PropTypes.func.isRequired,
};

export default MaacSlide;
