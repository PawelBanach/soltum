import React from 'react';
import PropTypes from 'prop-types';
import styles from './process.module.scss';
import Engineer from '../../../images/icons/engineer.svg';
import Engineer2 from '../../../images/icons/engineer2.svg';
import Building from '../../../images/icons/building.svg';
import Building2 from '../../../images/icons/building2.svg';
import Blueprint from '../../../images/icons/blueprint.svg';
import Wrench from '../../../images/icons/wrench.svg';
import House from '../../../images/icons/house.svg';

const ProcessImage = ({step}) => (
  <div>
    <div className={step === null ? styles.visible : styles.hidden }>
      <House className={styles.process}/>
    </div>
    <div className={step === 1 ? styles.visible : styles.hidden }>
      <Engineer className={styles.process}/>
    </div>
    <div className={step === 2 ? styles.visible : styles.hidden }>
      <Engineer2 className={styles.process}/>
    </div>
    <div className={step === 3 ? styles.visible : styles.hidden }>
      <Building className={styles.process}/>
    </div>
    <div className={step === 4 ? styles.visible : styles.hidden }>
      <Building2 className={styles.process}/>
    </div>
    <div className={step === 5 ? styles.visible : styles.hidden }>
      <Blueprint className={styles.process}/>
    </div>
    <div className={step === 6 ? styles.visible : styles.hidden }>
      <Wrench className={styles.process}/>
    </div>
  </div>
);

ProcessImage.propTypes = {
  step: PropTypes.number,
};

export default ProcessImage;
