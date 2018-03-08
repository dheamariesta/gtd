// Components
import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import $ from "jquery";


export class Topbar extends React.Component {
    constructor(props) {
        super(props);
	}

	scrollToSection(){
		$('a[href*="#"]')
		// Remove links that don't actually link to anything
		// .not('[href="#"]')
		// .not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
				&& 
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
				// Only prevent default if animation is actually gonna happen
				// event.preventDefault();
				$('html, body').animate(
					{
						scrollTop: target.offset().top
					}, 
					{
						duration: 1500
					}
				) 
				}
			}
		});
	}
	componentDidMount(){
		this.scrollToSection();
	}
	

    render() {
        return (
            <Navbar fixedTop id="navbar-scrollspy">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            <img src="/images/logo.png" alt="logo" className="img-responsive" />
                        </a>
                    </Navbar.Brand>
                </Navbar.Header>
					<Nav pullRight>
						<NavItem eventKey={1} href="#about">About</NavItem>
						<NavItem eventKey={2} href="#history">History</NavItem>
						<NavItem eventKey={3} href="#anthem">Anthem</NavItem>
						<NavItem eventKey={4} href="#contact">Contact Us</NavItem>
					</Nav>
            </Navbar>
        );
    }
}