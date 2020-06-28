import React from "react";
import { connect } from "react-redux";
import { Element } from "react-scroll";
import styled from "styled-components";
import { EXPERIENCE_ROUTE } from "../constants/routes";
import { PRIMARY_COLOR, SECONDARY_COLOR, FONT_COLOR } from "../constants/style";
import {
  ExperienceModel,
  EducationModel,
  WorkModel,
} from "../models/Experience";
import { fetchExperiences } from "../redux/actions/Experience";
import { StoreState } from "../redux/reducers";

interface ExperienceProps {
  experiences: ExperienceModel;
  fetchExperiences: Function;
}

interface ExperienceState {
  fetching: boolean;
}

class Experience extends React.Component<ExperienceProps, ExperienceState> {
  constructor(props: ExperienceProps) {
    super(props);
    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: ExperienceProps): void {
    const hasLoaded: boolean =
      prevProps.experiences.educations.length === 0 &&
      prevProps.experiences.works.length === 0 &&
      this.props.experiences.educations.length !== 0 &&
      this.props.experiences.works.length !== 0;

    if (hasLoaded) {
      this.setState({ fetching: false });
    }
  }

  componentDidMount(): void {
    this.setState({ fetching: true });
    this.props.fetchExperiences();
  }

  render() {
    const { experiences }: { experiences: ExperienceModel } = this.props;

    return (
      <StyledElement name={EXPERIENCE_ROUTE}>
        {this.state.fetching ? "LOADING" : null}
        <Container>
          <Flex>
            <div className="header">Education</div>
            {Object.values(experiences.educations).map(
              (education: EducationModel) => (
                <Timeline key={education.id}>
                  <div className="time-and-place">
                    <div className="place">{education.place}</div>
                    <div className="time">{education.time}</div>
                  </div>
                  <div className="image">
                    <img src={education.imageUrl} alt={education.institution} />
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
              )
            )}
            <div className="header">Work and Voluntary Experiences</div>
            {Object.values(experiences.works).map((work: WorkModel) => (
              <Timeline key={work.id}>
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
          </Flex>
        </Container>
      </StyledElement>
    );
  }
}

const mapStateToProps = ({
  experiences,
}: StoreState): { experiences: ExperienceModel } => {
  return { experiences };
};

export default connect(mapStateToProps, { fetchExperiences })(Experience);

const StyledElement = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: ${PRIMARY_COLOR};
  color: ${FONT_COLOR};
`;

const Container = styled.div`
  width: 85%;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 40px;
    font-weight: bold;
  }
`;

const Timeline = styled.ul`
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
    }
  }

  .role,
  .institution {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;

    a {
      color: ${SECONDARY_COLOR};
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
