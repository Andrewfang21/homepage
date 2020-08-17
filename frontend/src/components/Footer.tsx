import React from "react";
import styled from "styled-components";

import { SECONDARY_COLOR, FONT_COLOR } from "../constants/style";

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <div>
          Copyright &copy; {new Date().getFullYear()} All rights reserved | This
          site is made with 💙 by Andrew Fanggara
        </div>
      </Container>
    );
  }
}

export default Footer;

const Container = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
  justify-content: center;
  background-color: ${SECONDARY_COLOR};

  div {
    padding: 20px;
  }
`;
