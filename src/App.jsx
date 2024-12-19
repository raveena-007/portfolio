import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.scss";

const App = () => (
  <>
    <Header />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </>
);

export default App;
