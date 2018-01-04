import React, { PropTypes } from 'react';
import { Button } from "react-bootstrap";
import { PageWrap } from '../../index';

export default class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<PageWrap>
				<h1>About Us</h1>
			</PageWrap>
		);
	}
}

About.propTypes = {
};
