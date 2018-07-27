import React from "react";
import axios from "axios";

// Sections
import { Banner } from "../sections/banner";
import { Row, Col, Button } from "react-bootstrap";
import { Day1_table } from "../sections/partials/Day1"
import { Day2_table } from "../sections/partials/Day2"
import { Day3_table } from "../sections/partials/Day3"

export class Score extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            value: '',
            OG_NAME: ''};
		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.check_pass = this.check_pass.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }
  

    handleSubmit(event) {
		//alert('The following password has been submitted: ' + this.state.value);
		console.log("password has been submitted!");
		event.preventDefault();
		this.check_pass();
    }

    check_pass() {
        axios.post('/score', {
                pass_send: this.state.value,
        }).then(response => {
            //console.log(response.data);
            alert("Password is correct");
            const temp = response.data.OG_NAME;
            this.setState({
                OG_NAME : temp
            });
            //console.log(temp);
            //console.log(this.state.OG_NAME);
        }).catch(err => {
            console.log(err);
            alert("Error!");
        })
    //     fetch('/score', 
		// {
		// 	method: 'POST',
		// 	headers: 
		// 	{
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify(
		// 	{
    //         pass_send: this.state.value,
		// 	})
		// })
		// .then(function(response) {
		// 	return response.json();
		// })
    //     .then(function (myJson) {
    //         //console.log(myJson);
    //         if (myJson["result"] == "Correct password") {
    //             this.setState({
		// 							OG_NAME: myJson["OG_name"]
		// 						});
    //             // this.state.OG_NAME = myJson["OG_name"];
    //             //console.log(myJson);
    //             alert('Correct password submitted!' + 'Your OG is:'+myJson["OG_name"]);
    //             //window.location.assign("/score");
    //         }
    //         else {
    //             alert('Wrong password submitted!');
    //         }
    //     });
    }

	render(){
        if(this.state.OG_NAME=='')
        {
		    return (
                <section id="qscore">
                    <Banner />
                    <Row className="default-bg flex-center">
                        <Col md={8} xs={12}>
                        <h1 className="section-title title">Exodia Scores</h1>
                        </Col>
                    </Row>
                    <Row className="default-bg flex-center">
                        <Col md={8} xs={12}>
                        <label>
                            Enter password for OG:  
                        </label>
                        </Col>
                    </Row>
                    <Row className="default-bg flex-center">
                        <Col md={8} xs={12}>
                        <div className="form-container">
                            <form name = "pass" onSubmit= {this.handleSubmit}>
                                <input type="password" value={this.state.value} onChange={this.handleChange} style={{color: "black"}} /> 
                                <Button bsStyle="primary" type="submit">Submit</Button>
                            </form>
                        </div>
                        </Col>
                    </Row>
                    <Row className="default-bg">
                            <div className= "margin-bottom">
                            </div>
                    </Row>
                </section>
                );
        }
        else
        {
            return (
                <section id="score">
                    <Banner />
                    <Row className="default-bg flex-center">
                        <Col md={8} xs={12}>
                        <h1 className="section-title title">GTD XX: Exodia Scores</h1>
                        </Col>
                    </Row>
                    <div>
                        <Row className="default-bg">
                            <Col md={12}>
    
                                <h2 className="section-title title">Outdoor and Night Games</h2>
                            </Col>
                            <Col md={12}>
                                <Day1_table component OG_NAME={this.state.OG_NAME}/>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className="default-bg">
                            <Col md={12}>
    
                                <h2 className="section-title title">Beach Games</h2>
                            </Col>
                            <Col md={12}>
                                <Day2_table component OG_NAME={this.state.OG_NAME}/>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className="default-bg">
                            <Col md={12}>
    
                                <h2 className="section-title title">Field Games</h2>
                            </Col>
                            <Col md={12}>
                                <Day3_table component OG_NAME={this.state.OG_NAME}/>
                            </Col>
                        </Row>
                    </div>
                    <Row className="default-bg">
                            <div className= "margin-bottom">
                            </div>
                    </Row>
                </section>
            );   
        }
    }
} 