import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import Layout, { siteTitle } from '../components/Layout';

import rayLogo from '../../public/ray.png'

const Projects: React.FC = () => {
  return (
    <Layout >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-10 text-skin-accent">Featured Projects</h1>

        <ProjectCard
          title="ray-li.com"
          img={rayLogo}
          alt="ray-li logo"
          desc="My personal website built with React, Tailwind CSS and Typescript"
          siteURL="https://ray-li.vercel.app/"
          gitURL="https://github.com/ray-jpl/ray-li.com"
        />
      </section>
    </Layout>
  );
}

export default Projects