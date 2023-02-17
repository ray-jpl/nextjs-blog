import React from "react";
import Link from 'next/link';
import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  title: string;
  img: StaticImageData;
  alt: string;
  desc: string;
  siteURL: string;
  gitURL: string;
}

function ProjectCard({title, img, alt, desc, siteURL, gitURL}: ProjectProps) {
    return (
      
      <div className="bg-skin-fillDark rounded-2xl shadow-xl max-w-sm border-4 border-skin-accent overflow-hidden transition ease-in-out scale-100 hover:scale-105 duration-300">
        <Link href={siteURL}>
          <Image className="cursor-pointer aspect-square object-scale-down" src={img} alt={alt} />
        </Link>
        
        <div className="p-6">
          <h5 className="text-skin-accent text-xl font-medium mb-2">{title}</h5>
            <p className="text-skin-primary text-base mb-4">{desc}</p>
            <div className="flex flex-col items-center">
              <Link href={siteURL}>
                <div className="p-0.5 m-1 w-full text-center rounded-full border-2 border-skin-primary hover:bg-skin-primary hover:text-skin-inverted">
                  Site
                </div>
              </Link>
              <Link href={gitURL}>
                <div className="p-0.5 m-1 w-full text-center rounded-full border-2 border-skin-primary hover:bg-skin-primary hover:text-skin-inverted">
                  GitHub
                </div>
              </Link>
            </div>
        </div>
        
      </div>
    )
}

export default ProjectCard