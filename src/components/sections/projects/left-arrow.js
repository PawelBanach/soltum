import React from 'react';
import PropTypes from 'prop-types';
import {FaAngleLeft} from 'react-icons/fa';
import styles from './projects.module.scss';

const LeftArrow = ({onClick}) => {
  return (
    <div className={styles.arrow}>
      <FaAngleLeft size={`2em`} onClick={onClick}/>
    </div>
  );
};

LeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LeftArrow;
