import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatar-image.jpg";

class About extends React.Component {
  render() {
    return (
      <Container>
        <Flex>
          <Image>
            <img className="image" src={avatarImage} alt="avatar" />
          </Image>
          <Detail>
            <div className="title">About Me</div>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Facilisis volutpat est velit egestas. Odio euismod lacinia at quis
              risus sed vulputate. Volutpat sed cras ornare arcu dui vivamus
              arcu felis. Vestibulum lorem sed risus ultricies tristique nulla
              aliquet enim tortor. Volutpat odio facilisis mauris sit. Ut ornare
              lectus sit amet est placerat. Elementum tempus egestas sed sed
              risus. Placerat duis ultricies lacus sed turpis. Ut tellus
              elementum sagittis vitae et leo. Massa id neque aliquam vestibulum
              morbi blandit cursus risus.
            </div>
            <div className="content">
              Consequat nisl vel pretium lectus quam id leo. Lacinia quis vel
              eros donec ac odio. A cras semper auctor neque vitae tempus quam
              pellentesque nec. Porttitor lacus luctus accumsan tortor posuere
              ac ut consequat semper. Lectus quam id leo in vitae turpis massa
              sed. Enim sit amet venenatis urna cursus eget nunc scelerisque.
              Scelerisque fermentum dui faucibus in. Dictum at tempor commodo
              ullamcorper a. Sed velit dignissim sodales ut eu sem integer vitae
              justo. Amet commodo nulla facilisi nullam. Dolor sit amet
              consectetur adipiscing elit. Non enim praesent elementum facilisis
              leo. Turpis in eu mi bibendum neque egestas congue quisque
              egestas. Venenatis urna cursus eget nunc scelerisque viverra.
              Gravida neque convallis a cras semper auctor neque vitae tempus. A
              erat nam at lectus. Amet nulla facilisi morbi tempus iaculis.
            </div>
          </Detail>
        </Flex>
      </Container>
    );
  }
}

export default About;

const Detail = styled.div`
  width: 100%;

  .title {
    padding: 50px 0px 20px 0px;
    font-weight: bold;
    font-size: 30px;

    @media screen and (max-width: 900px) {
      text-align: center;
      padding-top: 0px;
    }
  }

  .content {
    padding-left: 20px;
    margin-bottom: 30px;
    text-align: justify;
  }
`;

const Image = styled.div`
  .image {
    position: relative;
    display: block;
    margin: 50px 50px 50px 0px;
    width: 150px;
    height: 150px;
    border-radius: 50%;

    @media screen and (max-width: 900px) {
      margin-left: auto;
      margin-right: auto;
      display: block;
    }
  }
`;

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
  flex-direction: row;
  width: 85%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
