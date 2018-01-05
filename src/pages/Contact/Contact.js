import React, { PropTypes } from 'react';
import { PageWrap } from '../../index';

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<PageWrap>
				<div className="container-fluid">
					<div className="row default-bg full-height-screen">
						<div className="col-md-12">
							<h1>Contact Us</h1>
						</div>
					</div>
				</div>
			</PageWrap>
		);
	}
}

Contact.propTypes = {
};
