// Components
import React, { PropTypes } from 'react';
import { PageWrap } from '../index';
import  {ContactForm } from '../components/Form';
import axios from "axios";


export class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: []
		}

		this.updateError = this.updateError.bind(this);
	}

	updateError(errors){
		this.setState({
			errors : errors
		});
	}

	render() {
		return (
			<PageWrap>
                <div className="row default-bg full-height">
                    <div className="col-md-offset-2 col-md-8 col-xs-12">
                        <h1>Contact Us</h1>
                        <div className="form-container">
                            <ContactForm 
								actionHandler="/send" 
								onError={this.updateError}
							/>
                        </div>
                    </div>
                </div>

			</PageWrap>
		);
	}
}

Contact.propTypes = {
};
