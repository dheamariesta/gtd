// Components
import React from 'react';
import { Row, Col } from "react-bootstrap";

import { ContactForm } from '../components/Form';
import { AlertDismissable } from '../components/Alert';


export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      showAlert: false,
      message: '',
    };

    this.handleError = this.handleError.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.dismissAlert = this.dismissAlert.bind(this);
  }

  handleError(errors) {
    let errorMessages = [];
    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        const value = errors[key];
        for (let i = 0; i < value.length; i++) {
          const message = value[i];
          errorMessages.push(message)
        }
      }
    }
    this.setState({
      showAlert:  true,
      status: 'error',
      message: errorMessages
    });
  }

  handleSuccess(message) {
    this.setState({
      showAlert: true,
      status: 'success',
      message,
    });
  }

  dismissAlert() {
    this.setState({
      showAlert: false
    });
  }

  render() {
    const { message, showAlert, status } = this.state;
    return (
      <section id="contact">
        <Row className="default-bg full-height flex-center">
          <Col md={8} xs={12}>
            <h1 className="section-title title">Contact Us</h1>
            <div className="form-container">
              <ContactForm
                actionHandler="/send"
                onError={this.handleError}
                onSuccess={this.handleSuccess}
              />
            </div>
            {status === 'error' ? (
              <AlertDismissable show={showAlert} onDismiss={this.dismissAlert}>
                <ul style={{ textAlign: 'left' }}>
                  {message.map((m, index) => {
                    return (
                      <li key={index}>{m}</li>
                    )
                  })}
                </ul>
              </AlertDismissable>
            ) : (
              <AlertDismissable bsStyle="success" show={showAlert} onDismiss={this.dismissAlert}>
                <p style={{ color: 'black' }}>{message}</p>
              </AlertDismissable>
            )}
          </Col>
        </Row>
      </section>
    );
  }
}

