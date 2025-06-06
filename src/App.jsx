import React from "react";
import Navbar from './components/Navbar';
import Pop from "./components/Pop";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import "./styles/spacing.css";
import "./styles/common.css";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="main-content section">
        <Pop />
        <AboutMe />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;