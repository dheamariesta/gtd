import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

export class Day2_table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game_balance_beach: '',
      beach_min_bid: '',
      beach_max_bid: ''
    };
  }

  componentDidMount() {
    this.fetch_table();
  }

  fetch_table() {
    axios.post('/day2', {
      OG_NAME: this.props.OG_NAME,
    }).then(response => {
      //console.log(response.data);
      const balance_beach = response.data.game_balance_beach;
      const max_bid = response.data.beach_max_bid;
      const min_bid = response.data.beach_min_bid;
      this.setState({
        game_balance_beach: balance_beach,
        beach_min_bid: min_bid,
        beach_max_bid: max_bid
      });
      console.log("Day2 fetched!");

    }).catch(err => {
      console.log(err);
      alert("Error when fetching day2!");
    })
  }


  render() {
    const listScores = this.state.game_balance_beach;
    const minBid = this.state.beach_min_bid;
    const maxBid = this.state.beach_max_bid;
    return (
      <React.Fragment>
        <Row>
          <h3>Score:</h3>
          <h3>{listScores[0]}</h3>
          <Col xs={6}>
            <h3>Minimum Bet:</h3>
            <h3>{minBid[0]}</h3>
          </Col>
          <Col xs={6}>
            <h3>Maximum Bet:</h3>
            <h3>{maxBid[0]}</h3>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}