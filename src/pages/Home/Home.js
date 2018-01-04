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
				<div className="container-fluid">
					<div className="row full-height-screen flex-center">
						<div className="col-md-12">
							<img src="/images/coming_soon.jpg" alt="coming-soon" className="img-responsive"/>
						</div>
					</div>
				</div>
			</PageWrap>
		);
	}
}
