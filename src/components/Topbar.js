// Components
import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

// Styles


export class Topbar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Get Together Day</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="/about">About</NavItem>
                    <NavItem eventKey={2} href="/history">History</NavItem>
                    <NavItem eventKey={3} href="/anthem">Anthem</NavItem>
                    <NavItem eventKey={4} href="/contact">Contact Us</NavItem>
                </Nav>
            </Navbar>
        );
    }
}