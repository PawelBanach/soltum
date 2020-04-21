import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundSection from '../components/background-section';
import Story from '../components/sections/story';
import Process from '../components/sections/process';
import Technologies from '../components/sections/technologies';
import Projects from '../components/sections/projects';
import Contect from '../components/sections/contact';

const IndexPage = () => (
  <Layout>
    <BackgroundSection />
    <SEO
      lang="pl"
      author="Paweł Banach"
      description= "SOLTUM - firma z krakowa działająca w branży budowlanej. Kierownik budowy Kraków. Kierownik budowy małopolska. Inspektor nadzoru budowlanego. Inspektor nadzory inwestorskiego. Przegląd techniczny budynków. Odbiory budynków i mieszkań Kraków. Inwentaryzacje budynków i mieszkań. Wykonanie kosztorysów budowlanych."
      title="SOLTUM - Budownictwo Kraków"
    />
    <Story />
    <Process />
    <Technologies />
    <Projects />
    <Contect />
  </Layout>
);

export default IndexPage;
