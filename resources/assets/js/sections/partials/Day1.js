import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export class Day1_table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game_titles_outdoor: '',
      game_scores_outdoor: '',
      game_titles_night: '',
      game_scores_night: '',
      game_scores_night2: ''
    };
  }

  componentDidMount() {
    this.fetch_table();
  }

  fetch_table() {
    axios.post('/day1', {
      OG_NAME: this.props.OG_NAME,
    }).then(response => {
      //console.log(response.data);
      const titles_outdoor = response.data.game_titles_outdoor;
      const scores_outdoor = response.data.game_scores_outdoor;
      const titles_night = response.data.game_titles_night;
      const scores_night = response.data.game_scores_night;
      const scores_night2 = response.data.game_scores_night2;
      this.setState({
        game_titles_outdoor: titles_outdoor,
        game_scores_outdoor: scores_outdoor,
        game_titles_night: titles_night,
        game_scores_night: scores_night,
        game_scores_night2: scores_night2
      });
      console.log("Day1 fetched!");

    }).catch(err => {
      console.log(err);
      alert("Error when fetching day1!");
    })
  }
  componentDidUpdate(prevProps, prevState){
    if (prevProps.OG_NAME !== this.props.OG_NAME){
      this.fetch_table();
    }
  }

  render() {
    const OG_NAME = this.props.OG_NAME;
    const listItems = this.state.game_titles_outdoor;
    const listScores = this.state.game_scores_outdoor;
    const listItems2 = this.state.game_titles_night;
    const listScores2 = this.state.game_scores_night;
    const listScores3 = this.state.game_scores_night2;
    const listElementsName = [];
    const listElementsScore = [];
    const listElementsName2 = [];
    const listElementsScore2 = [];
    const listElementsScore3 = [];
    const objectList = [];
    const objectList2 = [];

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
    for (let index = 0; index < listItems2.length; index++) {
      const element = listItems2[index];
      // console.log(element);
      const name = element[0];
      listElementsName2.push(name);
    }
    for (let index = 0; index < listScores2.length; index++) {
      const element = listScores2[index];
      // console.log(element);
      const name = element[0];
      listElementsScore2.push(name);
    }

    for (let index = 0; index < listScores3.length; index++) {
      const element = listScores3[index];
      // console.log(element);
      const name = element[0];
      listElementsScore3.push(name);
    }
    // console.log(listElementsName);

    for (let index = 0; index < listScores.length; index++) {
      //console.log(index);
      objectList.push({
        id: index,
        name: listElementsName[index],
        score: listElementsScore[index],
      });
    }

    for (let index = 0; index < listScores2.length; index++) {
      //console.log(index);
      objectList2.push({
        id: index,
        name: listElementsName2[index],
        score: listElementsScore2[index],
        score2: listElementsScore3[index]
      });
    }


    return (
      <div className="Day1_table">
        <h3 className="section-title title"> Outdoor</h3>
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
        <h3 className="section-title title">Night</h3>
        <Table striped bordered hover>
          <tbody>
          {objectList2.map(obj => {
            return (
              <tr key={obj.id}>
                <td>{obj.name}</td>
                <td>{obj.score}</td>
                <td>{obj.score2}</td>
              </tr>
            );
          })}
          </tbody>
        </Table>
      </div>
    );
  }
}