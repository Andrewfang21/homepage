import React from "react";
import { connect } from "react-redux";
import { Element } from "react-scroll";
import styled from "styled-components";

import { SKILL_ROUTE } from "../constants/routes";
import { PRIMARY_COLOR, FONT_COLOR, SECONDARY_COLOR } from "../constants/style";
import { SkillModel } from "../models/Skill";
import { fetchSkills } from "../redux/actions/Skill";
import { StoreState } from "../redux/reducers";
import { SkillActionModel } from "../redux/reducers/Skill";

interface SkillProps {
  skills: SkillActionModel;
  fetchSkills: Function;
}

interface SkillState {
  collapsed: boolean;
}

class Skill extends React.Component<SkillProps, SkillState> {
  constructor(props: SkillProps) {
    super(props);
    this.state = { collapsed: true };
  }

  componentDidMount() {
    if (!this.props.skills.loaded) {
      this.props.fetchSkills();
    }

    setTimeout(() => {
      this.setState({ collapsed: false });
    }, 1000);
  }

  render() {
    const { collapsed }: { collapsed: boolean } = this.state;
    const { skills }: { skills: SkillModel[] } = this.props.skills;

    return (
      <StyledElement name={SKILL_ROUTE}>
        <Container className={`container ${collapsed ? "collapsed" : ""} `}>
          <div className="header">Skills</div>
          <Skills>
            {Object.values(skills).map((skill: SkillModel) => (
              <li key={skill.name} style={{ width: `${skill.level}%` }}>
                <p>{skill.name}</p>
                <span>{skill.level}</span>
              </li>
            ))}
          </Skills>
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
    font-size: 40px;
    font-weight: bold;
  }
`;

const Skills = styled.ul`
  margin: 0 30px 5vh 30px;
  padding: 0;

  li {
    display: block;
    position: relative;
    background-color: #888;
    color: #fff;
    margin: 10px 0;
    transition: width 300ms ease-in-out;

    background-color: ${SECONDARY_COLOR};

    .collapsed & {
      width: 0 !important;
    }

    p {
      padding: 10px;
      margin: 0;
      font-weight: bold;
    }
    span {
      position: absolute;
      right: 10px;
      display: inline-block;
      width: 30px;
      top: 11px;
      text-align: right;
      font-weight: normal;
      color: #fff;
      font-size: 11px;
    }
  }
`;
