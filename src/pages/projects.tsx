import Head from 'next/head';

import Layout, { siteTitle } from '../components/Layout';
import ProjectView from '../components/ProjectView';


const Projects: React.FC = () => {
  return (
    <Layout >
      <Head>
        <title>{siteTitle}</title>
      </Head>


      <ProjectView></ProjectView>

      

    </Layout>
  );
}

export default Projects