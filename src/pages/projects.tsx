import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

import weakfish from '../../public/chess.png';
import quartzLogo from '../../public/quartz.png';
import rayLogo from '../../public/ray_circle.png';
import threejsLogo from '../../public/threejs.png';
import webMetricsLogo from '../../public/webmetrics_logo.png';

const Projects: React.FC = () => {
  return (
    <Layout >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-10 text-skin-accent">Projects</h1>

        <div className='w-full lg:w-4/5 space-y-4'>
          <ProjectCard
            title="ray-li.com"
            img={rayLogo}
            alt="ray-li logo"
            siteURL="https://ray-li.vercel.app/"
            gitURL="https://github.com/ray-jpl/ray-li.com"
          >
            <p className='mb-4'>This website you're on right now!</p>
            <ul className='list-disc space-y-2 pl-6'>
              <li>Set site usage limits to restrict time spent on certain sites</li>
              <li>Made with Nextjs and Typescript</li>
            </ul>
          </ProjectCard>
          <ProjectCard
            title="Web Metrics"
            img={webMetricsLogo}
            alt="Web Metrics Logo"
            siteURL="https://chromewebstore.google.com/detail/web-metrics/opfdolkbjbijbebmchpapkgodklemiae"
            gitURL="https://github.com/ray-jpl/web-metrics-extension"
          >
            <p className='mb-4'>A Chrome Extension I made to track the time spent browsing websites I visit!</p>
            <ul className='list-disc space-y-2 pl-6'>
              <li>Set site usage limits to restrict time spent on certain sites</li>
              <li>Made with React and TypeScript</li>
            </ul>
          </ProjectCard>
          <ProjectCard
            title="Weakfish Chess Engine"
            img={weakfish}
            alt="chess pawn logo"
            gitURL="https://github.com/ray-jpl/weakfish-chess-engine"
          >
            <p className='mb-4'>A very basic chess engine in Python</p>
            <ul className='list-disc space-y-2 pl-6'>
              <li>Search utilises Alpha-Beta pruning and the evaluation function is based on piece value, piece positioning and move value.</li>
              <li>Move value is based on heuristics such as potential captures and promotions.</li>
            </ul>
          </ProjectCard>
          <ProjectCard
            title="My personal Wiki"
            img={quartzLogo}
            alt="Quartz Logo"
            siteURL="https://rayjpl-wiki.pages.dev/"
            gitURL="https://github.com/ray-jpl/rayjpl-wiki"
          >
            <p className='mb-4'>My Obsidian Wiki for sharing notes on things I'm learning.</p>
            <ul className='list-disc space-y-2 pl-6'>
              <li>Hosted on Cloudflare Pages</li>
              <li>Uses Quartz v4 by Jackyzha0</li>
            </ul>
          </ProjectCard>
          <ProjectCard
            title="Cow Rotation"
            img={threejsLogo}
            alt="threejs logo"
            siteURL="https://ray-jpl.github.io/cow-rotation/"
            gitURL="https://github.com/ray-jpl/cow-rotation"
          >
            <p className='mb-4'>Got bored one evening and learnt some basic three.js</p>
          </ProjectCard>
        </div>
        
      </section>
    </Layout>
  );
}

export default Projects