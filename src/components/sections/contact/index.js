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
          'mateuszbanach90@gmail.com',
        ],
      },
      Message: {
        Body: {
          Text: {
            Charset: 'UTF-8',
            Data: `
            Imię i Nazwisko: ${name},

            Email: ${email},

            Wiadomość: ${message}
            `,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `Strona SOLTUM - from ${email}`,
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
      alert('Wiadomość została wysłana!');
    }).catch((error) => {
      alert('Wiadomość nie może zostać wysłana!');
    });
  };

  return (
    <div className={`section`} id="contact">
      <div className={`w25`} />
      <div className={`w50`}>
        <h3>
          {`Zbudujmy razem coś wielkiego!`}
        </h3>
        <div className={styles.description}>
          Masz zaplanowany zakup nieruchomości? Szukasz pomocy przy istniejącym
          budynku? Potrzebujesz doświadczonego zespołu, który posida wiele
          lat praktyki w branży?
          <br/>
          <br/>
          Nie ważne na jakim etapie projektu
          jesteś, jesteśmy tu by Ci pomóc.
          <br/>
          <br/>
          Wyślij nam wiadomość lub zadzwoń
          na numer <b>798 651 906</b> a skontaktujemy się z Tobą wkrótce!
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Imię i Nazwisko
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
            Wiadomość
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
          <button type="submit">Wyślij</button>
        </form>
      </div>
      <div className={`w25`} />
    </div>
  );
};

export default Contact;
