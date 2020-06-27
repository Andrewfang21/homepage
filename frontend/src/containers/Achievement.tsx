import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { ACHIEVEMENT_ROUTE } from "../constants/routes";
import { PRIMARY_COLOR, FONT_COLOR } from "../constants/style";
import { AchievementModel } from "../models/Achievement";

interface AchievementProps {
  achievements: AchievementModel[];
}

class Achievement extends React.Component<AchievementProps> {
  render() {
    const { achievements }: { achievements: AchievementModel[] } = this.props;

    return (
      <StyledElement name={ACHIEVEMENT_ROUTE}>
        <Container>
          <div className="header">Achievements</div>
          {Object.values(achievements).map((achievement: AchievementModel) => (
            <div key={achievement.id} className="achievement">
              <div className="image">
                <img src={achievement.image} alt={achievement.time} />
              </div>
              <div className="detail">
                <div className="title-and-time">
                  <span className="title">{achievement.title}</span>
                  <span className="desktop-time">{achievement.time}</span>
                </div>
                <div className="organizer">{achievement.organizer}</div>
                <div className="mobile-time">{achievement.time}</div>
                <ul>
                  {Object.values(achievement.descriptions).map(
                    (description: string) => (
                      <li key={description} className="description">
                        {description}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </Container>
      </StyledElement>
    );
  }
}

export default Achievement;

const StyledElement = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background-color: ${PRIMARY_COLOR};
  color: ${FONT_COLOR};
`;

const Container = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;

  .header {
    margin: 30px 0;
    font-size: 40px;
    font-weight: bold;
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