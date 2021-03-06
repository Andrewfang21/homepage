import React from "react";
import styled from "styled-components";
import Home from "./Home";
import Profile from "./Profile";
import Experience from "./Experience";
import Project from "./Project";
import Achievement from "./Achievement";
import Skill from "./Skill";
import NavigationBar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Container>
        <NavigationBar />
        <MobileNavbar />
        <Home />
        <Profile />
        <Experience />
        <Project />
        <Achievement />
        <Skill />
        <Footer />
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
