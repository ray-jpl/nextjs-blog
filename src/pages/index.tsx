import Head from 'next/head';

import Layout, { siteTitle } from '../components/Layout';

import About from '../components/About';
import Contact from '../components/Contact';
import FeaturedProjects from '../components/FeaturedProjects';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <About/>
      <FeaturedProjects/>
      <Contact/> 

    </Layout>
  );
}