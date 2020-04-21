import React, {useState} from 'react';
import styles from './projects.module.scss';
import ApartmentSlide from './slides/apartment-slide';
import BuildingSlide from './slides/building-slide';

const SLIDES_NUMBER = 2;

const Projects = () => {
  const [projectsCounter, setProjectsCounter] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const goToPrevSlide = () => {
    const counter = (projectsCounter + (SLIDES_NUMBER - 1)) % SLIDES_NUMBER;
    setTranslateValue( - (counter * slideWidth()));
    setProjectsCounter(counter);
  };

  const goToNextSlide = () => {
    const counter = (projectsCounter + 1) % SLIDES_NUMBER;
    setTranslateValue( - (counter * slideWidth()));
    setProjectsCounter(counter);
  };

  const slideWidth = () => document.querySelector('.slide').clientWidth;

  return (
    <div className={`section`} id="projects">
      <div className={styles.slider}>
        <div
          className={styles.sliderWrapper}
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s',
          }}
        >
          <ApartmentSlide
            goToPrevSlide={goToPrevSlide}
            goToNextSlide={goToNextSlide}
          />
          <BuildingSlide
            goToPrevSlide={goToPrevSlide}
            goToNextSlide={goToNextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
