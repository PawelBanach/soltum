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
    {/* <SEO title="Home" /> */}
    <Story />
    <Process />
    <Technologies />
    <Projects />
    <Contect />
  </Layout>
);

export default IndexPage;
