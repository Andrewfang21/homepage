import React from "react";
import { connect } from "react-redux";
import { Element } from "react-scroll";
import styled from "styled-components";

import LoadingIndicator from "../components/LoadingIndicator";
import SocialMedias from "../components/SocialMedias";
import { HOME_ROUTE } from "../constants/routes";
import { ProfileState } from "../redux/reducers/Profile";
import { StoreState } from "../redux/reducers";
import { fetchProfile } from "../redux/actions/Profile";
import { Theme } from "../redux/reducers/Theme";

interface Props {
  profile: ProfileState;
  theme: Theme;
  fetchProfile: Function;
}

class Home extends React.Component<Props> {
  componentDidMount(): void {
    if (!this.props.profile.isLoaded) {
      this.props.fetchProfile();
    }
  }

  render() {
    const { profile, isLoading } = this.props.profile;
    const { primaryColor, fontColor } = this.props.theme;

    return (
      <StyledElement name={HOME_ROUTE} primarycolor={primaryColor}>
        {isLoading && <LoadingIndicator />}
        {!isLoading && (
          <Container fontcolor={fontColor}>
            <span className="name">{profile.name}</span>
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
  theme,
}: StoreState): { profile: ProfileState; theme: Theme } => {
  return { profile, theme };
};

export default connect(mapStateToProps, { fetchProfile })(Home);

const StyledElement = styled(Element)<{ primarycolor: string }>`
  height: 100vh;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.primarycolor};
`;

const Container = styled.div<{ fontcolor: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin: auto;
  color: ${(props) => props.fontcolor};
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
`;
