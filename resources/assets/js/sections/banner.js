import React from "react";
import { Row, Col } from "react-bootstrap";

export const Banner = () => {
  return (
    <Row className="banner flex-center">
      <Col md={12} className="banner-container">
        <a href="/exodia">
          <img src="/images/coming_soon.jpg" alt="coming-soon" className="banner-responsive dhea"/>
        </a>
      </Col>
    </Row>
  )
};
