import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styles from '../projects.module.scss';
import LeftArrow from '../left-arrow';
import RightArrow from '../right-arrow';

const BuildingSlide = ({goToPrevSlide, goToNextSlide}) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "projects/building.jpg" }) {
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
            <h3 className={`align-center`}>Osiedle Avia - Kraków</h3>
          </div>
          <div className={`w30`}>
            <RightArrow onClick={goToNextSlide}/>
            <LeftArrow onClick={goToPrevSlide}/>
          </div>
        </div>
        <div>
          <div className={`align-justify ${styles.text}`}>
          Mauris pretium venenatis nisl non sagittis.
          In hac habitasse platea dictumst. Sed vehicula
          lacinia neque sed gravida. Curabitur pretium elit et
          erat egestas, eu volutpat sem faucibus. Quisque nisl
          urna, porta id quam sit amet, vehicula pretium justo.
          Mauris non tellus semper, porta odio ac, consectetur nibh.
          Aliquam erat volutpat. Pellentesque dapibus non quam ac blandit.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Nullam euismod lectus quis turpis placerat
          egestas. Fusce rhoncus laoreet felis, et vestibulum tortor rutrum ut.
          Suspendisse nec dapibus nisi. Nulla tempus, turpis a malesuada
          commodo, quam dolor luctus ex, et convallis nibh odio in augue.
          Curabitur eu aliquam purus.
          </div>
        </div>
        <div className={styles.technologiesList}>
          <ul>
            <li>Typ usługi: Kierownik Budowy</li>
            <li>Rok budowy: 2014</li>
            <li>Konstrukcja: Żelbetonowa</li>
            <li>Piętra: 500</li>
            <li>Powierzchnia: 500 m2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

BuildingSlide.propTypes = {
  goToPrevSlide: PropTypes.func.isRequired,
  goToNextSlide: PropTypes.func.isRequired,
};

export default BuildingSlide;
