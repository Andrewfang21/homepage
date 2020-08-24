import React from "react";
import { connect } from "react-redux";
import { Element } from "react-scroll";
import styled from "styled-components";

import LoadingIndicator from "../components/LoadingIndicator";
import { PROFILE_ROUTE } from "../constants/routes";
import { getProfile } from "../redux/actions/Profile";
import { StoreState } from "../redux/reducers";
import { ProfileState } from "../redux/reducers/Profile";
import { Theme } from "../redux/reducers/Theme";

interface Props {
  profile: ProfileState;
  theme: Theme;
  getProfile: Function;
}

class ProfileContainer extends React.Component<Props> {
  componentDidMount(): void {
    if (this.props.profile.isLoaded) {
      this.props.getProfile();
    }
  }

  render() {
    const { profile, isLoading } = this.props.profile;
    const { primaryColor, fontColor } = this.props.theme;

    return (
      <StyledElement
        name={PROFILE_ROUTE}
        primarycolor={primaryColor}
        fontcolor={fontColor}
      >
        <Container>
          {isLoading && (
            <div className="loading">
              <LoadingIndicator />
            </div>
          )}
          {!isLoading && (
            <Flex>
              <Image>
                <img
                  className="image"
                  src={profile.imageUrl}
                  alt={profile.name}
                />
              </Image>
              <Detail fontcolor={fontColor}>
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
  theme,
}: StoreState): { profile: ProfileState; theme: Theme } => {
  return { profile, theme };
};

export default connect(mapStateToProps, { getProfile })(ProfileContainer);

const StyledElement = styled(Element)<{
  primarycolor: string;
  fontcolor: string;
}>`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
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

const Detail = styled.div<{ fontcolor: string }>`
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
    color: ${(props) => props.fontcolor};
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
