import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-all duration-300 theme-transition">
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <FloatingCTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;