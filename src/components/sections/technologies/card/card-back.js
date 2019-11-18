import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';

const CardBack = (props) => (
  <div className={styles.sideBack}>
    <div className='container-fluid'>
      {props.children}
    </div>
  </div>
);

CardBack.propTypes = {
  children: PropTypes.object.isRequired,
};

export default CardBack;
