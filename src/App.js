import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work_experience from "./components/Work_experience";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Work_experience />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
}
