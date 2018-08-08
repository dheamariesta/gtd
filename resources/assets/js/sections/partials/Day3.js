import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

export class Day3_table extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
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
            //console.log(response.data);
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

    render(){
        const listScores = this.state.game_point_field;
        return(
			<div className="Day3_table">
                <Row className="default-bg">
                <div className="container">
                    <h2>{listScores[0]}</h2>
                </div>
                </Row>
            </div>
        )
    }
}