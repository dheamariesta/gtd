// Components
import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

// Styles
import '../styles/components/topbar.css';


export class Topbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isActive = {
            'about' : this.props.activeMenu === '/about',
            'history' : this.props.activeMenu === '/history',
            'anthem' : this.props.activeMenu === '/anthem',
            'contact' : this.props.activeMenu === '/contact',
        }
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            <img src="/images/logo.png" alt="logo" className="img-responsive" />
                        </a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="/about" active={ isActive['about'] }>About</NavItem>
                    <NavItem eventKey={2} href="/history" active={ isActive['history'] }>History</NavItem>
                    <NavItem eventKey={3} href="/anthem" active={ isActive['anthem'] }>Anthem</NavItem>
                    <NavItem eventKey={4} href="/contact" active={ isActive['contact'] }>Contact Us</NavItem>
                </Nav>
            </Navbar>
        );
    }
}