// // Components
import { push as Menu } from 'react-burger-menu';
import React from "react";

// Styles
import '../styles/components/menu.css';
import { MenuWrap } from '../index';


// Others

export class Sidebar extends React.Component {
    render(){
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

			</MenuWrap>
        )
    }
}
