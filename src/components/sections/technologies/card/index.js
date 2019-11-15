import React from 'react';
import PropTypes from 'prop-types';
import CardBack from './card-back';
import CardFront from './card-front';
import styles from './card.module.scss';

const Card = (props) => {
  // debugger;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardBody}>
        <CardBack>
          {props.children[1]}
        </CardBack>
        <CardFront>
          {props.children[0]}
        </CardFront>
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Card;
