import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './styles/index.css';

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

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
