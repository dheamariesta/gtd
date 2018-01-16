// // Components
import { push as Menu } from 'react-burger-menu';
import React from "react";
import { MenuWrap } from '../index';


export class Sidebar extends React.Component {
    render(){
		const logoSyles = {
			'maxWidth': '80%',
			'marginLeft': 'auto'
		}
        return (
			<MenuWrap>
				<Menu 
					pageWrapId={ "page-wrap" } 
					outerContainerId={ "outer-container" }
					customBurgerIcon={ <img src="/images/burger.svg" alt="burger" /> }
					customCrossIcon={ <img src="/images/cross.svg" alt="cross" /> }
				>
					<a href="/" className="menu-item">Home</a>
					<a href="/about" className="menu-item">About</a>
					<a href="/history" className="menu-item">History</a>
					<a href="/anthem" className="menu-item">Anthem</a>
					<a href="/contact" className="menu-item">Contact Us</a>
				</Menu>
				<img src="images/logo.png" alt="logo" className="img-responsive" style={logoSyles}/>

			</MenuWrap>
        )
    }
}
