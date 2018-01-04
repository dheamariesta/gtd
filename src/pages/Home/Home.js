// Components
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PageWrap } from '../../index';

// Styles
import '../../styles/pages/Home.css';

// import gtdComingSoon from '../coming_soon.jpg';
export default class Home extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<PageWrap>
				<div className="container">
					<div className="row full-height-screen home-bg"></div>
				</div>
			</PageWrap>
		);
	}
}
