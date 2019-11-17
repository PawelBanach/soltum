import React, {useState} from 'react';
import styles from './projects.module.scss';
import BoardOnSlide from './slides/board-on-slide';
import MaacSlide from './slides/maac-slide';
import StreamlabSlide from './slides/streamlab-slide';
import LeftArrow from './left-arrow';
import RightArrow from './right-arrow';

const Projects = () => {
  const [projectsCounter, setProjectsCounter] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const goToPrevSlide = () => {
    const counter = (projectsCounter + 2) % 3;
    setTranslateValue( - (counter * slideWidth()));
    setProjectsCounter(counter);
  };

  const goToNextSlide = () => {
    const counter = (projectsCounter + 1) % 3;
    setTranslateValue( - (counter * slideWidth()));
    setProjectsCounter(counter);
  };

  const slideWidth = () => document.querySelector('.slide').clientWidth;

  return (
    <div className={`section`}>
      <div className={styles.slider}>
        <div
          className={styles.sliderWrapper}
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s',
          }}
        >
          <BoardOnSlide goToPrevSlide={goToPrevSlide} goToNextSlide={goToNextSlide} />
          <MaacSlide goToPrevSlide={goToPrevSlide} goToNextSlide={goToNextSlide} />
          <StreamlabSlide goToPrevSlide={goToPrevSlide} goToNextSlide={goToNextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
