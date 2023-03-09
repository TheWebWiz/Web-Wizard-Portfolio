import React, { useState } from "react";

import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("");

  function Page() {
    switch (currentPage) {
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      case "About":
        return <About />;
      default:
        return <Home />;
    }
  }

  return (
    <div className="App">
      <Page />
      <Footer />
    </div>
  );
}

export default App;
