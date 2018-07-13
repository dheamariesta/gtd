import React from "react";
import { withCookies, Cookies } from 'react-cookie';

// Sections
import { Banner } from "../sections/banner";
import { Row, Col } from "react-bootstrap";
import { Day1_table } from "../sections/partials/Day1"
import { Day2_table } from "../sections/partials/Day2"
import { Day3_table } from "../sections/partials/Day3"
import { Day4_table } from "../sections/partials/Day4"

export class Score extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.group_name = {value: ''};
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
				//window.location.assign("/score");
			}
			else
			{
				alert('Wrong password submitted!');
			}
		});
    }

	render(){
        if(this.group_name.value=='')
        {
		    return (
                <section id="qscore">
                    <Row className="default-bg full-height flex-center">
                        <Col md={8} xs={12}>
                        <h1 className="section-title title">Exodia Scores</h1>
                        </Col>
                    </Row>
                    <Banner />
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
                                <input type="text" value={this.state.value} onChange={this.handleChange} /> 
                                <input type="submit" value="Show me the score!" />
                            </form>
                        </div>
                        </Col>
                    </Row>
                    <Row className="default-bg full-height">
                            <div className= "margin-bottom">
                            </div>
                    </Row>
                </section>
                );
        }
        else
        {
            return (
                <section id="qscore">
                    <Row className="default-bg full-height flex-center">
                        <Col md={8} xs={12}>
                        <h1 className="section-title title">Exodia Scores</h1>
                        </Col>
                    </Row>
                    <div>
                        <Banner />
                        <section id="Day 1">
                            <Row className="default-bg full-height">
                                <Col md={12}>
        
                                    <h1 className="section-title title">Day 1 Score</h1>
                                </Col>
                                <Col md={12}>
                                    <Day1_table />
                                </Col>
                            </Row>
                        </section>
                        <section id="Day 2">
                            <Row className="default-bg full-height">
                                <Col md={12}>
                                    <h1 className="section-title title">Day 2 Score</h1>
                                    <Day2_table />
                                </Col>
                            </Row>
                        </section>
                        <section id="Day 3">
                            <Row className="default-bg full-height">
                                <Col md={12}>
                                    <h1 className="section-title title">Day 3 Score</h1>
                                    <Day3_table />
                                </Col>
                            </Row>
                        </section>
                        <section id="Day 4">
                            <Row className="default-bg full-height">
                                <Col md={12}>
                                    <h1 className="section-title title">Day 4 Score</h1>
                                    <Day4_table />
                                </Col>
                            </Row>
                        </section>
                        <Row className="default-bg full-height">
                            <div className= "margin-bottom">
                            </div>
                        </Row>
                    </div>
                </section>
            );   
        }
    }
} 