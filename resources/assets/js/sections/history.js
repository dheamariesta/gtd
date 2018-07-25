// Components
import React from 'react';
import { Row, Col, } from "react-bootstrap";
import { HistoryTabs } from '../components/Tabs';

export const History = () => {
  return (
    <section id="history">
      <Row className="default-bg full-height">
        <Col md={12}>
          <h1 className="section-title title">History</h1>
          <HistoryTabs/>
        </Col>
      </Row>
    </section>
  );
};
