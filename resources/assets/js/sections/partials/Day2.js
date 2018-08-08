import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

export class Day2_table extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            game_balance_beach: ''
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
            this.setState({
                game_balance_beach: balance_beach
            });
            console.log("Day2 fetched!");

        }).catch(err => {
            console.log(err);
            alert("Error when fetching day2!");
        })
    }
    
    render(){
        const listScores = this.state.game_balance_beach;
        return(
			<div className="Day2_table">
                <Row className="default-bg">
                <div className="container">
                <h3>Score</h3>
                <h3>{listScores[0]}</h3>
                <h3>Minimum Bet</h3>
                <h3>{listScores[0]}</h3>
                <h3>Maximum Bet</h3>
                <h3>{listScores[0]}</h3>
                </div>
                </Row>
            </div>
        )
    }
}