import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { ProjectModel } from "../models/Project";
import { PROJECT_ROUTE } from "../constants/routes";
import { PRIMARY_COLOR, SECONDARY_COLOR, FONT_COLOR } from "../constants/style";

interface ProjectProps {
  projects: ProjectModel[];
}

class Project extends React.Component<ProjectProps> {
  render() {
    const { projects }: { projects: ProjectModel[] } = this.props;

    return (
      <StyledElement name={PROJECT_ROUTE}>
        <Container>
          <div className="header">Projects</div>
          {Object.values(projects).map((project: ProjectModel) => (
            <Detail key={project.id}>
              <div className="title">
                {project.title}
                <span className="github">
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </span>
              </div>
              <div className="image">
                {Object.values(project.images).map((image: string) => (
                  <img key={image} src={image} alt="{project.title}-1" />
                ))}
              </div>
              <ul className="descriptions">
                {Object.values(project.descriptions).map(
                  (description: string) => (
                    <li key={description}>{description}</li>
                  )
                )}
                <li className="tech-stack">
                  <span>Tech Stacks: </span>
                  {Object.values(project.techStacks.join(", "))}
                </li>
              </ul>
            </Detail>
          ))}
        </Container>
      </StyledElement>
    );
  }
}

export default Project;

const StyledElement = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${PRIMARY_COLOR};
  color: ${FONT_COLOR};
`;

const Container = styled.div`
  width: 85%;

  .header {
    margin: 3vh 0;
    width: 85%;
    font-size: 40px;
    font-weight: bold;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  .title {
    font-weight: bold;
    font-size: 30px;
    margin: 0.5em 0;
    align-self: center;

    .github {
      vertical-align: middle;
      margin-left: 10px;

      a {
        color: ${FONT_COLOR};

        :hover {
          color: ${SECONDARY_COLOR};
        }
      }
    }
  }

  .image {
    display: flex;
    justify-content: center;

    img {
      height: 200px;
      margin: 0 1em;

      @media screen and (max-width: 900px) {
        height: 100px;
      }
    }
  }

  .descriptions {
    display: flex;
    flex-direction: column;
    text-align: justify;

    .tech-stack {
      font-weight: bold;
      font-size: 1em;
    }

    @media screen and (min-width: 900px) {
      align-items: center;

      li {
        width: 75%;
        margin: 3px;
      }
    }
  }
`;
