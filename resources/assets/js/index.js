import ReactDOM from 'react-dom';
import React from "react";
import App from './app/app';

export const MenuWrap = (props) => {
	return (
		<div className="menu">
			{props.children}
		</div>
	);
}

export const PageWrap = (props) => {
	return (
		<main id="page-wrap">
			{props.children}
		</main>
	);
}

const node = document.getElementById('root');
ReactDOM.render(
    <App />,
    node
)