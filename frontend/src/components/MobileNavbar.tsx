import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

import { links, PageDetails } from "../constants/scrollLinks";
import { FONT_COLOR } from "../constants/style";

interface MobileNavbarState {
  open: boolean;
}

interface MobileNavbarProps {}

class MobileNavbar extends React.Component<
  MobileNavbarProps,
  MobileNavbarState
> {
  constructor(props: MobileNavbarProps) {
    super(props);
    this.state = { open: false };
  }

  toggleHamburger(): void {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Container>
        <StyledNavbar
          open={this.state.open}
          onClick={() => this.toggleHamburger()}
        >
          <div />
          <div />
          <div />
        </StyledNavbar>
        <Links open={this.state.open}>
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

export default MobileNavbar;

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

const StyledNavbar: any = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${FONT_COLOR};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }: { open: boolean }) =>
        open ? "rotate(45deg)" : "rotate(0)"};
    }

    &:nth-child(2) {
      transform: ${({ open }: { open: boolean }) =>
        open ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ open }: { open: boolean }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }: { open: boolean }) =>
        open ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const Links: any = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-block-start: 0;

  @media (max-width: 900px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }: { open: boolean }) =>
      open ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 4.5rem;
    transition: transform 0.3s ease-in-out;

    .link {
      color: ${FONT_COLOR};
      padding: 18px 30px;
      text-align: right;
      font-weight: bold;
      font-size: 20px;
    }
  }
`;
