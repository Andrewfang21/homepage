import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import SocialMedias from "../components/SocialMedias";
import { PRIMARY_COLOR, FONT_COLOR } from "../constants/style";
import { HOME_ROUTE } from "../constants/routes";

class Home extends React.Component {
  render() {
    return (
      <StyledElement name={HOME_ROUTE}>
        <Container>
          <div className="name">Andrew Fanggara</div>
          <div className="description">
            I am a computer science student at The Chinese University of Hong
            Kong
          </div>
          <SocialMedias />
        </Container>
      </StyledElement>
    );
  }
}

export default Home;

const StyledElement = styled(Element)`
  height: 100vh;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${PRIMARY_COLOR};
  color: ${FONT_COLOR};
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin: auto;

  .name {
    font-weight: bold;
    font-size: 50px;
    margin-bottom: 10px;
    text-align: center;
  }

  .description {
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
  }
`;
