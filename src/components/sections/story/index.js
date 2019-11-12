import React from 'react';
import styles from './story.module.scss';
import PassionImage from './passion-image';

const Story = () => {
  return (
    <div className={`section`}>
      <div className={`w50`}>
        <h3>
          {`Let's reach the summit together!`}
        </h3>
        <span className={styles.content}>
          {`
            Our team is a collection of personalities.
            As a developers, devops and designers
            we gathered experience in various fields.
            It led us to understant the challanges
            involved in building great software.
          `}
          <br/>
          <br/>
          {`As Codeverest we want to build ours and yours future`}
          <br/>
          <br/>
          {`Be part of this journey`}
        </span>
      </div>
      <div className={`w50`}>
        <PassionImage />
      </div>
    </div>
  );
};

export default Story;
