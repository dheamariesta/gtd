// Components
import React from "react";
import styled from "styled-components";
import { Navbar, Nav, NavItem, Image } from "react-bootstrap";
import { ExodiaThemedButton } from "./Button";


export class HomeTopbar extends React.Component {
  constructor(props) {
    super(props);
  }

  static scrollToSection() {
    $("a").on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        let hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1500, function () {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  }

  componentDidMount() {
    HomeTopbar.scrollToSection();
  }

  render() {
    const { ...rest } = this.props;
    const isHome = window.location.pathname === '/';
    return (
      <Navbar id="navbar-scrollspy" {...rest}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <Image src="/images/logo.png" alt="logo" responsive/>
            </a>
          </Navbar.Brand>
          {isHome ? <Navbar.Toggle/> : ''}
        </Navbar.Header>
        {isHome ? (
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#about">About</NavItem>
              <NavItem eventKey={2} href="#history">History</NavItem>
              <NavItem eventKey={3} href="#anthem">Anthem</NavItem>
              <NavItem eventKey={4} href="#faq">FAQ</NavItem>
            </Nav>
          </Navbar.Collapse>
        ) : ("")
        }
      </Navbar>
    );
  }
}

const StyledNavbar = styled(Navbar)`
  .container {
    display: flex;
    align-items: center;
  }
`;

export const ExodiaTopBar = () => {
  return (
    <StyledNavbar className={"no-bg"}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">
            <Image src={"/images/logo-white.png"} responsive/>
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <div style={{ marginLeft: "auto" }}>
        <a href="/score" target="_blank">
          <ExodiaThemedButton>
            Check Score
          </ExodiaThemedButton>
        </a>
      </div>
    </StyledNavbar>
  );
};