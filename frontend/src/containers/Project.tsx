import React from "react";
import { connect } from "react-redux";
import { Element } from "react-scroll";
import styled from "styled-components";

import LoadingIndicator from "../components/LoadingIndicator";

import { PROJECT_ROUTE } from "../constants/routes";
import { PRIMARY_COLOR, SECONDARY_COLOR, FONT_COLOR } from "../constants/style";
import ProjectModel from "../models/Project";
import { fetchProjects } from "../redux/actions/Project";
import { StoreState } from "../redux/reducers";
import { ProjectActionModel } from "../redux/reducers/Project";

interface ProjectProps {
  projects: ProjectActionModel;
  fetchProjects: Function;
}

class Project extends React.Component<ProjectProps> {
  componentDidMount(): void {
    if (!this.props.projects.loaded) {
      this.props.fetchProjects();
    }
  }

  render() {
    const {
      projects,
      loading,
    }: { projects: ProjectModel[]; loading: boolean } = this.props.projects;

    return (
      <StyledElement name={PROJECT_ROUTE}>
        <Container>
          <div className="header">Projects</div>
          {loading && (
            <div className="loading">
              <LoadingIndicator />
            </div>
          )}
          {!loading && (
            <div>
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
                    {project.imageUrls != null &&
                      Object.values(project.imageUrls).map((image: string) => (
                        <img key={image} src={image} alt={project.title} />
                      ))}
                  </div>
                  <ul className="descriptions">
                    {Object.values(project.descriptions).map(
                      (description: string) => (
                        <li key={description}>{description}</li>
                      )
                    )}
                    <li className="tech-stack">
                      <span>Tech Stacks: {project.techStack}</span>
                    </li>
                  </ul>
                </Detail>
              ))}
            </div>
          )}
        </Container>
      </StyledElement>
    );
  }
}

const mapStateToProps = ({
  projects,
}: StoreState): { projects: ProjectActionModel } => {
  return { projects };
};

export default connect(mapStateToProps, { fetchProjects })(Project);

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

  .loading {
    margin-top: 10vh;
    margin-left: 42vw;
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

    @media screen and (max-width: 900px) {
      padding-left: 10px;
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
