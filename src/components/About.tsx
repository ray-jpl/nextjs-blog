import React from "react";
import Age from './age'

const About: React.FC = () => {
    return (
      <section id="about" className="mb-10">
        <h1 className="text-3xl font-bold text-center text-skin-accent">About</h1>

        <p className="text-lg">
          I am a <Age></Age> year old Computer Science student at UNSW in Sydney, Australia.<br />
          <br />
          I'm building this website to play around with web development technologies in my free time.
          Keep in mind that this website is a work in progress! Please be patient, I'm still working on it! 
        </p>
        

        <p></p>
        <br />
        <p className="text-xs">I'm glad you're here though, I hope you enjoy your stay!</p>
      
      </section>
    )
}

export default About