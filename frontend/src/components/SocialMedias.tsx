import React from "react";
import styled from "styled-components";
import { SECONDARY_COLOR, FONT_COLOR } from "../constants/style";

const GITHUB: string = "https://github.com/Andrewfang21/";
const FACEBOOK: string = "https://www.facebook.com/Andrewfanggara21/";
const INSTAGRAM: string = "https://www.instagram.com/andrew_fanggara/";
const LINKEDIN: string = "https://www.linkedin.com/in/andrewfang21/";

interface SocialMediaModel {
  link: string;
  icon: string;
}

const SocialMediaData: SocialMediaModel[] = [
  { link: LINKEDIN, icon: "fa fa-linkedin fa-2x" },
  { link: GITHUB, icon: "fa fa-github fa-2x" },
  { link: FACEBOOK, icon: "fa fa-facebook fa-2x" },
  { link: INSTAGRAM, icon: "fa fa-instagram fa-2x" },
];

class SocialMedias extends React.Component {
  render() {
    return (
      <SocialMedia>
        {Object.values(SocialMediaData).map((data: SocialMediaModel) => (
          <span key={data.icon}>
            <a href={data.link} rel="noopener noreferrer" target="_blank">
              <i className={data.icon} />
            </a>
          </span>
        ))}
      </SocialMedia>
    );
  }
}

export default SocialMedias;

const SocialMedia = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;

  a {
    margin: 5px;
    color: ${FONT_COLOR};

    :hover {
      color: ${SECONDARY_COLOR};
    }
  }
`;
