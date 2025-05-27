import React from "react";
import Navbar from './components/Navbar';
import Pop from "./components/Pop";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Darkmode from './components/Darkmode';
import GridEffect from './components/GridEffect';
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Darkmode />
      <GridEffect />
      <main className="main-content">
        <Pop />
        <AboutMe />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}

export default App;