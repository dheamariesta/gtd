// Components
import React, { PropTypes } from 'react';
import { Row, Col } from "react-bootstrap";

import { PageWrap } from '../index';
import  {ContactForm } from '../components/Form';
import { AlertDismissable } from '../components/Alert';

import axios from "axios";



export class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			showAlert: {
				error : false,
				success: false
			},
			message: {
				error: '',
				success: ''
			}
		}

		this.updateError = this.updateError.bind(this);
		this.updateSuccess = this.updateSuccess.bind(this);
		this.dismissErrorAlert = this.dismissErrorAlert.bind(this);
		this.dismissSuccessAlert = this.dismissSuccessAlert.bind(this);
	}

	updateError(errors){
		var errorMessages = [];
		for (const key in errors) {
			if (errors.hasOwnProperty(key)) {
				const value = errors[key];
				for (let i = 0; i < value.length; i++) {
					const message = value[i];
					errorMessages.push(message)
				}
			}
		}
		this.setState({
			errors : errors,
			showAlert : {
				error : true
			},
			message : {
				error : errorMessages
			}
		});
	}

	updateSuccess(success_msg){
		this.setState({
			showAlert : {
				success : true
			},
			message : {
				success: success_msg
			}
		});
	}

	dismissErrorAlert(){
		this.setState({
			showAlert : {
				error : false
			}
		});
	}

	dismissSuccessAlert(){
		this.setState({
			showAlert : {
				success : false
			}
		})
	}

	isEmpty(obj) {
		for(var key in obj) {
			if(obj.hasOwnProperty(key))
				return false;
		}
		return true;
	}

	render() {
		var AlertError = null;
		var AlertSuccess = null;
		const errors = this.state.errors;
		const isError = !this.isEmpty(errors);

		if (isError) {
			const listStyle = {
				'textAlign' : 'left'
			}
			AlertError = (
				<AlertDismissable show={this.state.showAlert.error} onHide={this.dismissErrorAlert}>
					<ul style={listStyle}>
						{this.state.message.error.map(function(message){
							return (
								<li>{message}</li>
							)
						})}
					</ul>

				</AlertDismissable>
			);

		}
		else {
			const paraStyle = {
				'color' : 'black'
			}
			AlertSuccess = (
				<AlertDismissable bsStyle="success" show={this.state.showAlert.success} onHide={this.dismissSuccessAlert}>

					<p style={paraStyle}>{this.state.message.success}</p>
				
				</AlertDismissable>
			);
		}

		return (
			<section id="contact">
				<PageWrap>
					<Row className="default-bg full-height flex-center">
						<Col md={8} xs={12}>
							<h1 className="section-title">Contact Us</h1>
							<div className="form-container">
								<ContactForm 
									actionHandler="/send" 
									onError={this.updateError}
									onSuccess={this.updateSuccess}
								/>
							</div>
							{AlertError}
							{AlertSuccess}
						</Col>
					</Row>
				</PageWrap>
			</section>
		);

	}
}

Contact.propTypes = {
};
