import Head from 'next/head';

import Layout, { siteTitle } from '../components/layout';
import About from '../components/About';
import Contact from '../components/Contact';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <About></About>
      <Contact></Contact>
      

    </Layout>
  );
}