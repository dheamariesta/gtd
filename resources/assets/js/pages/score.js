import React from "react";
import axios from "axios";

// Sections
import { Row, Col, Button } from "react-bootstrap";
import { Day1_table } from "../sections/partials/Day1"
import { Day2_table } from "../sections/partials/Day2"
import { Day3_table } from "../sections/partials/Day3"
import { FieldGroup } from "../components/Form";
import Loading from "../components/Loading";
import { HomeTopbar } from "../components/Topbar";

export class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      OG_NAME: '',
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.check_pass = this.check_pass.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.check_pass();
  }

  check_pass() {
    this.setState({ loading: true}, () => {
      axios.post('/score', {
        pass_send: this.state.value,
      }).then(response => {
        alert("Password is correct");
        const { OG_NAME } = response.data;
        this.setState({ OG_NAME });
      }).catch(err => {
        console.log(err);
        alert("Error!");
      }).then(() => {
        setTimeout(() => {
          this.setState({ loading: false, value: '', });
        }, 5000);
      });
    });
  }

  render() {
    const { OG_NAME, value, loading } = this.state;
    return (
      <React.Fragment>
        <HomeTopbar/>
        <Row className="default-bg full-height row-center margin-bottom">
          <Col xs={12} md={8} className={"col-center"}>
            <h1 className="section-title title">Exodia Scores</h1>
            <form onSubmit={this.handleSubmit}>
              <FieldGroup
                label={"Enter OG Password"}
                id={"formControlText"}
                type={"password"}
                placeholder={"Enter OG Password"}
                value={value}
                onChange={this.handleChange}
              />
              <Button bsStyle="primary" block type="submit" disabled={loading}>
                {loading ? (<Loading text={"Submitting..."}/>) : 'Submit'}
              </Button>
            </form>
            {OG_NAME ? (
              <div>
                <h2 className="section-title title">Outdoor and Night Games</h2>
                <Day1_table OG_NAME={OG_NAME}/>

                <h2 className="section-title title">Beach Games</h2>
                <Day2_table OG_NAME={OG_NAME}/>

                <h2 className="section-title title">Field Games</h2>
                <Day3_table OG_NAME={OG_NAME}/>
              </div>
            ) : ("")}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
} 