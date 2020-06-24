import React from "react";
import styled from "styled-components";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import NavigationBar from "../components/Navbar";

class Routes extends React.Component {
  render() {
    return (
      <Container>
        <NavigationBar />
        <Home />
        <About />
        <Experience />
        <Project />
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
`;
