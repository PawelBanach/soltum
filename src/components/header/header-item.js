import React from 'react';
import {Link} from 'gatsby';
import styles from './header.module.scss';

const HeaderItem = ({title}) => (
  <Link className={styles.item}>
    {title}
  </Link>
);

export default HeaderItem;
