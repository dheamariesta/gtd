// Components
import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Mission } from './partials/Mission';
import { Vision } from './partials/Vision';


export const About = () => {
  return (
    <section id="about">
      <Row className="flex-center">
        <Col sm={12} className="about-container">
          <img src="/images/vision.jpg" alt="vision" className="img-responsive" />
          <div className="about-box">
            <Vision />
            <Mission className="hidden-xs" />
          </div>
        </Col>
      </Row>
      <Mission className={"flex-center full-height default-bg visible-xs"}/>
    </section>
  );
};
