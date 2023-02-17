import ProjectCard from '../components/ProjectCard';
import Link from 'next/link';

import rayLogo from '../../public/ray.png'

const FeaturedProjects: React.FC = () => {
  return (
    <section className="flex flex-col items-center mb-14">
      <div className="flex flex-col items-center mb-5 w-fit">
          <h1 className="text-3xl font-bold text-center text-skin-title">Featured Projects</h1>
          <div className="w-4/5 h-1 border rounded-xl border-skin-accent bg-skin-accent"></div>
      </div>  
      
      <ProjectCard
        title="ray-li.com"
        img={rayLogo}
        alt="ray-li logo"
        desc="My personal website built with React, Tailwind CSS and Typescript"
        siteURL="https://ray-li.vercel.app/"
        gitURL="https://github.com/ray-jpl/ray-li.com"
      />

      {/* <Link href='/projects'>
        <button className="p-0.5 m-1 mt-5 w-20 text-center rounded-full border-2 border-skin-primary hover:bg-skin-primary hover:text-skin-fillDark">
          See all
        </button>
      </Link> */}
    </section>
  );
}

export default FeaturedProjects