import React from "react";
import { Row, Col } from "react-bootstrap";
import { DefaultPanel } from "../components/Panel";


export class Home extends React.Component {
    render() {
        return (
            <Row className="full-height flex-center">
                <Col md={12}>
                    <img src="/images/coming_soon.jpg" alt="coming-soon" className="img-responsive" />
                </Col>
            </Row>
        )
    }
}