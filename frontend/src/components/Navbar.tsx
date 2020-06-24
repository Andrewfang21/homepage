import React from "react";
import styled from "styled-components";

interface NavbarProps {}

interface NavbarState {
  show: boolean;
  scrollPos: number;
}

class NavigationBar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos,
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <Transition>
        <StyledNavbar className={this.state.show ? "active" : "hidden"}>
          <Links></Links>
        </StyledNavbar>
      </Transition>
    );
  }
}

export default NavigationBar;

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 500ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 500ms ease-out;
    transform: translate(0, -100%);
  }
`;

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  background-color: blue;
  /* background: rgb(5, 16, 48); */
  z-index: 1000;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
