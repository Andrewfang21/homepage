import React from "react";
import { connect } from "react-redux";
import { Element } from "react-scroll";
import styled from "styled-components";

import LoadingIndicator from "../components/LoadingIndicator";
import { EXPERIENCE_ROUTE } from "../constants/routes";
import { Education, Work } from "../models/Experience";
import { fetchExperiences } from "../redux/actions/Experience";
import { StoreState } from "../redux/reducers";
import { ExperienceState } from "../redux/reducers/Experience";
import { Theme } from "../redux/reducers/Theme";

interface Props {
  experiences: ExperienceState;
  theme: Theme;
  fetchExperiences: Function;
}

class ExperienceContainer extends React.Component<Props> {
  componentDidMount(): void {
    if (!this.props.experiences.isLoaded) {
      this.props.fetchExperiences();
    }
  }

  render() {
    const { educations, works, isLoading } = this.props.experiences;
    const { primaryColor, secondaryColor, fontColor } = this.props.theme;

    return (
      <StyledElement
        name={EXPERIENCE_ROUTE}
        primarycolor={primaryColor}
        fontcolor={fontColor}
      >
        <Container>
          <Flex>
            <div className="header">Educations</div>
            {isLoading && (
              <div className="loading">
                <LoadingIndicator />
              </div>
            )}
            {!isLoading && (
              <div>
                {Object.values(educations).map((education: Education) => (
                  <Timeline key={education.id} secondaryColor={secondaryColor}>
                    <div className="time-and-place">
                      <div className="place">{education.place}</div>
                      <div className="time">{education.time}</div>
                    </div>
                    <div className="image">
                      <img
                        src={education.imageUrl}
                        alt={education.institution}
                      />
                    </div>
                    <div className="panel">
                      <div className="role">{education.role}</div>
                      <div className="institution">
                        <a
                          href={education.institutionUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {education.institution}
                        </a>
                      </div>
                      <div className="grade">{education.grade}</div>
                      <ul>
                        {Object.values(education.descriptions).map(
                          (description: string) => (
                            <li key={description} className="description">
                              {description}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </Timeline>
                ))}
              </div>
            )}
            <div className="header">Work & Voluntary Experiences</div>
            {isLoading && (
              <div className="loading">
                <LoadingIndicator />
              </div>
            )}
            {!isLoading && (
              <div>
                {Object.values(works).map((work: Work) => (
                  <Timeline key={work.id} secondaryColor={secondaryColor}>
                    <div className="time-and-place">
                      <div className="place">{work.place}</div>
                      <div className="time">{work.time}</div>
                    </div>
                    <div className="image">
                      <img src={work.imageUrl} alt={work.company} />
                    </div>
                    <div className="panel">
                      <div className="role">{work.role}</div>
                      <div className="institution">
                        <a
                          href={work.companyUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {work.company}
                        </a>
                      </div>
                      <ul>
                        {Object.values(work.descriptions).map(
                          (description: string) => (
                            <li key={description} className="description">
                              {description}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </Timeline>
                ))}
              </div>
            )}
          </Flex>
        </Container>
      </StyledElement>
    );
  }
}

const mapStateToProps = ({
  experiences,
  theme,
}: StoreState): { experiences: ExperienceState; theme: Theme } => {
  return { experiences, theme };
};

export default connect(mapStateToProps, { fetchExperiences })(
  ExperienceContainer
);

const StyledElement = styled(Element)<{
  primarycolor: string;
  fontcolor: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(props) => props.primarycolor};
  color: ${(props) => props.fontcolor};
`;

const Container = styled.div`
  width: 85%;
  .loading {
    margin-top: 10vh;
    margin-left: 42vw;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  .header {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 2em;
    font-weight: bold;
  }
`;

const Timeline = styled.ul<{ secondaryColor: string }>`
  display: flex;
  .time-and-place {
    display: flex;
    width: 15%;
    text-align: left;
    flex-direction: column;
    @media screen and (max-width: 900px) {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 10px;
      .time {
        text-align: right;
      }
    }
  }
  .role,
  .institution {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
    a {
      color: ${(props) => props.secondaryColor};
    }
    @media screen and (max-width: 900px) {
      margin-top: 10px;
      text-align: center;
    }
  }
  .image {
    width: 15%;
    img {
      height: 80px;
      margin-left: auto;
      margin-right: auto;
      display: block;
    }
    @media screen and (max-width: 900px) {
      width: 100%;
      height: 70px;
      img {
        height: 70px;
      }
    }
  }
  .panel {
    flex: 1;
    ul {
      padding-left: 30px;
      @media screen and (max-width: 900px) {
        padding-left: 10px;
      }
    }
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
    margin-bottom: 2em;
    padding: 0;
    flex-direction: column;
  }
`;
