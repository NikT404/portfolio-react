import React from "react";
import Navbar from './components/Navbar';
import Pop from "./components/Pop";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Darkmode from './components/Darkmode';
import Experience from './components/Experience';
import "./styles/spacing.css";
import "./styles/common.css";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Darkmode />
      <main className="main-content section">
        <Pop />
        <AboutMe />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </main>
    </>
  );
}

export default App;