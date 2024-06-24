import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import SmoothScrolling from "./components/SmoothScrolling";
function App() {
  return (
    <main className="app">
      <SmoothScrolling>
        <Navbar />
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <GetInTouch />
      </SmoothScrolling>
    </main>
  );
}

export default App;
