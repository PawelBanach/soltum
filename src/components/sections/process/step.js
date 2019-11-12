import React from 'react';
import PropTypes from 'prop-types';
import styles from './process.module.scss';

export const Step = ({number, title, onHover, onLeave}) => (
  <div
    className={styles.stepBlock}
    onMouseEnter={() => onHover(number)}
    onMouseLeave={() => onLeave(number)}>
    <div className={styles.icon}>{number}</div>
    <div className={styles.title}>{title}</div>
  </div>
);

Step.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onHover: PropTypes.func,
  onLeave: PropTypes.func,
};

export default Step;
