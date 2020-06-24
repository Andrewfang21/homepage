import React from "react";
import styled from "styled-components";
import cuhkImage from "../assets/cuhk-logo.png";
import stoqoLogo from "../assets/stoqo-logo.png";

class Experience extends React.Component {
  render() {
    return (
      <Container>
        <Flex>
          <SectionTitle>Education</SectionTitle>
          <Timeline>
            <div className="time-and-place">
              <div className="place">Hong Kong SAR</div>
              <div className="time">Aug 2018 - Present</div>
            </div>
            <div className="image">
              <img src={cuhkImage} alt="institution" />
            </div>
            <div className="panel">
              <div className="role">Computer Science Undergraduate Student</div>
              <div className="institution">
                <a href={"https://www.cuhk.edu.hk/"}>
                  The Chinese University of Hong Kong
                </a>
              </div>
              <div className="grade">Current CGPA: 0.00 / 4.00</div>
              <ul>
                <li className="description">
                  Intended Concentration: Intelligence Science & Distributed
                  Systems, Networks and Security
                </li>
                <li className="description">
                  Relevant Courses Taken: Software Engineering, Distributed and
                  Parallel Computing, Database Systems, Design and Analysis of
                  Algorithms, Operating Systems, Cyber Security, Artificial
                  Intelligence, Data Structures, Object-Oriented Programming,
                  Discrete Mathematics, Engineering Economics
                </li>
                <li className="description">
                  Activities and Societies: Google Developer Student (DSC) Core
                  Team Member
                </li>
              </ul>
            </div>
          </Timeline>
          <SectionTitle>Work and Voluntary Experiences</SectionTitle>
          <Timeline>
            <div className="time-and-place">
              <div className="place">Jakarta, Indonesia</div>
              <div className="time">-</div>
            </div>
            <div className="image">
              <img src={stoqoLogo} alt="company" />
            </div>
            <div className="panel">
              <div className="role">Software Engineering Intern</div>
              <div className="institution">
                <a href={"https://www.stoqo.com/"}>STOQO</a>
              </div>
              <ul>
                <li className="description">
                  STOQO is a B2B platform that aims to streamline the Food &
                  Beverages business supply chain.
                </li>
                <li className="description">Rescinded due to COVID19. </li>
              </ul>
            </div>
          </Timeline>
        </Flex>
      </Container>
    );
  }
}

export default Experience;

const Container = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background-color: pink;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

const SectionTitle = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: bold;
  color: #d6d5ec;
`;

const Timeline = styled.ul`
  display: flex;

  .time-and-place {
    display: flex;
    width: 12%;
    text-align: right;
    flex-direction: column;

    @media screen and (max-width: 900px) {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 10px;
    }
  }

  .role,
  .institution {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;

    @media screen and (max-width: 900px) {
      margin-top: 10px;
      text-align: center;
    }
  }

  .image {
    width: 15%;

    img {
      height: 100px;
      margin-left: auto;
      margin-right: auto;
      display: block;
    }

    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }

  .panel {
    flex: 1;
  }

  .description {
    margin-bottom: 5px;
    text-align: justify;
  }

  .grade {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
    margin-left: 10px;
  }

  @media screen and (max-width: 900px) {
    margin: 0;
    padding: 0;
    flex-direction: column;
  }
`;
