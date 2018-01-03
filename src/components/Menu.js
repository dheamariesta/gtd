// // Components
import { slide as Menu } from 'react-burger-menu';
import React from "react";

// Styles
import '../styles/components/menu.css';
import { MenuWrap } from '../index';


// Others

export class TopMenu extends React.Component {
    render(){
        return (
			<MenuWrap>
				<Menu 
					pageWrapId={ "page-wrap" } 
					outerContainerId={ "outer-container" }
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
