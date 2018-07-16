import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

export class Day1_table extends React.Component {
    constructor(props)
    {
        super(props);
        this.componentDidMount =this.componentDidMount.bind(this);
    }

    componentDidMount(){
        this.fetch_table();
    }

    fetch_table(){
        axios.post('/day1', {
            OG_NAME: this.props.OG_NAME,
    }).then(response => {
        console.log(response.data);
        console.log("Day1 fetched!");

    }).catch(err => {
        console.log(err);
        alert("Error!");
    })
    }

    render(){
        const OG_NAME=this.props.OG_NAME;
        console.log(OG_NAME);
        //console.log(this.props);
        return(
			<div className= "Day1_table">
                <Row className="default-bg full-height">
                        <Col md={6}>
                            Hi
                        </Col>
                        <Col md={6}>
                            There
                        </Col>
                </Row>
            </div>
        )
    }
}