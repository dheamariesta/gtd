// Components
import React, { PropTypes } from 'react';
import { Button } from "react-bootstrap";
import { PageWrap } from '../../index';
import { Mission } from './Mission';

// Styles
import '../../styles/pages/about.css'


export default class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<PageWrap>
				<Mission />
			</PageWrap>
		);
	}
}

About.propTypes = {
};
