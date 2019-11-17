import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styles from '../projects.module.scss';
import LeftArrow from '../left-arrow';
import RightArrow from '../right-arrow';

const StreamlabSlide = ({goToPrevSlide, goToNextSlide}) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "projects/streamlab.png" }) {
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
            <h3 className={`align-center`}>StreamLab</h3>
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
            <li>Electron</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>Scala</li>
            <li>Ruby on Rails</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

StreamlabSlide.propTypes = {
  goToPrevSlide: PropTypes.func.isRequired,
  goToNextSlide: PropTypes.func.isRequired,
};

export default StreamlabSlide;