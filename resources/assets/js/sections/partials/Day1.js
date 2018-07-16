import React from "react";
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