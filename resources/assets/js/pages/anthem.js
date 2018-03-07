// Component
import React, { PropTypes } from 'react';
import { PageWrap } from '../index';



export class Anthem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="anthem">
				<PageWrap>
					<div className="row default-bg full-height flex-center">
						<div className="col-md-12">
							<h1>Get Together Day's Anthem</h1>

							<div className="anthem-content">
								<h3>Verse</h3>
								<p>
									From different places, different times <br/>
									With a common goal in our minds <br/>
									We want to enjoy this moment while it lasts <br/>
									Have you ever stopped and wonder why <br/>
									That now we can share a common sky <br/>
									So many of us with different childhoods <br/>
									Different dreams, different lives <br/>
								</p>
								
								<h3>Chorus</h3>
								<p>
									I know now what the answer is <br/>
									I'm sure I'm gonna miss <br/>
									This special day when we get together <br/>
									As clouds drift and seasons flee <br/>
									We will porbably not meet <br/>
									And different lives we'll lives <br/>
									No once we'll forget this great day we have <br/>
								</p>
							</div>
						</div>
					</div>
				</PageWrap>
			</section>
		);
	}
}

Anthem.propTypes = {
};
