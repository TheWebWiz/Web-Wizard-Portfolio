import React from "react";
import Nav from "../Components/Nav/Nav";
import HomeAbout from "./HomeAbout";
import HomeHeader from "./HomeHeader";
import HomeProjects from "./HomeProjects";
import HomeSkills from "./HomeSkills";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Nav />
      <HomeHeader />
      <HomeAbout />
      <HomeSkills />
      <HomeProjects />
    </div>
    );
}

export default Home;
