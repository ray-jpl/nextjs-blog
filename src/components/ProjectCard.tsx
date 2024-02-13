import Image, { StaticImageData } from "next/legacy/image";
import Link from 'next/link';

interface ProjectProps {
  title: string;
  img: StaticImageData;
  alt: string;
  children: React.ReactNode;
  siteURL?: string;
  gitURL: string;
}

function ProjectCard({title, img, alt, children, siteURL, gitURL}: ProjectProps) {
    return (
      <div className="md:flex max-w-sm md:max-w-full bg-skin-fillDark rounded-2xl shadow-xl border-4 border-skin-accent overflow-hidden transition ease-in-out scale-100 hover:scale-105 duration-300">
        <Link href={siteURL ? siteURL : gitURL} className="flex items-center justify-center relative w-full md:w-1/3 aspect-square md:aspect-auto p-12">
          <Image className="cursor-pointer min-w-full min-h-full" src={img} alt={alt} />
        </Link>
        
        <div className="flex flex-col items-between p-6 md:pl-0 min-h-full md:w-2/3">
          <h5 className="text-skin-primary text-3xl font-bold mb-2"><Link href={siteURL ? siteURL : gitURL} className="hover:underline">{title}</Link></h5>
          <div className="text-skin-primary text-base mb-4 flex-1">
            {children}
          </div>
          
          <div className="flex flex-col md:flex-row md:justify-end p-2">
            {siteURL
              ? <Link href={siteURL} className="my-2 md:mx-2">
                  <div className="flex items-center justify-center py-2 px-6 w-full text-center rounded-lg border-2 border-skin-primary hover:bg-skin-primary hover:text-skin-inverted">
                    <svg className="h-5 w-5 mr-1" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" /></svg>
                    <span>Site</span>
                  </div>
                </Link>
              : <></>
            }

            <Link href={gitURL} className="mt-2 md:mx-2">
              <div className="flex items-center justify-center py-2 px-6 w-full text-center rounded-lg border-2 border-skin-primary hover:bg-skin-primary hover:text-skin-inverted">
                <svg className="fill-current h-5 w-5 mr-1"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>GitHub</span>
              </div>
            </Link>
          </div>
        </div>
        
      </div>
    );
}

export default ProjectCard