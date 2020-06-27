import React from "react";
import styled from "styled-components";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Achievement from "./Achievement";
import Skill from "./Skill";
import NavigationBar from "../components/Navbar";

import { skillData } from "../models/Skill";
import { experienceData } from "../models/Experience";
import { profileData } from "../models/About";
import { projectData } from "../models/Project";
import { achievementData } from "../models/Achievement";

class Routes extends React.Component {
  render() {
    return (
      <Container>
        <NavigationBar />
        <Home />
        <About about={profileData} />
        <Experience experiences={experienceData} />
        <Project projects={projectData} />
        <Achievement achievements={achievementData} />
        <Skill skills={skillData} />
      </Container>
    );
  }
}

export default Routes;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
  font-family: "Expletus Sans";
`;
