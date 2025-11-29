import React from 'react';
import Header from './components/Header';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App(){
  return (
    <div className="antialiased text-slate-800">
      <Header />
      <main>
        <Expertise />
        <Projects />
        <Timeline />
        <Skills />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
