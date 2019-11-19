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
          Simple IT tool which validates iOS and Android
          applications against standards WCAG 2.1 which
          covers a wide range of recommendations for
          making Web content more accessible
          especially for people with different disabilities.
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
