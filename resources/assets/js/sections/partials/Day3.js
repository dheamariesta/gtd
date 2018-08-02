import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export class Day3_table extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      game_titles_field: '',
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
      //console.log(response.data);
      const titles_field = response.data.game_titles_field;
      const point_field = response.data.game_point_field;
      this.setState({
        game_titles_field: titles_field,
        game_point_field: point_field
      });
      console.log("Day3 fetched!");

    }).catch(err => {
      console.log(err);
      alert("Error when fetching day3!");
    })
  }
  componentDidUpdate(prevProps, prevState){
    if (prevProps.OG_NAME !== this.props.OG_NAME){
      this.fetch_table();
    }
  }

  render() {
    const listItems = this.state.game_titles_field;
    const listElementsName = [];
    const listScores = this.state.game_point_field;
    const listElementsScore = [];
    for (let index = 0; index < listItems.length; index++) {
      const element = listItems[index];
      // console.log(element);
      const name = element[0];
      listElementsName.push(name);
    }
    for (let index = 0; index < listScores.length; index++) {
      const element = listScores[index];
      // console.log(element);
      const name = element[0];
      listElementsScore.push(name);
    }
    const objectList = [];
    for (let index = 0; index < listScores.length; index++) {
      //console.log(index);
      objectList.push({
        id: index,
        name: listElementsName[index],
        score: listElementsScore[index],
      });
    }
    return (
      <div className="Day3_table">
        <Table striped bordered hover>
          <tbody>
          {objectList.map(obj => {
            return (
              <tr key={obj.id}>
                <td>{obj.name}</td>
                <td>{obj.score}</td>
              </tr>
            );
          })}
          </tbody>
        </Table>
      </div>
    );
  }
}