import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

export class Day1_table extends React.Component {
    constructor(props)
    {
        super(props);
        this.componentDidMount =this.componentDidMount.bind(this);
        this.state = {
            game_titles: '',
            game_scores: ''
        };
    }

    componentDidMount(){
        this.fetch_table();
    }

    fetch_table(){
        axios.post('/day1', {
            OG_NAME: this.props.OG_NAME,
    }).then(response => {
        //console.log(response.data);
        const titles = response.data.game_titles;
        const scores = response.data.game_scores;
        this.setState({
            game_titles : titles,
            game_scores : scores
        });
        console.log("Day1 fetched!");

    }).catch(err => {
        console.log(err);
        alert("Error!");
    })
    }

    render(){
        const OG_NAME=this.props.OG_NAME;
        const listItems = this.state.game_titles;
        console.log(this.state.game_scores);
        console.log(this.state.game_titles);
        return(
			<div className= "Day1_table">
                <Row className="default-bg full-height">
                </Row>
            </div>
        )
    }
}