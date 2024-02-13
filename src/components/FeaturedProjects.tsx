import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';

import webMetricsLogo from '../../public/webmetrics_logo.png';

const FeaturedProjects: React.FC = () => {
  return (
    <section className="flex flex-col items-center mb-14">
      <div className="flex flex-col items-center mb-5 w-fit">
        <h1 className="text-3xl font-bold text-center text-skin-title">Featured Projects</h1>
        <div className="w-4/5 h-1 border rounded-xl border-skin-accent bg-skin-accent"></div>
      </div>  
      <div className="w-full lg:w-4/5 place-items-center grid grid-cols-1 gap-4 auto-rows-fr">
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

      </div>
      
      <Link href='/projects' className='mt-5'>
        <button className="flex justify-center items-center px-4 text-center rounded-full border-2 border-skin-fill hover:border-skin-muted hover:bg-skin-muted hover:text-skin-fillDark">
          <span>See all</span>
          <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </Link>
    </section>
  );
}

export default FeaturedProjects