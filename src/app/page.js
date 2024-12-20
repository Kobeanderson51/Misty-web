"use client"
import React from 'react';

import Nav from './content/nav';
import Bio from './content/bio';
import Experience from './content/experience';
import Results from './content/results';
import Expertise from './content/expertise';
import Education from './content/education';
import Testimonials from './content/testimonials';
import Meet from './content/meet';
import QA from './content/qa';
import Interests from './content/interests';
import Contact from './content/contact';
import Footer from './content/footer';
import Backtotop from './content/backtotop'

export default function Home() {
  return (
    <>
      <Nav />

      <section id="bio">
        <Bio />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="results">
        <Results />
      </section>

      <section id="expertise">
        <Expertise />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="meet-misty">
        <Meet />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="qqaa">
        <QA />
      </section>
      
      <section id="interests&hobbies">
        <Interests />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Backtotop />

      <Footer />
    </>
  );
}
