// Components
import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Route, Router } from "react-router-dom";

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
                    <NavItem eventKey={1} href="/about" className={ isActive['about']? 'active': '' }>About</NavItem>
                    <NavItem eventKey={2} href="/history" className={ isActive['history']? 'active': '' }>History</NavItem>
                    <NavItem eventKey={3} href="/anthem" className={ isActive['anthem']? 'active': '' }>Anthem</NavItem>
                    <NavItem eventKey={4} href="/contact" className={ isActive['contact']? 'active': '' }>Contact Us</NavItem>
                </Nav>
            </Navbar>
        );
    }
}