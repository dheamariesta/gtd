import React from "react";
import { Row, Col } from "react-bootstrap";
import { DefaultPanel } from "../components/Panel";


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
		alert('The following password has been submitted: ' + this.state.value);
		event.preventDefault();
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
						<form action="{{route('score.pass_send')}}" method ="POST">
							<input type="text" value={this.state.value} onChange={this.handleChange} /> 
							<input type="submit" value="Show me the score!" />
						</form>
					</div>
					</Col>
					
				</Row>
			</section>
			);
    }
}
