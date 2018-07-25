import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

export class Day1_table extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            game_titles: '',
            game_scores: ''
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
            const titles = response.data.game_titles;
            const scores = response.data.game_scores;
            this.setState({
                game_titles: titles,
                game_scores: scores
            });
            console.log("Day1 fetched!");

        }).catch(err => {
            console.log(err);
            alert("Error!");
        })
    }

    render() {
        const OG_NAME = this.props.OG_NAME;
        const listItems = this.state.game_titles;
        const listScores = this.state.game_scores;
        // console.log(this.state.game_scores);
        // console.log(listItems);
        // const numbers = [[1.1, 1.2], [2.1, 2.2], [3.1, 3.2]];
        // console.log(numbers);
        // const numberList = numbers.map(num => {
        //     console.log(num);
        // });
        const listElementsName = [];
        const listElementsScore =[];
        const objectList = [];

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
        // console.log(listElementsName);

        for(let index = 0; index < listScores.length; index++){
            console.log(index);
            objectList.push({
                id: index,
                name: listElementsName[index],
                score: listElementsScore[index],
            });
        }
        console.log(objectList);



        // const pleaseWork = listElementsName.map((item, index) => {
        //     return (
        //         <tr key={index}>
        //             <td>{item}</td>
        //         </tr>
        //     );
        // });

        // console.log(pleaseWork);
        // const tableRows = listItems.map((item) => {
        //     console.log(item);
        // });
        return (
            <div className="Day1_table">
                <Row className="default-bg full-height">
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
                </Row>
            </div>
        )
    }
}