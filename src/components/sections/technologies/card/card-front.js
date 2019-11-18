import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';

const CardFront = (props) => (
  <div className={styles.sideFront}>
    <div className='container-fluid'>
      <div className='side-front-content'>
        {props.children}
      </div>
    </div>
  </div>
);

CardFront.propTypes = {
  children: PropTypes.object.isRequired,
};

export default CardFront;
