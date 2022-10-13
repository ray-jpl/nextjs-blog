import React from "react";
import Age from './age'

const About: React.FC = () => {
    return (
      <section>
        <h1>About</h1>

        <p>I am a <Age></Age> year old Computer Science student at UNSW in Sydney, Australia.</p>
      </section>
    )
}

export default About