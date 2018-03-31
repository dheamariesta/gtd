// Components
import React from 'react';
import { Button, Row, Col } from "react-bootstrap";
import { Mission } from './partials/Mission';
import { Vision } from './partials/Vision';


export class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="about">
				<Row className="flex-center">
					<Col sm={12} className="about-container">
						<img src="/images/vision.jpg" alt="vision" className="img-responsive" />
						<div className="about-box">
							<Vision />
							{this.props.isDesktop ? <Mission /> : null}
						</div>
					</Col>
				</Row>	
				{!this.props.isDesktop ? 
					(<Row className="flex-center full-height default-bg">
						<Mission />
					</Row>): null
				}
			</section>
		);
	}
}
