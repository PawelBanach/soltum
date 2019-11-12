import React from 'react';
import PropTypes from 'prop-types';
import styles from './process.module.scss';
import Idea from '../../../images/process/idea.svg';
import Contact from '../../../images/process/contact.svg';
import Research from '../../../images/process/research.svg';
import Design from '../../../images/process/design.svg';
import Development from '../../../images/process/development.svg';
import Launch from '../../../images/process/launch.svg';

const ProcessImage = ({step}) => (
  <div>
    <div className={step === null ? styles.visible : styles.hidden }>
      <Idea className={styles.process}/>
    </div>
    <div className={step === 1 ? styles.visible : styles.hidden }>
      <Contact className={styles.process}/>
    </div>
    <div className={step === 2 ? styles.visible : styles.hidden }>
      <Research className={styles.process}/>
    </div>
    <div className={step === 3 ? styles.visible : styles.hidden }>
      <Design className={styles.process}/>
    </div>
    <div className={step === 4 ? styles.visible : styles.hidden }>
      <Development className={styles.process}/>
    </div>
    <div className={step === 5 ? styles.visible : styles.hidden }>
      <Launch className={styles.process}/>
    </div>
  </div>
);

ProcessImage.propTypes = {
  step: PropTypes.number.isRequired,
};

export default ProcessImage;
