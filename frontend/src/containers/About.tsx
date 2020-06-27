import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { PRIMARY_COLOR, FONT_COLOR } from "../constants/style";
import { ProfileModel } from "../models/About";
import { ABOUT_ROUTE } from "../constants/routes";

interface AboutProps {
  about: ProfileModel;
}

class About extends React.Component<AboutProps> {
  render() {
    const { about }: { about: ProfileModel } = this.props;

    return (
      <StyledElement name={ABOUT_ROUTE}>
        <Container>
          <Flex>
            <Image>
              <img className="image" src={about.imageUrl} alt={about.name} />
            </Image>
            <Detail>
              <div className="title">About Me</div>
              {Object.values(about.contents).map((content: string) => (
                <div key={content} className="content">
                  {content}
                </div>
              ))}
            </Detail>
          </Flex>
        </Container>
      </StyledElement>
    );
  }
}

export default About;

const StyledElement = styled(Element)`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background-color: ${PRIMARY_COLOR};
  color: ${FONT_COLOR};
`;

const Container = styled.div`
  width: 85%;
`;

const Detail = styled.div`
  width: 100%;

  .title {
    padding: 50px 0px 20px 0px;
    font-weight: bold;
    font-size: 40px;

    @media screen and (max-width: 900px) {
      text-align: center;
      padding-top: 0px;
    }
  }

  .content {
    padding-left: 20px;
    margin-bottom: 30px;
    text-align: justify;
    color: ${FONT_COLOR};

    @media screen and (max-width: 900px) {
      padding-left: 0px;
    }
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
      margin-bottom: 30px;
      display: block;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
