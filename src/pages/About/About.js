import React, { PropTypes } from 'react';
import { Button } from "react-bootstrap";
import { TopMenu } from '../../components/Menu';

export default class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<TopMenu />
				About Us
				<Button bsStyle="primary">PRIMARY</Button>
      		</div>
		);
	}
}

About.propTypes = {
};
