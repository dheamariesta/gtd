import React from "react";
import axios from "axios";

export class Day3_table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game_point_field: ''
    };
  }

  componentDidMount() {
    this.fetch_table();
  }

  fetch_table() {
    axios.post('/day3', {
      OG_NAME: this.props.OG_NAME,
    }).then(response => {
      const point_field = response.data.game_point_field;
      this.setState({
        game_point_field: point_field
      });
      console.log("Day3 fetched!");

    }).catch(err => {
      console.log(err);
      alert("Error when fetching day3!");
    })
  }

  render() {
    const listScores = this.state.game_point_field;
    return (
      <h2>{listScores[0]}</h2>
    );
  }
}