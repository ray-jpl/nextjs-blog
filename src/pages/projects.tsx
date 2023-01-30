import Head from 'next/head';

import Layout, { siteTitle } from '../components/Layout';


const Projects: React.FC = () => {
  return (
    <Layout >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1 className="text-3xl font-bold">Featured Projects</h1>
        <p>This is a Work In Progress! Check back Later!</p>
      </section>
    </Layout>
  );
}

export default Projects