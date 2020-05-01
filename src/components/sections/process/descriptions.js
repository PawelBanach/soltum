import React from 'react';
import PropTypes from 'prop-types';
import styles from './process.module.scss';

const Descriptions = ({step}) => (
  <div className={styles.descriptionContainer}>
    <div className={step === 1 ? styles.visible : styles.hidden }>
      <p>
        Zadaniem Kierownika Budowy jest zarządzanie procesem realizacji
        budowy czy też prowadzenia robót budowlanych. Kierownikiem Budowy
        może zostać osoba posiadająca odpowiednie uprawnienia do prowadzenia
        samodzielnej funkcji technicznej. Może zostać nim inwestor, ale
        znacznie częściej funkcja ta przekazywana jest wykonawcy robót
        budowalnych, który zatrudnia własnego Kierownika Budowy.
        Wśród obowiązków Kierownika Budowy znajdują się między innymi:
      </p>
      <ul>
        <li className="line-item">prowadzenie dokumentacji budowy</li>
        <li className="line-item">
          zapewnienie geodezyjnego wytyczenia obiektu
        </li>
        <li className="line-item">organizacja budowy</li>
        <li className="line-item">
          realizacja zaleceń znajdujących się w dzienniku budowy
        </li>
        <li className="line-item">kierowanie pracami w budowie obiektu zgodnie z
          projektem i pozwoleniami</li>
      </ul>
    </div>
    <div className={step === 2 ? styles.visible : styles.hidden }>
      <p>
        Głównym zadaniem Inspektora Nadzoru Inwestorskiego jest
        reprezentowanie interesów klienta podczas budowy. Ma on
        za cel dbać, by prace realizowane były rzetelnie, zgodnie
        z projektami oraz zasadami wiedzy technicznej i sztuką
        budowlaną. Dzięki temu inwestor, który nie posiada wiedzy
        technicznej, jest w stanie zabezpieczyć swoje interesy,
        gdyż Inspektor Nadzoru Inwestorskiego pełni rolę
        kontrolną nad Kierownikiem Budowy.
      </p>
    </div>
    <div className={step === 3 ? styles.visible : styles.hidden }>
      <p>
        Zależy Ci na pewności, że budynek którego jesteś właścicielem
        jest w dobrym stanie oraz spełnieniu wymogów prawnych?
        Każdy budynek należy szczegółowo skontrolować minimum
        raz na 5 lat. Taki przegląd obejmuje  aspekty budowlane,
        sprawdzenie instalacji sanitarnej oraz pomiary elektryczne.
        Nasza oferta z zakresu przeglądów okresowych to:
      </p>
      <ul>
        <li className="line-item">
          kontrola bezpieczeństwa i kontrola techniczna konstrukcji obiektu
        </li>
        <li className="line-item">
          kontrola szczelności i systemu odwodnienia obiektu
        </li>
        <li className="line-item">
          kontrola instalacji sanitarnej
        </li>
        <li className="line-item">
          kontrola wentylacji
        </li>
        <li className="line-item">
          kontrola instalacji ogrzewania
        </li>
        <li className="line-item">
          kontrola instalacji gazowej i przewodów kominowych (dymowych,
          spalinowych i wentylacyjnych wraz z badaniem szczelności gazu
          i protokołem kominiarskim)
        </li>
        <li className="line-item">
          pomiary elektryczne
        </li>
      </ul>
    </div>
    <div className={step === 4 ? styles.visible : styles.hidden }>
      <p>
        Podczas odbioru mieszkania sporządzamy protokół odbioru technicznego
        mieszkania, w którym za pomocą wymaganego wg norm oraz nowoczesnego
        sprzętu wyszukujemy oraz spisujemy wszelkie usterki. Wówczas deweloper
        musi  je usunąć . Znając normy oraz przepisy obowiązujące w naszym
        kraju przedstawiciel dewelopera nie jest w stanie nam wmówić, że
        dana wada jest nieistotna lub mieści się w normie.
      </p>
    </div>
    <div className={step === 5 ? styles.visible : styles.hidden }>
      <p>
        Inwentaryzacja budowlana potrzebna jest inwestorowi, który chce
        mieć aktualny obraz istniejącego budynku. Czasem nie posiada on
        dokumentacji projektowej w ogóle (zaginęła, jest niekompletna,
        uległa zniszczeniu) lub od czasu jej wykonania zaszły zmiany i jest
        ona po prostu nieaktualna. Rzeczywisty obraz budynku, w postaci
        aktualnej inwentaryzacji, przydatny jest m. in. do: planowania
        prac remontowych, nadbudowy, rozbudowy, projektowych (aranżacji
        wnętrz, nowych instalacji, urządzeń, rozbiórki), wyliczenia
        powierzchni użytkowej lokalu (najem, sprzedaż), wystąpienia
        z wnioskiem o uzyskanie samodzielności lokalu, jego adaptacji,
        zmiany sposobu użytkowania, legalizacji samowoli budowlanej,
        rozliczenia wykonawcy ze zleconych prac (np. wyliczenie powierzchni
        ścian, elewacji, ułożonych płytek,).
      </p>
    </div>
    <div className={step === 6 ? styles.visible : styles.hidden }>
      <p>
        Kosztorys budowlany składa się z kilku elementów. Pierwszy z nich
        to przedmiar robót – niezmiernie ważny dokument, dzięki któremu,
        określa się ilość i zakres robót budowlanych do wykonania. Dopiero
        na podstawie sporządzonego przedmiaru (który robi się zgodnie z
        dokumentacją projektową) można rozpocząć tworzenie kalkulacji cenowych.
        Do tego celu stosuje się najczęściej Katalogi Norm – dostępne na rynku
        zestawienia różnych prac budowlanych, które zawierają normy zużycie
        materiałów, czasu pracy robotników i sprzętów budowlanych. Dysponując
        tymi danymi inwestor określi między innymi:
      </p>
      <ul>
        <li className="line-item">ile funduszy pochłonie inwestycja</li>
        <li className="line-item">
          jakie materiały będą potrzebne i na jakim etapie
          budowy trzeba je dostarczyć
        </li>
        <li className="line-item">jak długo potrwają roboty budowlane</li>
      </ul>
    </div>
    <div className={step === 7 ? styles.visible : styles.hidden }>
      <p>
        Inwentaryzacja budowlana potrzebna jest inwestorowi, który chce
        mieć aktualny obraz istniejącego budynku. Czasem nie posiada on
        dokumentacji projektowej w ogóle (zaginęła, jest niekompletna,
        uległa zniszczeniu) lub od czasu jej wykonania zaszły zmiany i jest
        ona po prostu nieaktualna. Rzeczywisty obraz budynku, w postaci
        aktualnej inwentaryzacji, przydatny jest m. in. do: planowania
        prac remontowych, nadbudowy, rozbudowy, projektowych (aranżacji
        wnętrz, nowych instalacji, urządzeń, rozbiórki), wyliczenia
        powierzchni użytkowej lokalu (najem, sprzedaż), wystąpienia
        z wnioskiem o uzyskanie samodzielności lokalu, jego adaptacji,
        zmiany sposobu użytkowania, legalizacji samowoli budowlanej,
        rozliczenia wykonawcy ze zleconych prac (np. wyliczenie powierzchni
        ścian, elewacji, ułożonych płytek,).
      </p>
    </div>
  </div>
);

Descriptions.propTypes = {
  step: PropTypes.number,
};

export default Descriptions;
