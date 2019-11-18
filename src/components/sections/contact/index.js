import React, {useState} from 'react';
import styles from './contact.module.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const AWS = require('aws-sdk');
  AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'eu-central-1',
  });
  const ses = new AWS.SES({apiVersion: '2010-12-01'});

  const buildMessage = () => (
    {
      Destination: {
        ToAddresses: [
          'pawel.banach@codeverest.io',
          'bartosz.szmit@codeverest.io',
          'michal.kawalek@codeverest.io',
        ],
      },
      Message: {
        Body: {
          Text: {
            Charset: 'UTF-8',
            Data: `
            Name: ${name},

            Email: ${email},

            Message: ${message}
            `,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `Strona Codeverest - from ${email}`,
        },
      },
      Source: 'pawel.banach@codeverest.io',
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = buildMessage();
    const sendEmail = ses.sendEmail(params).promise();
    sendEmail.then((data) => {
      setName('');
      setEmail('');
      setMessage('');
      alert('Message was sent!');
    }).catch((error) => {
      alert('Message cannot be sent!');
    });
  };

  return (
    <div className={`section`} id="contact">
      <div className={`w25`} />
      <div className={`w50`}>
        <h3>
          {`Let's build something awesome!`}
        </h3>
        <div className={styles.description}>
          {`
          Having a new project in mind? Need help with an existing project?
          Looking for an experienced team of developers?
          No matter at what point you are with your project,
          we are happy to help.
          `}
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength="500"
              required
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className={`w25`} />
    </div>
  );
};

export default Contact;
