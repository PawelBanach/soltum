import React from 'react';
import PropTypes from 'prop-types';
import styles from './process.module.scss';

const Descriptions = ({step}) => (
  <div className={styles.descriptionContainer}>
    <div className={step === 1 ? styles.visible : styles.hidden }>
      {`
        The first of the whole design process begins with the 
        customer. We discuss requirements set out in the project 
        in detail in order to better understand the project’s purpose, 
        often we also provide advice. Project vision is one of the 
        most important stages in our process, 
        therefore we pay special attention to it.
      `}
    </div>
    <div className={step === 2 ? styles.visible : styles.hidden }>
      {`
        The research is can be described as adapting the technology 
        to the proposed solution. At this stage, the architecture 
        of the entire system is established. After the client's 
        acceptance it's passed to the next stages. 
        The infrastructure in the form determined at this 
        stage will be delivered to the client along with the entire project.
        
      `}
    </div>
    <div className={step === 3 ? styles.visible : styles.hidden }>
      {`
        The design phase begins with creating wireframes. Wireframes are
        interactive schematic pages of the site or application’s screens,
        like a screen blueprint. Although the wireframes have little design
        go into them initially, they allow us to make a skeleton of the
        project that shows how different screen blocks connect and what the
        product’s functionality will be like.
      `}
    </div>
    <div className={step === 4 ? styles.visible : styles.hidden }>
      {`
        After the homepage is approved, we begin working on the design
        of the site or application’s internal pages. This stage takes
        a lot of development time because there is a large volume of
        simple to complex pages and various interface elements that must
        be created. The smallest details need to be considered in advance; 
        things like entry fields, drop-down menus, potential mistakes, and
        lost page designs are all factored in at this stage of the process.
      `}
    </div>
    <div className={step === 5 ? styles.visible : styles.hidden }>
      {`
        As the customer checks the final designs of the product pages,
        our team has time to prepare the resources needed after product
        launch. When designing an application, all of the icons and
        pictures must be adjusted to fit the platform being used and
        colors and font sizes for various screens should be described.
      `}
    </div>
  </div>
);

Descriptions.propTypes = {
  step: PropTypes.number,
};

export default Descriptions;
