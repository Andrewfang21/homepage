import React from "react";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";
import { Element } from "react-scroll";
import styled from "styled-components";

import LoadingIndicator from "../components/LoadingIndicator";
import { PROJECT_ROUTE } from "../constants/routes";
import Project from "../models/Project";
import { fetchProjects } from "../redux/actions/Project";
import { StoreState } from "../redux/reducers";
import { ProjectState } from "../redux/reducers/Project";
import { Theme } from "../redux/reducers/Theme";

interface Props {
  projects: ProjectState;
  theme: Theme;
  fetchProjects: Function;
}

class ProjectContainer extends React.Component<Props> {
  componentDidMount(): void {
    if (!this.props.projects.isLoaded) {
      this.props.fetchProjects();
    }
  }

  render() {
    const { projects, isLoading } = this.props.projects;
    const { primaryColor, secondaryColor, fontColor } = this.props.theme;

    return (
      <StyledElement
        name={PROJECT_ROUTE}
        primarycolor={primaryColor}
        fontcolor={fontColor}
      >
        <Container>
          <div className="header">Projects</div>
          {isLoading && (
            <div className="loading">
              <LoadingIndicator />
            </div>
          )}
          {!isLoading && (
            <div>
              {Object.values(projects).map((project: Project) => (
                <Detail
                  key={project.id}
                  secondarycolor={secondaryColor}
                  fontcolor={fontColor}
                >
                  <div className="title">
                    {project.title}
                    <span className="link">
                      <a
                        href={project.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </span>
                    {project.demoUrl != null && (
                      <span className="link">
                        <a
                          href={project.demoUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </span>
                    )}
                  </div>
                  <div className="image">
                    {project.imageUrls != null &&
                      Object.values(project.imageUrls).map((image: string) => (
                        <img key={image} src={image} alt={project.title} />
                      ))}
                  </div>
                  <div className="descriptions">
                    {ReactHtmlParser(project.descriptions)}
                  </div>
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
  theme,
}: StoreState): { projects: ProjectState; theme: Theme } => {
  return { projects, theme };
};

export default connect(mapStateToProps, { fetchProjects })(ProjectContainer);

const StyledElement = styled(Element)<{
  primarycolor: string;
  fontcolor: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.primarycolor};
  color: ${(props) => props.fontcolor};
`;

const Container = styled.div`
  width: 85%;
  .header {
    margin: 3vh 0;
    width: 85%;
    font-size: 2em;
    font-weight: bold;
  }
  .loading {
    margin-top: 10vh;
    margin-left: 42vw;
  }
`;

const Detail = styled.div<{ secondarycolor: string; fontcolor: string }>`
  display: flex;
  flex-direction: column;
  align-content: center;
  .title {
    font-weight: bold;
    font-size: 1.5em;
    margin: 0.5em 0;
    align-self: center;
    .link {
      vertical-align: middle;
      margin-left: 15px;
      a {
        color: ${(props) => props.fontcolor};
        :hover {
          color: ${(props) => props.secondarycolor};
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
  .descriptions > ul {
    display: flex;
    flex-direction: column;
    text-align: justify;
    .tag {
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
