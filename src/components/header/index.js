import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import Logo from './logo-components';
import HeaderItem from './header-item';
import styles from './header.module.scss';

const Header = () => {
  const [navBackground, setNavBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > window.innerHeight - 100;
      setNavBackground(show);
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={`${navBackground ? styles.whiteBg : styles.transparentBg} ${styles.nav}`}>
        <Logo className={styles.logo}/>
        <div className={styles.menu}>
          <HeaderItem title="kontakt" to="contact"/>
          <HeaderItem title="projekty" to="projects"/>
          <HeaderItem title="uprawnienia" to="technologies"/>
          <HeaderItem title="zakres usług" to="process"/>
          <HeaderItem title="O firmie" to="story"/>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
