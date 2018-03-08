// Components
import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import $ from "jquery";


export class Topbar extends React.Component {
	constructor(props) {
		super(props);
	}

	scrollToSection() {
		$("a").on('click', function (event) {
			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();

				// Store hash
				var hash = this.hash;

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