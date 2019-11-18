import React from 'react';
import Card from './card';
import styles from './technologies.module.scss';
import Angular from '../../../images/technologies/angular.svg';
import Ansible from '../../../images/technologies/ansible.svg';
import AWS from '../../../images/technologies/aws.svg';
import Bootstrap from '../../../images/technologies/bootstrap.svg';
import Cassandra from '../../../images/technologies/cassandra.svg';
import Docker from '../../../images/technologies/docker.svg';
import Elasticsearch from '../../../images/technologies/elasticsearch.svg';
import GoogleCloud from '../../../images/technologies/google-cloud.svg';
import Java from '../../../images/technologies/java.svg';
import JavaScript from '../../../images/technologies/javascript.svg';
import Kafka from '../../../images/technologies/kafka.svg';
import MySQL from '../../../images/technologies/mysql.svg';
import NodeJS from '../../../images/technologies/nodejs.svg';
import PostgreSQL from '../../../images/technologies/postgresql.svg';
import Puppet from '../../../images/technologies/puppet.svg';
import Python from '../../../images/technologies/python.svg';
import Rails from '../../../images/technologies/rails.svg';
import Reactive from '../../../images/technologies/reactive.svg';
import Scala from '../../../images/technologies/scala.svg';
import Terraform from '../../../images/technologies/terraform.svg';
import TypeScript from '../../../images/technologies/typescript.svg';

const Technologies = () => {
  return (
    <div className={`section`} id="technologies">
      <h3 className={`align-center`}>
        {`Technologies`}
      </h3>
      <div className={styles.cardContainer}>
        <Card>
          <div>
            <h3>MAINTANCE and CLOUD SERVICES</h3>
            <span className='align-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla convallis sem vel arcu feugiat, ut faucibus. Ut elementum,
              lorem ut eleifend finibus, est sem posuere lorem, nisi eros.
              Proin faucibus porta eros eget elementum. Scelerisque risus dui,
              in sodales nibh feugiat in.
            </span>
          </div>
          <div>
            <Ansible className={styles.logo}/>
            <Puppet className={styles.logo}/>
            <Terraform className={styles.logo}/>
            <Docker className={styles.logo}/>
            <AWS className={styles.logo}/>
            <GoogleCloud className={styles.logo}/>
          </div>
        </Card>
      </div>
      <div className={styles.cardContainer}>
        <Card>
          <div>
            <h3>INFRASTRUCTURE</h3>
            <span className='align-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla convallis sem vel arcu feugiat, ut faucibus. Ut elementum,
              lorem ut eleifend finibus, est sem posuere lorem, nisi eros.
              Proin faucibus porta eros eget elementum. Scelerisque risus dui,
              in sodales nibh feugiat in.
            </span>
          </div>
          <div>
            <PostgreSQL className={styles.logo}/>
            <MySQL className={styles.logo}/>
            <Cassandra className={styles.logo}/>
            <Elasticsearch className={styles.logo}/>
            <Kafka className={styles.logo}/>
          </div>
        </Card>
      </div>
      <div className={styles.cardContainer}>
        <Card>
          <div>
            <h3>WEB SERVICES</h3>
            <span className='align-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla convallis sem vel arcu feugiat, ut faucibus. Ut elementum,
              lorem ut eleifend finibus, est sem posuere lorem, nisi eros.
              Proin faucibus porta eros eget elementum. Scelerisque risus dui,
              in sodales nibh feugiat in.
            </span>
          </div>
          <div>
            <Java className={styles.logo}/>
            <NodeJS className={styles.logo}/>
            <Python className={styles.logo}/>
            <Rails className={styles.logo}/>
            <Scala className={styles.logo}/>
          </div>
        </Card>
      </div>
      <div className={styles.cardContainer}>
        <Card>
          <div>
            <h3>WEB DESIGN</h3>
            <span className='align-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla convallis sem vel arcu feugiat, ut faucibus. Ut elementum,
              lorem ut eleifend finibus, est sem posuere lorem, nisi eros.
              Proin faucibus porta eros eget elementum. Scelerisque risus dui,
              in sodales nibh feugiat in.
            </span>
          </div>
          <div>
            <JavaScript className={styles.logo}/>
            <TypeScript className={styles.logo}/>
            <Angular className={styles.logo}/>
            <Reactive className={styles.logo}/>
            <Bootstrap className={styles.logo}/>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Technologies;
