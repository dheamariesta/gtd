import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

export class Day2_table extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            game_titles_beach: '',
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
            const titles_beach = response.data.game_titles_beach;
            const balance_beach = response.data.game_balance_beach;
            this.setState({
                game_titles_beach: titles_beach,
                game_balance_beach: balance_beach
            });
            console.log("Day2 fetched!");

        }).catch(err => {
            console.log(err);
            alert("Error when fetching day2!");
        })
    }
    
    render(){
        const listItems = this.state.game_titles_beach;
        const listElementsName = [];
        const listScores = this.state.game_balance_beach;
        const listElementsScore =[];
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
        for(let index = 0; index < listScores.length; index++){
            //console.log(index);
            objectList.push({
                id: index,
                name: listElementsName[index],
                score: listElementsScore[index],
            });
        }
        return(
			<div className="Day2_table">
                <Row className="default-bg full-height">
                <div className="container">
                    Beach Bet Balance
                    <table>
                        <tbody>
                            {objectList.map(obj => {
                                return(
                                    <tr key={obj.id}>
                                        <td>{obj.name}</td>
                                        <td>{obj.score}</td>
                                    </tr>
                                );
                                
                            })}
                        </tbody>
                    </table>
                </div>
                </Row>
            </div>
        )
    }
}