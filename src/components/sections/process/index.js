import React, {useState} from 'react';
import Step from './step';
import Descriptions from './descriptions';
import styles from './process.module.scss';

const Process = () => {
  const [step, setStep] = useState(null);

  const onHover = (number) => {
    if (step !== number) setStep(number);
  };

  const onLeave = (number) => {
    if (step === number) setStep(null);
  };

  return (
    <div className={`section brown`} id="process">
      <h3 className={`align-center`}>
        {`Zakres usług`}
      </h3>
      <div className={`w100`}>
        <div className={`w30`}>
          <Step
            number={1}
            title={`Kierownik Budowy`}
            onHover={onHover}
            onLeave={onLeave}
            hover={step === 1}
          />
          <Step
            number={2}
            title={`Inspektor Nadzoru Inwestorskiego`}
            onHover={onHover}
            onLeave={onLeave}
            hover={step === 2}
          />
          <Step
            number={3}
            title={`Przygląd Techniczny Budynków`}
            onHover={onHover}
            onLeave={onLeave}
            hover={step === 3}
          />
          <Step
            number={4}
            title={`Odbiory budynków i mieszkań`}
            onHover={onHover}
            onLeave={onLeave}
            hover={step === 4}
          />
          <Step
            number={5}
            title={`Inwentaryzacje budynków i mieszkań`}
            onHover={onHover}
            onLeave={onLeave}
            hover={step === 5}
          />
          <Step
            number={6}
            title={`Wykonanie kosztorysów budowlanych`}
            onHover={onHover}
            onLeave={onLeave}
            hover={step === 6}
          />
        </div>
        <div className={`w70 padding-left-50`}>
          <Descriptions step={step} />
        </div>
        <div className={`w70 padding-left-50 ${step == null ? '' : styles.hidden}`}>
          <div className={styles.descriptionContainer}>
            <p>
              Zapoznaj się z usługami jakie oferujemy!
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla id nunc vitae diam finibus ultrices.
              Praesent scelerisque aliquet sem. Vivamus eleifend ultricies
              dolor ac scelerisque. Proin ullamcorper volutpat elit
              sed porttitor. Sed nec nisl ex. Duis euismod sodales quam
              sagittis lobortis velit faucibus lacinia.
              Mauris ornare enim id felis faucibus pharetra.
              <br/>
              A MOŻE TUTAJ JAKIŚ CENNICZEK???
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
