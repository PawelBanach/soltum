import React from 'react';
import PropTypes from 'prop-types';
import {FaAngleRight} from 'react-icons/fa';
import styles from './projects.module.scss';

const RightArrow = ({onClick}) => {
  return (
    <div className={styles.arrow}>
      <FaAngleRight size={`2em`} onClick={onClick}/>
    </div>
  );
};

RightArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RightArrow;
