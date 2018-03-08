// Components
import React, { PropTypes } from 'react';
import { Button } from "react-bootstrap";
import { PageWrap } from '../index';
import { Mission } from './partials/Mission';
import { Vision } from './partials/Vision';


export class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="about">
				<Vision />
				<Mission />
			</section>
		);
	}
}

About.propTypes = {
};
