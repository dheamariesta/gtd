import React from 'react';
import { Tabs, Tab, Thumbnail, Nav, NavItem, Row, Col } from "react-bootstrap";

export class HistoryTabs extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			key: 1
		}
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(newKey){
		this.setState({
			key : newKey
		});
	}
	render()
	{
		return (
			<Tab.Container 
				id="history-tabs" 
				activeKey={this.state.key}
				onSelect={this.handleSelect}		
			>
				<Row className="clearfix">
					<Col md={12} xs={12}>
						<Nav bsStyle="tabs" justified>
							<NavItem eventKey={1}>2015</NavItem>
							<NavItem eventKey={2}>2016</NavItem>
							<NavItem eventKey={3}>2017</NavItem>
							<NavItem eventKey={4}>2018</NavItem>
							<NavItem eventKey={5}>2019</NavItem>
						</Nav>
					</Col>
					<Col md={12}>
						<Tab.Content animation>
							<Tab.Pane eventKey={1}>
								<Col md={4} xs={12}>	
									<img src="/images/gtd_15.jpg" alt="gtd-15" className="img-responsive"/>
								</Col> 
								<Col md={6} xs={12}>
									<h3> GTD XV Exvoria </h3>
								</Col>
							</Tab.Pane>
							<Tab.Pane eventKey={2}>
								<Col md={4} xs={12}>
									<img src="/images/gtd_16.jpg" alt="gtd-16" className="img-responsive"/>
								</Col>
								<Col md={6} xs={12}>
									<h3> GTD XVI Olympians </h3>
								</Col>
							</Tab.Pane>
							<Tab.Pane eventKey={3}>
								<Col md={4} xs={12}>
									<img src="/images/gtd_17.jpg" alt="gtd-17" className="img-responsive"/>
								</Col>
								<Col md={6} xs={12}>
									<h3> GTD XVII Enigma </h3>
								</Col>
							</Tab.Pane>
							<Tab.Pane eventKey={4}>
								<Col md={4} xs={12}>
									<img src="/images/gtd_18.jpg" alt="gtd-18" className="img-responsive"/>
								</Col>
								<Col md={6} xs={12}>
									<h3> GTD XVIII Aetheria</h3>
								</Col>
							</Tab.Pane>
							<Tab.Pane eventKey={5}>
								<Col md={4} xs={12}>
									<img src="/images/gtd_19.jpg" alt="gtd-19" className="img-responsive"/>
								</Col>
								<Col md={6} xs={12}>
									<h3> GTD XIX Exixtance</h3>
								</Col>
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		);
	}
}
