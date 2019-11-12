import React, {useState} from 'react';
import Step from './step';
import Descriptions from './descriptions';
import ProcessImage from './process-image';

const Process = () => {
  const [step, setStep] = useState(null);

  const onHover = (number) => {
    if (step !== number) setStep(number);
  };

  const onLeave = (number) => {
    if (step === number) setStep(null);
  };

  return (
    <div className={`section grey`}>
      <h3 className={`align-center`}>
        {`Check our process!`}
      </h3>
      <div className={`w100`}>
        <div className={`w25`}>
          <Step
            number={1}
            title={`Contact`}
            onHover={onHover}
            onLeave={onLeave}
          />
          <Step
            number={2}
            title={`Research`}
            onHover={onHover}
            onLeave={onLeave}
          />
          <Step
            number={3}
            title={`Design`}
            onHover={onHover}
            onLeave={onLeave}
          />
          <Step
            number={4}
            title={`Development`}
            onHover={onHover}
            onLeave={onLeave}
          />
          <Step
            number={5}
            title={`Launch`}
            onHover={onHover}
            onLeave={onLeave}
          />
        </div>
        <div className={`w50 align-center`}>
          <ProcessImage step={step} />
        </div>
        <div className={`w25`}>
          <Descriptions step={step} />
        </div>
      </div>
    </div>
  );
};

export default Process;
