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
  show: boolean;
  scrollPos: number;
}

class NavigationBar extends React.Component<Props, State> {
  constructor(props: Props) {
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
    const { secondaryColor } = this.props.theme;
    return (
      <Transition>
        <StyledNavbar className={this.state.show ? "active" : "hidden"}>
          <Links secondarycolor={secondaryColor}>
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

const mapStateToProps = ({ theme }: StoreState): { theme: Theme } => {
  return { theme };
};

export default connect(mapStateToProps, {})(NavigationBar);

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 500ms ease-out;
  }
  .hidden {
    visibility: hidden;
    transition: all 500ms ease-in;
    transform: translate(0, -100%);
  }
  @media screen and (max-width: 900px) {
    display: none;
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

const Links = styled.div<{ secondarycolor: string }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: white;
  .link {
    margin: 0 10px;
    transform: translateX(-30px);
    -webkit-transform: translateX(-30px);
  }
  .link:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 30%;
    position: absolute;
    background: ${(props) => props.secondarycolor};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  .link:hover {
    cursor: pointer;
    color: ${(props) => props.secondarycolor};
  }
  .link:hover:after {
    cursor: pointer;
    width: 100%;
    left: 0;
  }
`;
