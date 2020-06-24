import React from "react";
import styled from "styled-components";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Name>Andrew Fanggara</Name>
          <Description>
            I am a computer science student at The Chinese University of Hong
            Kong
          </Description>
          <SocialMedia>
            <div>LinkedIn</div>
            <div>Github</div>
            <div>Instagram</div>
            <div>Facebook</div>
          </SocialMedia>
        </Wrapper>
      </Container>
    );
  }
}

export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: rgb(35, 41, 56);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin-top: 35vh;
  /* margin: auto; */
`;

const Name = styled.div`
  color: white;
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 10px;
  text-align: center;
`;

const Description = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;

  div {
    margin-left: 10px;
    margin-right: 10px;
  }
`;