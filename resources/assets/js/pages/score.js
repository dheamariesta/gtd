import React from "react";

// Sections
import { Banner } from "../sections/banner";
import { Row, Col } from "react-bootstrap";
import { Day1_table } from "../sections/partials/Day1"
import { Day2_table } from "../sections/partials/Day2"
import { Day3_table } from "../sections/partials/Day3"
import { Day4_table } from "../sections/partials/Day4"

export class Score extends React.Component {
	constructor(props){
		super(props);
    }
    
    handleSubmit(data) {
        console.log('form submission data', data);
    }

	render(){
		return (
			<div className="Day_Tables">
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
		)
	}
} 