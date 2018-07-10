import React from "react";
import { Row, Col } from "react-bootstrap";

export class Day1_table extends React.Component {
    render(){
        return(
			<div classname= "Day1_table">
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