import React from "react";
import { connect } from "react-redux";
import { Element } from "react-scroll";
import Typing from "react-typing-animation";
import styled from "styled-components";

import LoadingIndicator from "../components/LoadingIndicator";
import SocialMedias from "../components/SocialMedias";
import ProfileModel from "../models/Profile";

import { PRIMARY_COLOR, FONT_COLOR } from "../constants/style";
import { HOME_ROUTE } from "../constants/routes";
import { ProfileActionModel } from "../redux/reducers/Profile";
import { StoreState } from "../redux/reducers";
import { fetchProfile } from "../redux/actions/Profile";

interface ProfileProps {
  profile: ProfileActionModel;
  fetchProfile: Function;
}

class Home extends React.Component<ProfileProps> {
  componentDidMount(): void {
    if (!this.props.profile.loaded) {
      this.props.fetchProfile();
    }
  }

  render() {
    const {
      profile,
      loading,
    }: { profile: ProfileModel; loading: boolean } = this.props.profile;

    return (
      <StyledElement name={HOME_ROUTE}>
        {loading && <LoadingIndicator />}
        {!loading && (
          <Container>
            <Typing cursorClassName="cursor" loop>
              <Typing.Delay ms={1000} />
              <span className="name">{profile.name}</span>
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={profile.name.length} />
            </Typing>
            <div className="description">{profile.message}</div>
            <SocialMedias />
          </Container>
        )}
      </StyledElement>
    );
  }
}

const mapStateToProps = ({
  profile,
}: StoreState): { profile: ProfileActionModel } => {
  return { profile };
};

export default connect(mapStateToProps, { fetchProfile })(Home);

const StyledElement = styled(Element)`
  height: 100vh;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${PRIMARY_COLOR};
  color: ${FONT_COLOR};
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin: auto;

  .name {
    font-weight: bold;
    font-size: 50px;
    margin-bottom: 10px;
    text-align: center;
  }

  .description {
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
  }

  .cursor {
    color: ${FONT_COLOR};
  }
`;
