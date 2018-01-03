// // Components
import { slide as Menu } from 'react-burger-menu';
import React from "react";

// Styles

// Others

const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
}
export class TopMenu extends React.Component {
    
    render(){

        return (
            <div id="outer-container">
                <Menu 
                    pageWrapId={ "page-wrap" } 
                    outerContainerId={ "outer-container" }
                    styles ={styles}
                >
                    <a href="/" className="menu-item">Home</a>
                    <a href="/about" className="menu-item">About</a>
                    <a href="/history" className="menu-item">History</a>
                    <a href="/anthem" className="menu-item">Anthem</a>
                    <a href="/contact" className="menu-item">Contact Us</a>
                </Menu>
                <main id="page-wrap">
                    <h1>Hello World</h1>
                </main>
            </div>
        )
    }
}
