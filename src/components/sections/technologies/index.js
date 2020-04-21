import React from 'react';
import Card from './card';
import styles from './technologies.module.scss';
import BuildingImage from './building-image';
import ArchitectureImage from './architecture-image';
import WaterImage from './water-image';

const Technologies = () => {
  return (
    <div className={`section`} id="technologies">
      <h3 className={`align-center`}>
        {`Uprawnienia`}
      </h3>
      <div className={styles.cardContainer}>
        <Card>
          <div>
            <h3>KONSTRUKCYJNO-BUDOWLANE</h3>
            <BuildingImage className={styles.cardImage} />
          </div>
          <div>
            <span className='align-justify'>
              Uprawnienia konstrukcyjno budowlane do najbardziej
              rozpowszechniony rodzaj uprawnień budowlanych
              wśród osób wykonujących samodzielne funkcje techniczne
              w budownictwie. Ich posiadanie umożliwia pracę
              jako kierownik budowy lub robót, inspektor
              nadzoru inwestorskiego oraz projektant konstrukcji.
              Są wydawane przez okręgowe komisje
              kwalifikacyjne PIIB po przejściu procesu kwalifikacyjnego oraz
              zdania egzaminu. Wcześniej jednak należy zdobyć odpowiednie
              wykształcenie oraz odbyć praktykę zawodową na budowie i/lub
              w biurze projektowym.
            </span>
          </div>
        </Card>
      </div>
      <div className={styles.cardContainer}>
        <Card>
          <div>
            <h3>ARCHITEKTONICZNE</h3>
            <ArchitectureImage className={styles.cardImage} />

          </div>
          <div>
            <span className='align-justify'>
              Uprawnienia architektoniczne czyli uprawnienia budowlane
              w specjalności architektonicznej są warunkiem koniecznym
              do sprawowania samodzielnych funkcji technicznych w budownictwie
              przy projektowaniu obiektów budowlanych jako architekt oraz
              kierowaniu robotami budowlanymi w odniesieniu do architektury
              obiektów. Uprawnienia architektoniczne wymagane są także do
              sprawowania nadzoru autorskiego, sprawdzania projektów budowlanych
              oraz wykonywania obowiązków inspektora nadzoru inwestorskiego.
              Uprawnienia architektoniczne po spełnieniu określonych
              w odpowiednich aktach prawnych warunków nadaje
              Izba Architektów RP.
            </span>
          </div>
        </Card>
      </div>
      <div className={styles.cardContainer}>
        <Card>
          <div>
            <h3>SANITARNE</h3>
            <WaterImage className={styles.cardImage} />
          </div>
          <div>
            <span className='align-justify'>
              Uprawnienia sanitarne czyli uprawnienia budowlane w specjalności
              instalacyjnej w zakresie sieci, instalacji i urządzeń cieplnych,
              wentylacyjnych, gazowych, wodociągowych są niezbędne do
              sprawowania samodzielnych funkcji technicznych na budowie
              ( jako kierownik budowy, projektant lub inspektor nadzoru )
              instalacji i urządzeń sanitarnych oraz przy ich projektowaniu.
              Nadawane są przez organy PIIB inżynierom z odpowiednim
              wykształceniem, którzy odbędą praktykę zawodową oraz zdadzą
              specjalistyczny egzamin z przepisów prawa oraz praktyki zawodowej.
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Technologies;
