import React from "react";
import { Row, Col } from "react-bootstrap";
import { DefaultPanel } from "../components/Panel";


export class Home extends React.Component {
    render() {
        return (
            <Row>
                <Col mdOffset="2" md="8">
                    <DefaultPanel
                        title="HAIII"
                        body="This is a body"
                        withBody
                    />
                </Col>
            
            </Row>
        )
    }
}