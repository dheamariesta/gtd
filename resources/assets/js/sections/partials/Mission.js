import React from "react";
import { Row, Col } from "react-bootstrap";

export class Mission extends React.Component {
    render(){
        return(
			<div>
				<h1 className="title">Misi Kami</h1>
				<div className="mission-container clearfix">
					<div className="col-md-3 col-xs-12 mission-item">
						<img src="/images/ball.svg" alt="ball" className="img-responsive logo"/>
						<p>
							To be an enjoyable, bonded and organised freshmen orientation
						</p>
					</div>
					<div className="col-md-3 col-xs-12 mission-item">
						<img src="/images/relationship.svg" alt="ball" className="img-responsive logo"/>
						<p>
							To improve the relation among freshmen and seniors
						</p>
					</div>
					<div className="col-md-3 col-xs-12 mission-item">
						<img src="/images/improve.png" alt="ball" className="img-responsive logo"/>
						<p>
							To provide an opportunity for self-improvement for every committee members and participants of GTD
						</p>
					</div>
					<div className="col-md-3 col-xs-12 mission-item">
						<img src="/images/merlion.svg" alt="ball" className="img-responsive logo"/>
						<p>
							To familiarize the freshmen to the life and culture in Singapore
						</p>
					</div>
				</div>
			</div>
        )
    }
}