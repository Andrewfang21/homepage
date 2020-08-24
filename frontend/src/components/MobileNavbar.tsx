import React from "react";
import { connect } from "react-redux";
import { Link } from "react-scroll";
import styled from "styled-components";

import { links, PageDetails } from "../constants/scrollLinks";
import { StoreState } from "../redux/reducers";
import { Theme } from "../redux/reducers/Theme";

interface Props {
  theme: Theme;
}
interface State {
  open: boolean;
}

class MobileNavbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { open: false };
  }

  toggleHamburger(): void {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { fontColor } = this.props.theme;
    const { open } = this.state;
    return (
      <Container>
        <StyledNavbar
          open={open}
          onClick={() => this.toggleHamburger()}
          fontcolor={fontColor}
        >
          <Hamburger />
        </StyledNavbar>
        <Links open={this.state.open} fontcolor={fontColor}>
          {Object.values(links).map((link: PageDetails) => (
            <Link
              className="link"
              key={link.to}
              to={link.to}
              spy
              smooth
              duration={500}
              onClick={() => this.toggleHamburger()}
            >
              {link.text}
            </Link>
          ))}
        </Links>
      </Container>
    );
  }
}

class Hamburger extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div />
        <div />
        <div />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ theme }: StoreState): { theme: Theme } => {
  return { theme };
};

export default connect(mapStateToProps, {})(MobileNavbar);

const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: rgb(55, 56, 59, 0.5);
  position: fixed;
  z-index: 1000;
  @media screen and (min-width: 901px) {
    display: none;
  }
`;

const StyledNavbar = styled.div<{ open: boolean; fontcolor: string }>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.fontcolor};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.open ? "translateX(100%)" : "translateX(0)"};
      opacity: ${(props) => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;

const Links = styled.ul<{ open: boolean; fontcolor: string }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-block-start: 0;
  @media (max-width: 900px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 4.5rem;
    transition: transform 0.3s ease-in-out;
    .link {
      color: ${(props) => props.fontcolor};
      padding: 18px 30px;
      text-align: right;
      font-weight: bold;
      font-size: 20px;
    }
  }
`;
