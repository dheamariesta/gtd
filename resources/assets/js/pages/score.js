import React from "react";
import axios from "axios";

// components
import { Row, Col, Button, FormGroup } from "react-bootstrap";
import { ExodiaThemedButton } from "../components/Button";
import { FieldGroup } from "../components/Form";
import Loading from "../components/Loading";
import { ExodiaTopBar } from "../components/Topbar";
import { AlertDismissable } from "../components/Alert";

// Sections
import { Day1_table } from "../sections/partials/Day1"
import { Day2_table } from "../sections/partials/Day2"
import { Day3_table } from "../sections/partials/Day3"

export class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      OG_NAME: '',
      OG_NICK: '',
      loading: false,
      status: '',
      showAlert: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissAlert = this.dismissAlert.bind(this);
    this.check_pass = this.check_pass.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }


  handleSubmit(event) {
    console.log("password has been submitted!");
    event.preventDefault();
    this.check_pass();
  }

  dismissAlert() {
    this.setState({
      showAlert: false,
    });
  }

  check_pass() {
    this.setState({ loading: true, OG_NAME: '' }, () => {
      axios.post('/score', {
        pass_send: this.state.value,
      }).then(response => {
        const { OG_NAME, OG_NICK } = response.data;
        this.setState({
          status: 'success',
          OG_NAME,
          OG_NICK,
        });
      }).catch(err => {
        console.log(err);
        this.setState({
          status: 'error',
        });
      }).then(() => {
        setTimeout(() => {
          this.setState({
            value: '',
            loading: false,
            showAlert: true,
          });
        }, 3000);
      });
    });
  }

  render() {
    const { OG_NAME, OG_NICK, value, loading, status, showAlert } = this.state;
    return (
      <React.Fragment>
        <Row className="bg-batik full-height row-center exodia margin-bottom">
          <ExodiaTopBar/>
          <Col xs={12} md={8} className={"col-center"}>
            <h1 className="section-title title">Exodia Scores</h1>
            <form onSubmit={this.handleSubmit}>
              <FieldGroup
                required
                label={"Enter OG Password *"}
                id={"formControlText"}
                type={"password"}
                placeholder={"Enter OG Password"}
                value={value}
                onChange={this.handleChange}
              />
              <FormGroup>
                <ExodiaThemedButton block type="submit" disabled={loading}>
                  {loading ? (<Loading text={"Submitting..."}/>) : 'Submit'}
                </ExodiaThemedButton>
              </FormGroup>

              {status === 'success' ? (
                <AlertDismissable bsStyle="success" show={showAlert} onDismiss={this.dismissAlert}>
                  Scores are successfully fetched!
                </AlertDismissable>
              ) : (
                 <AlertDismissable show={showAlert} onDismiss={this.dismissAlert}>
                   Error!
                 </AlertDismissable>
               )
              }
            </form>
            {OG_NAME ? (
              <div>
                <h1>{OG_NICK}</h1>
                <Day1_table OG_NAME={OG_NAME} />

                <h2 className="section-title title">Beach Games</h2>
                <Day2_table OG_NAME={OG_NAME} />

                <h2 className="section-title title">Field Games</h2>
                <Day3_table OG_NAME={OG_NAME} />
              </div>
            ) : ("")}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
} 