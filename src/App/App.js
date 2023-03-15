import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // errorElement: TODO:create error element
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "skills",
      element: <Skills />,
    },
    {
      path: "projects",
      element: <Projects />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
