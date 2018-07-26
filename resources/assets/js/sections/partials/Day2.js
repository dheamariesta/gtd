import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

export class Day2_table extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
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
            alert("Error!");
        })
    }
    
    render(){
        return(
			<div className= "Day2_table">
                <Row className="default-bg full-height">
                        <Col md={6}>
                            Hi
                        </Col>
                        <Col md={6}>
                            There
                        </Col>
                </Row>
            </div>
        )
    }
}