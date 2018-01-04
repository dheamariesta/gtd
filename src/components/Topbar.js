// Components
import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

// Styles
import '../styles/components/topbar.css';


export class Topbar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            <img src="/images/logo.png" alt="logo" className="img-responsive"/>
                        </a>
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