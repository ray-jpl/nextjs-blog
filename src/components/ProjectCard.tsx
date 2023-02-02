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

function Projects({title, img, alt, desc, siteURL, gitURL}: ProjectProps) {
    return (
      
      <div className="bg-skin-fillDark rounded-2xl shadow-xl max-w-sm">
        <Link className="cursor-pointer " href={siteURL}>
          <Image className="aspect-square object-scale-down rounded-t-2xl" src={img} alt={alt} />
        </Link>
        
        <div className="p-6">
          <h5 className="text-skin-primary text-xl font-medium mb-2">{title}</h5>
            <p className="text-skin-primary text-base mb-4">{desc}</p>
            <div className="flex flex-col items-center">
              <Link href={siteURL}>
                <div className="p-0.5 m-1 bg-skin-muted w-full text-center rounded-full hover:text-skin-inverted">
                  Site
                </div>
              </Link>
              <Link href={gitURL}>
                <div className="p-0.5 m-1 bg-skin-muted w-full text-center rounded-full hover:text-skin-inverted">
                  GitHub
                </div>
              </Link>
            </div>
        </div>
        
      </div>
    )
}

export default Projects