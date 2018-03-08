// Components
import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { BackToTop } from "../components/BackToTop";


export class Footer extends React.Component {
    constructor(props) {
        super(props);
	}
	
render() {
        return (
            <Navbar>
				<Navbar.Text className="copyright">
					Copyright © { new Date().getFullYear() } by <a href="https://pintusingapura.org" target="_blank">PINTU</a> 
				</Navbar.Text>
				<BackToTop />
            </Navbar>
        );
    }
}