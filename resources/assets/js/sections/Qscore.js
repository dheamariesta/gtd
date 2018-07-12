import React from "react";
import { Row, Col } from "react-bootstrap";
import { DefaultPanel } from "../components/Panel";
import axios from "axios";


export class Qscore extends React.Component {
    constructor(props) {
		super(props);
		this.state = {value: ''};
	
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
		this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
		//alert('The following password has been submitted: ' + this.state.value);
		console.log("password has been submitted!");
		event.preventDefault();
		fetch('/score', 
		{
			method: 'POST',
			headers: 
			{
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(
			{
				pass_send: this.state.value,
			})
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(myJson) {
			console.log(myJson);
			if(myJson=="Correct password")
			{
				window.location.assign("/score");
			}
			else
			{
				alert('Wrong password submitted!');
			}
		});
    }
  
    render() {
		return (
			<section id="qscore">
				<Row className="default-bg full-height flex-center">
					<Col md={8} xs={12}>
					<h1 className="section-title title">Exodia Scores</h1>
					</Col>
				</Row>
				<Row className="default-bg full-height flex-center">
					<Col md={8} xs={12}>
					<label>
						Enter password for OG:  
					</label>
					</Col>
				</Row>
				<Row className="default-bg full-height flex-center">
					<Col md={8} xs={12}>
					<div className="form-container">
						<form name = "pass" onSubmit= {this.handleSubmit}>
							<input type="password" value={this.state.value} onChange={this.handleChange} /> 
							<input type="submit" value="Show me the score!" />
						</form>
					</div>
					</Col>
				</Row>
				<Row className="default-bg full-height flex-center">
					<div className= "margin-bottom">
					</div>
				</Row>
			</section>
			);
    }
}
// Hi Jason :)