import React from "react";
import { connect } from "react-redux";
import { Element } from "react-scroll";
import styled from "styled-components";

import LoadingIndicator from "../components/LoadingIndicator";
import ProfileModel from "../models/Profile";

import { PROFILE_ROUTE } from "../constants/routes";
import { PRIMARY_COLOR, FONT_COLOR } from "../constants/style";
import { getProfile } from "../redux/actions/Profile";
import { StoreState } from "../redux/reducers";
import { ProfileActionModel } from "../redux/reducers/Profile";

interface ProfileProps {
  profile: ProfileActionModel;
  getProfile: Function;
}

class Profile extends React.Component<ProfileProps> {
  componentDidMount(): void {
    if (this.props.profile.loaded) {
      this.props.getProfile();
    }
  }

  render() {
    const {
      profile,
      loading,
    }: { profile: ProfileModel; loading: boolean } = this.props.profile;

    return (
      <StyledElement name={PROFILE_ROUTE}>
        <Container>
          {loading && (
            <div className="loading">
              <LoadingIndicator />
            </div>
          )}
          {!loading && (
            <Flex>
              <Image>
                <img
                  className="image"
                  src={profile.imageUrl}
                  alt={profile.name}
                />
              </Image>
              <Detail>
                <div className="title">About Me</div>
                {Object.values(profile.descriptions).map(
                  (description: string) => (
                    <div key={description} className="description">
                      {description}
                    </div>
                  )
                )}
              </Detail>
            </Flex>
          )}
        </Container>
      </StyledElement>
    );
  }
}

const mapStateToProps = ({
  profile,
}: StoreState): { profile: ProfileActionModel } => {
  return { profile };
};

export default connect(mapStateToProps, { getProfile })(Profile);

const StyledElement = styled(Element)`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background-color: ${PRIMARY_COLOR};
  color: ${FONT_COLOR};
`;

const Container = styled.div`
  width: 85%;

  .loading {
    margin-top: 10vh;
    margin-left: 42vw;
  }
`;

const Detail = styled.div`
  width: 100%;

  .title {
    padding: 50px 0px 20px 0px;
    font-weight: bold;
    font-size: 2em;

    @media screen and (max-width: 900px) {
      text-align: center;
      padding-top: 0px;
    }
  }

  .description {
    padding-left: 20px;
    margin-bottom: 30px;
    text-align: justify;
    color: ${FONT_COLOR};

    @media screen and (max-width: 900px) {
      padding-left: 0px;
    }
  }
`;

const Image = styled.div`
  .image {
    position: relative;
    display: block;
    margin: 50px 50px 50px 0px;
    width: 150px;
    height: 150px;
    border-radius: 50%;

    @media screen and (max-width: 900px) {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
      display: block;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
