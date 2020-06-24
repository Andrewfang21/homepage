import React from "react";
import Loadable from "react-loadable";
import Spinner from "react-spinkit";
import styled from "styled-components";

class LoadingIndicator extends React.Component {
  render() {
    return (
      <Container>
        <Spinner name="ball-scale-ripple-multiple" color="steelblue" />
      </Container>
    );
  }
}

export default LoadingIndicator;

const Container = styled.div`
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100vh;
`;
