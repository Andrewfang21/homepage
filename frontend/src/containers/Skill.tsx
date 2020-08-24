import React from "react";
import { connect } from "react-redux";
import { Element } from "react-scroll";
import styled from "styled-components";

import LoadingIndicator from "../components/LoadingIndicator";
import Skill from "../models/Skill";
import { SKILL_ROUTE } from "../constants/routes";
import { fetchSkills } from "../redux/actions/Skill";
import { StoreState } from "../redux/reducers";
import { SkillState } from "../redux/reducers/Skill";
import { Theme } from "../redux/reducers/Theme";

interface Props {
  skills: SkillState;
  theme: Theme;
  fetchSkills: Function;
}

const skillCategories: string[] = [
  "Experienced",
  "Familiar",
  "Proficient",
  "Methods",
  "Languages",
];

class SkillContainer extends React.Component<Props> {
  componentDidMount(): void {
    if (!this.props.skills.isLoaded) {
      this.props.fetchSkills();
    }
  }

  render() {
    const { skills, isLoading } = this.props.skills;
    const { primaryColor, secondaryColor, fontColor } = this.props.theme;

    return (
      <StyledElement
        name={SKILL_ROUTE}
        primarycolor={primaryColor}
        fontcolor={fontColor}
      >
        <Container>
          <div className="header">Skills</div>
          {isLoading && (
            <div className="loading">
              <LoadingIndicator />
            </div>
          )}
          {!isLoading && (
            <Skills secondarycolor={secondaryColor}>
              {skillCategories.map((category: string) => (
                <div className="skill-section" key={category}>
                  <div className="section-title">{category}</div>
                  {Object.values(skills).map((skill: Skill) => (
                    <div className="section-content" key={skill.id}>
                      {skill.label === category && skill.name}
                    </div>
                  ))}
                </div>
              ))}
            </Skills>
          )}
        </Container>
      </StyledElement>
    );
  }
}

const mapStateToProps = ({
  skills,
  theme,
}: StoreState): { skills: SkillState; theme: Theme } => {
  return { skills, theme };
};

export default connect(mapStateToProps, { fetchSkills })(SkillContainer);

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
    margin: 30px 0;
    width: 85%;
    font-size: 2em;
    font-weight: bold;
  }
  .loading {
    margin-top: 10vh;
    margin-left: 42vw;
  }
`;

const Skills = styled.div<{ secondarycolor: string }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1em;
  .skill-section {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: start;
    align-items: flex-start;
    margin-bottom: 2rem;
    .section-title {
      font-weight: bold;
      font-size: 1.5em;
      color: ${(props) => props.secondarycolor};
    }
    .section-content {
      padding-left: 1em;
    }
  }
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;
