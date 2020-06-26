import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { links, PageDetails } from "../constants/scrollLinks";

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
          <Links>
            {Object.values(links).map((link: PageDetails) => (
              <Link
                className="link"
                key={link.to}
                to={link.to}
                spy
                smooth
                duration={500}
              >
                {link.text}
              </Link>
            ))}
          </Links>
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
  background-color: rgb(55, 56, 59, 0.5);
  z-index: 1000;
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: white;

  .link:hover {
    cursor: pointer;
  }
`;
