import React from "react";
import styled from "styled-components";
import studentApp1 from "../assets/student-app-snapshot-1.png";
import studentApp2 from "../assets/student-app-snapshot-2.png";

class Project extends React.Component {
  render() {
    return (
      <Container>
        <Header>Projects</Header>
        <Wrapper>
          <Detail>
            <div className="title">
              StudentApp
              <span className="github">
                <a href={"https://github.com/Andrewfang21/student-app"}>
                  <i className="fa fa-github"></i>
                </a>
              </span>
            </div>
            <div className="image">
              <img src={studentApp1} alt="screenshot-1" />
              <img src={studentApp2} alt="screenshot-2" />
            </div>
            <ul>
              <li className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </li>
            </ul>
          </Detail>
        </Wrapper>
      </Container>
    );
  }
}

export default Project;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: pink;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

const Header = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 85%;
  font-size: 40px;
  font-weight: bold;
  color: #d6d5ec;
`;

const Detail = styled.div`
  .title {
    font-weight: bold;
    font-size: 30px;
    text-align: center;
  }

  a {
    margin-left: 15px;
    :hover {
      color: red;
      cursor: pointer;
    }
  }

  .description {
    text-align: justify;
  }

  .image {
    display: flex;
    justify-content: center;
    margin: 20px;

    img {
      height: 300px;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
`;
