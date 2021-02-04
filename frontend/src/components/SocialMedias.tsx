import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { StoreState } from "../redux/reducers";
import { Theme } from "../redux/reducers/Theme";

const GITHUB: string = "https://github.com/Andrewfang21/";
const FACEBOOK: string = "https://www.facebook.com/Andrewfanggara21/";
const INSTAGRAM: string = "https://www.instagram.com/andrew_fanggara/";
const LINKEDIN: string = "https://www.linkedin.com/in/andrewfang21/";
const EMAIL: string = "mailto:Andrewfanggara21@gmail.com";
const TRANSCRIPT: string = "https://drive.google.com/file/d/1nuG5W3h6l9nHxXe1E1Q8DoWusj9mBuGP/view?usp=sharing";

interface SocialMedia {
  link: string;
  icon: string;
}

const SocialMediaData: SocialMedia[] = [
  { link: LINKEDIN, icon: "fa fa-linkedin fa-2x" },
  { link: GITHUB, icon: "fa fa-github fa-2x" },
  { link: FACEBOOK, icon: "fa fa-facebook fa-2x" },
  { link: INSTAGRAM, icon: "fa fa-instagram fa-2x" },
  { link: EMAIL, icon: "fa fa-envelope fa-2x" },
  { link: TRANSCRIPT, icon: "fa fa-file fa-2x" },
];

interface Props {
  theme: Theme;
}

class SocialMedias extends React.Component<Props> {
  render() {
    const { secondaryColor, fontColor } = this.props.theme;
    return (
      <SocialMediaList secondarycolor={secondaryColor} fontcolor={fontColor}>
        {Object.values(SocialMediaData).map((data: SocialMedia) => (
          <span key={data.icon}>
            <a href={data.link} rel="noopener noreferrer" target="_blank">
              <i className={data.icon} />
            </a>
          </span>
        ))}
      </SocialMediaList>
    );
  }
}

const mapStateToProps = ({ theme }: StoreState): { theme: Theme } => {
  return { theme };
};

export default connect(mapStateToProps, {})(SocialMedias);

const SocialMediaList = styled.div<{
  secondarycolor: string;
  fontcolor: string;
}>`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  a {
    margin: 5px;
    color: ${(props) => props.fontcolor};
    :hover {
      color: ${(props) => props.secondarycolor};
    }
  }
`;
