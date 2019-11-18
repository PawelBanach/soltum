import React from 'react';
import PropTypes from 'prop-types';
import {Link, animateScroll as scroll} from 'react-scroll';
import styles from './header.module.scss';

const HeaderItem = ({title}) => (
  <Link
    activeClass="active"
    className={styles.item}
    to={title}
    smooth={true}
    offset={-87}
  >
    {title}
  </Link>
);
HeaderItem.propTypes = {
  title: PropTypes.string.isRequired,
};
export default HeaderItem;
