import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

export class Day1_table extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            game_scores_outdoor: '',
            game_scores_night: '',
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
            const scores_outdoor = response.data.game_scores_outdoor;
            const scores_night = response.data.game_scores_night;
            this.setState({
                game_scores_outdoor: scores_outdoor,
                game_scores_night: scores_night,
            });
            console.log("Day1 fetched!");

        }).catch(err => {
            console.log(err);
            alert("Error when fetching day1!");
        })
    }

    render() {
        const OG_NAME = this.props.OG_NAME;
        const listScores = this.state.game_scores_outdoor;
        const listScores2 = this.state.game_scores_night;
        const listElementsScore =[];
        const listElementsScore2 =[];

        for (let index = 0; index < listScores.length; index++) {
            const element = listScores[index];
            // console.log(element);
            const name = element[0];
            listElementsScore.push(name);
        }
        for (let index = 0; index < listScores2.length; index++) {
            const element = listScores2[index];
            // console.log(element);
            const name = element[0];
            listElementsScore2.push(name);
        }
        return (
            <div className="Day1_table">
                <Row className="default-bg">
                <div className="container">
                    <h2 className="section-title title"> Outdoor</h2>
                    <h2>{listScores[0]}</h2>
                    <h2 className="section-title title">Night</h2>
                    <h2>{listScores2[0]}</h2>
                </div>
                </Row>
            </div>
        )
    }
}