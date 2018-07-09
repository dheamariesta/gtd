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
      	
    }
  
    handleSubmit(event) {
		alert('The following password has been submitted: ' + this.state.value);
		event.preventDefault();
    }
  
    render() {
		return (
			<form onSubmit={this.handleSubmit}>
			<label>
				Enter password for OG: 
				<input type="text" value={this.state.value} onChange={this.handleChange} />
			</label>
			<input type="submit" value="Show me the score!" />
			</form>
			);
    }
}
