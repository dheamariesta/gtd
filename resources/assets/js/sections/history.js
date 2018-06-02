// Components
import React, { PropTypes } from 'react';
import { PageWrap } from '../index';
import { Row, Col, Thumbnail } from "react-bootstrap";
import { HistoryTabs } from '../components/Tabs';
export class History extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		<section id="history">
			<Row className="default-bg full-height">
				<Col md={12}>
					<h1 className="section-title title">History</h1>
					<HistoryTabs />
				</Col>
			</Row>
		</section>
		);
	}
}

History.propTypes = {
};
