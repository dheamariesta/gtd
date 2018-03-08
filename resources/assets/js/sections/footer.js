// Components
import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";


export class Footer extends React.Component {
    constructor(props) {
        super(props);
	}
	
render() {
        return (
            <Navbar>
                {/* <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            <img src="/images/logo.png" alt="logo" className="img-responsive" />
                        </a>
                    </Navbar.Brand>
                </Navbar.Header> */}
					<Navbar.Text className="copyright">
						Copyright © { new Date().getFullYear() } by <a href="https://pintusingapura.org" target="_blank">PINTU</a> 
					</Navbar.Text>
					{/* <Nav pullRight>
						<NavItem eventKey={1} href="#about">About</NavItem>
						<NavItem eventKey={2} href="#history">History</NavItem>
						<NavItem eventKey={3} href="#anthem">Anthem</NavItem>
						<NavItem eventKey={4} href="#contact">Contact Us</NavItem>
					</Nav> */}
            </Navbar>
        );
    }
}