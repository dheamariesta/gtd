import React from "react";
import { Col } from "react-bootstrap";


const Section = ({name, children, ...rest}) => {
  return  (
  <section className={name}>
    <Col xs={12} {...rest} >
      {children}
    </Col>
  </section>
  )
};

export default Section;