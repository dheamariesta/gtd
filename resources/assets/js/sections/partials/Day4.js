import React from "react";
import { Row, Col } from "react-bootstrap";

export class Day4_table extends React.Component {
    render(){
        return(
			<div classname= "Day4_table">
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