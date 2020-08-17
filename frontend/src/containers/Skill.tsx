import React from "react";
import { connect } from "react-redux";
import { Element } from "react-scroll";
import styled from "styled-components";

import LoadingIndicator from "../components/LoadingIndicator";
import SkillModel from "../models/Skill";

import { SKILL_ROUTE } from "../constants/routes";
import { PRIMARY_COLOR, FONT_COLOR, SECONDARY_COLOR } from "../constants/style";
import { fetchSkills } from "../redux/actions/Skill";
import { StoreState } from "../redux/reducers";
import { SkillActionModel } from "../redux/reducers/Skill";

interface SkillProps {
  skills: SkillActionModel;
  fetchSkills: Function;
}

const skillCategories: string[] = [
  "Experienced",
  "Familiar",
  "Proficient",
  "Methods",
  "Languages",
];

class Skill extends React.Component<SkillProps> {
  componentDidMount() {
    if (!this.props.skills.loaded) {
      this.props.fetchSkills();
    }
  }

  render() {
    const {
      skills,
      loading,
    }: { skills: SkillModel[]; loading: boolean } = this.props.skills;

    return (
      <StyledElement name={SKILL_ROUTE}>
        <Container>
          <div className="header">Skills</div>
          {loading && (
            <div className="loading">
              <LoadingIndicator />
            </div>
          )}
          {!loading && (
            <Skills>
              {skillCategories.map((category: string) => (
                <SkillSection>
                  <div className="section-title">{category}</div>
                  {Object.values(skills).map((skill: SkillModel) => (
                    <div className="section-content">
                      {skill.label === category && skill.name}
                    </div>
                  ))}
                </SkillSection>
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
}: StoreState): { skills: SkillActionModel } => {
  return { skills };
};

export default connect(mapStateToProps, { fetchSkills })(Skill);

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

const Skills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1em;

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: start;
  align-items: flex-start;
  margin-bottom: 2rem;

  .section-title {
    font-weight: bold;
    font-size: 1.5em;
    color: ${SECONDARY_COLOR};
  }

  .section-content {
    padding-left: 1em;
  }
`;
