// Components
import React, { PropTypes } from 'react';
import { PageWrap } from '../index';
import  {ContactForm } from '../components/Form';
import axios from "axios";


export class Contact extends React.Component {
	constructor(props) {
		super(props);
		
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
