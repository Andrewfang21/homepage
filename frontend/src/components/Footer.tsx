import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { StoreState } from "../redux/reducers";
import { Theme } from "../redux/reducers/Theme";

interface Props {
  theme: Theme;
}

class Footer extends React.Component<Props> {
  render() {
    const { secondaryColor, fontColor } = this.props.theme;

    return (
      <Container secondarycolor={secondaryColor} fontcolor={fontColor}>
        <div>
          Copyright &copy; {new Date().getFullYear()} All rights reserved | This
          site is made with 💙 by Andrew Fanggara
        </div>
      </Container>
    );
  }
}

const mapStateToProps = ({ theme }: StoreState): { theme: Theme } => {
  return { theme };
};

export default connect(mapStateToProps, {})(Footer);

const Container = styled.div<{ secondarycolor: string; fontcolor: string }>`
  width: 100%;
  min-height: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${(props) => props.fontcolor};
  justify-content: center;
  background-color: ${(props) => props.secondarycolor};
  div {
    padding: 20px;
  }
`;
