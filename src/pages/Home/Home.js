// Components
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TopMenu } from "../../components/Menu";
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
				<h1>Home</h1>
			</PageWrap>
		);
	}
}
