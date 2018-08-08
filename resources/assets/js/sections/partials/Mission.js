import React from "react";
import { Row, Col } from "react-bootstrap";

export const Mission = ({...rest}) => {
  return (
    <div {...rest}>
      <h1 className="title">Our Missions</h1>
      <div className="mission-container clearfix">
        <Col sm={3} xs={12} className="mission-item">
          <img src="/images/ball.svg" alt="ball" className="img-responsive logo"/>
          <p>
            To be an enjoyable, bonded and organised freshmen orientation
          </p>
        </Col>
        <Col sm={3} xs={12} className="mission-item">
          <img src="/images/relationship.svg" alt="ball" className="img-responsive logo"/>
          <p>
            To improve the relation among freshmen and seniors
          </p>
        </Col>
        <Col sm={3} xs={12} className="mission-item">
          <img src="/images/improve.png" alt="ball" className="img-responsive logo"/>
          <p>
            To provide an opportunity for self-improvement for every committee members and participants of GTD
          </p>
        </Col>
        <Col sm={3} xs={12} className="mission-item">
          <img src="/images/merlion.svg" alt="ball" className="img-responsive logo"/>
          <p>
            To familiarize the freshmen to the life and culture in Singapore
          </p>
        </Col>
      </div>
    </div>
  );
};