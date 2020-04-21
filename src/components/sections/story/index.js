import React from 'react';
import styles from './story.module.scss';
import PassionImage from './passion-image';

const Story = () => {
  return (
    <div className={`section`} id="story">
      <div className={`w50`}>
        <h3>
          {`O firmie`}
        </h3>
        <span className={styles.content}>
          {`
            Firma SOLTUM oferuje usługi inżynieryjne w szeroko
            rozumianej branży budowlanej.
            Cechy które charakteryzują nasz zespół to: wiedza,
            doświadczenie oraz pasja związana z branża budowlaną.
            Każde zadanie traktujemy indywidualnie, starając się
            sprostać wymaganiom inwestora. 
          `}
          <br/>
          <br/>
          {`Lata spędzone w branży budowlanej zaowocowały bardzo dobrą
           znajomością zagadnień technicznych, finansowych
            oraz administracyjno-prawnych.`}
          <br/>
          <br/>
          {`Zapraszamy do zapoznania się z naszą ofertą.`}
        </span>
      </div>
      <div className={`w50`}>
        <PassionImage />
      </div>
    </div>
  );
};

export default Story;
