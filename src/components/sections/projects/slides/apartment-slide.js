import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styles from '../projects.module.scss';
import LeftArrow from '../left-arrow';
import RightArrow from '../right-arrow';

const ApartmentSlide = ({goToPrevSlide, goToNextSlide}) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "projects/apartment.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 600) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <div className={`slide ${styles.slide}`}>
      <div className={`w60`}>
        <Img fixed={data.desktop.childImageSharp.fixed} />
      </div>
      <div className={`w40`}>
        <div className={styles.header}>
          <div className={`w70`}>
            <h3 className={`align-center`}>Lokal Ułsugowo - Kraków</h3>
          </div>
          <div className={`w30`}>
            <RightArrow onClick={goToNextSlide}/>
            <LeftArrow onClick={goToPrevSlide}/>
          </div>
        </div>
        <div>
          <div className={`align-justify ${styles.text}`}>
            Dokonanie nadzoru inwestorskiego w okresie 2018-2019.
            W skład usługi wchodziło to i to i tamto. Wielkośc
            budowy była duza, a pracownikow jak mrowkow. Budowa
            wyrozniała się zastosowaniem najnowszych technologii.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla id nunc vitae diam finibus ultrices.
            Praesent scelerisque aliquet sem. Vivamus eleifend ultricies
            dolor ac scelerisque. Proin ullamcorper volutpat elit
            sed porttitor. Sed nec nisl ex. Duis euismod sodales quam
            sagittis lobortis velit faucibus lacinia.
            Mauris ornare enim id felis faucibus pharetra.
          </div>
        </div>
        <div className={styles.technologiesList}>
          <ul>
            <li>Typ usługi: Inspektor Nadzoru Inwestorskiego</li>
            <li>Rok budowy: 2019</li>
            <li>Konstrukcja: Żelbetonowa</li>
            <li>Piętra: 2</li>
            <li>Powierzchnia: 290 m2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

ApartmentSlide.propTypes = {
  goToPrevSlide: PropTypes.func.isRequired,
  goToNextSlide: PropTypes.func.isRequired,
};

export default ApartmentSlide;
