import React from "react";

// Sections
import { Banner } from "../sections/banner";
import { About } from "../sections/about";
import { History } from "../sections/history";
import { Anthem } from "../sections/anthem";
import { Contact } from "../sections/contact";
import { QScore } from "../sections/Qscore";

export class Home extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<Banner />
				<About isDesktop={this.props.isDesktop} />
			</div>
		)
	}
} 