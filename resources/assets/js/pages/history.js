// Components
import React, { PropTypes } from 'react';
import { PageWrap } from '../index';
import { Row, Col, Thumbnail } from "react-bootstrap";
export class History extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		<section id="history">
			<PageWrap>
				<Row className="default-bg full-height">
					<Col md={12}>
						<h1 className="section-title">History</h1>
						<Row>
							<Col mdOffset={1} md={2} xs={12}> 
								<Thumbnail src="/images/gtd_15.jpg" alt="gtd-15">
									<h3> GTD XV Exvoria </h3>

								</Thumbnail>
								{/* <img src="/images/gtd_15.jpg" alt="gtd_15" className="img-responsive"/>		
								<p></p> */}
							</Col>
							<Col md={2} xs={12}> 
								<Thumbnail src="/images/gtd_16.jpg" alt="gtd-16">
									<h3> GTD XVI Olympians </h3>

								</Thumbnail>
								{/* <img src="/images/gtd_16.jpg" alt="gtd_16" className="img-responsive"/>	
								<p>GTD XVI Olympians</p> */}
							</Col>
							<Col md={2} xs={12}> 
								<Thumbnail src="/images/gtd_17.jpg" alt="gtd-17">
									<h3> GTD XVII Enigma </h3>

								</Thumbnail>
								{/* <img src="/images/gtd_17.jpg" alt="gtd_17" className="img-responsive"/>	
								<p>GTD XVII Enigma</p> */}
							</Col>
							<Col md={2} xs={12}> 
								<Thumbnail src="/images/gtd_18.jpg" alt="gtd-18">
									<h3> GTD XVIII Aetheria</h3>

								</Thumbnail>
								{/* <img src="/images/gtd_18.jpg" alt="gtd_18" className="img-responsive"/>	
								<p>GTD XVIII Aetheria</p> */}
							</Col>
							<Col md={2} xs={12}> 
								<Thumbnail src="/images/gtd_19.jpg" alt="gtd-19">
									<h3> GTD XIX Exixtance</h3>

								</Thumbnail>
								{/* <img src="/images/gtd_19.jpg" alt="gtd_19" className="img-responsive"/>	
								<p>GTD XIX Exixtance</p> */}
							</Col>
		
						</Row>

					</Col>
				</Row>
			</PageWrap>
		</section>
		);
	}
}

History.propTypes = {
};
