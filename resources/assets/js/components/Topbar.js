// Components
import React from "react";
import { Navbar, Nav, NavItem, Image } from "react-bootstrap";
import Home from "../pages/Home";


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
		const { isDesktop } = this.props;
		return (
			<Navbar fixedTop={isDesktop} id="navbar-scrollspy">
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/">
							<img src="/images/logo.png" alt="logo" className="img-responsive hidden-xs" />
						</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} href="#about">About</NavItem>
						<NavItem eventKey={2} href="#history">History</NavItem>
						<NavItem eventKey={3} href="#anthem">Anthem</NavItem>
            <NavItem eventKey={4} href="#faq">FAQ</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export const ExodiaTopBar = () => {
  return (
    <Navbar className={"no-bg"}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">
            <Image src={"/images/logo-white.png"} responsive/>
          </a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
};