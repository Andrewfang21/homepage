import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Element } from "react-scroll";
import { connect } from "react-redux";
import styled from "styled-components";

import LoadingIndicator from "../components/LoadingIndicator";
import Achievement from "../models/Achievement";
import { ACHIEVEMENT_ROUTE } from "../constants/routes";
import { fetchAchievements } from "../redux/actions/Achievement";
import { StoreState } from "../redux/reducers";
import { AchievementState } from "../redux/reducers/Achievement";
import { Theme } from "../redux/reducers/Theme";

interface Props {
  achievements: AchievementState;
  theme: Theme;
  fetchAchievements: Function;
}

class AchievementContainer extends React.Component<Props> {
  componentDidMount(): void {
    if (!this.props.achievements.isLoaded) {
      this.props.fetchAchievements();
    }
  }

  render() {
    const { achievements, isLoading } = this.props.achievements;
    const { primaryColor, fontColor } = this.props.theme;

    return (
      <StyledElement
        name={ACHIEVEMENT_ROUTE}
        primarycolor={primaryColor}
        fontcolor={fontColor}
      >
        <Container>
          <div className="header">Achievements</div>
          {isLoading && (
            <div className="loading">
              <LoadingIndicator />
            </div>
          )}
          {!isLoading && (
            <div>
              {Object.values(achievements).map((achievement: Achievement) => (
                <div key={achievement.id} className="achievement">
                  <div className="image">
                    <img
                      src={achievement.imageUrl}
                      alt={achievement.organizer}
                    />
                  </div>
                  <div className="detail">
                    <div className="title-and-time">
                      <span className="title">{achievement.title}</span>
                      <span className="desktop-time">{achievement.time}</span>
                    </div>
                    <div className="organizer">{achievement.organizer}</div>
                    <div className="mobile-time">{achievement.time}</div>
                    <div className="descriptions">
                      {ReactHtmlParser(achievement.descriptions)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </StyledElement>
    );
  }
}

const mapStateToProps = ({
  achievements,
  theme,
}: StoreState): { achievements: AchievementState; theme: Theme } => {
  return { achievements, theme };
};

export default connect(mapStateToProps, { fetchAchievements })(
  AchievementContainer
);

const StyledElement = styled(Element)<{
  primarycolor: string;
  fontcolor: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background-color: ${(props) => props.primarycolor};
  color: ${(props) => props.fontcolor};
`;

const Container = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  .header {
    margin: 30px 0;
    font-size: 2em;
    font-weight: bold;
  }
  .loading {
    margin-top: 10vh;
    margin-left: 42vw;
  }
  .achievement {
    display: flex;
    flex-direction: row;
    .detail {
      width: 100%;
      flex-direction: column;
      margin-bottom: 20px;
      text-align: justify;
    }
    .organizer {
      margin-top: 5px;
      font-weight: bold;
      @media screen and (max-width: 900px) {
        text-align: center;
      }
    }
    .mobile-time {
      display: none;
      margin-bottom: 10px;
    }
    @media screen and (max-width: 900px) {
      flex-direction: column;
      .descriptions {
        padding-left: 10px;
      }
      .description {
        margin: 5px 0;
      }
      .mobile-time {
        display: flex;
        margin-top: 5px;
        justify-content: center;
      }
    }
  }
  .image {
    margin: 0 20px 0 20px;
    img {
      width: 150px;
    }
    @media screen and (max-width: 900px) {
      margin: auto;
      margin-bottom: 20px;
    }
  }
  .title-and-time {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    .title {
      font-weight: bold;
      font-size: 1.5em;
      text-align: center;
    }
    @media screen and (max-width: 900px) {
      justify-content: center;
      .desktop-time {
        display: none;
      }
    }
  }
`;
