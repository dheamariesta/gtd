// Components
import React, { PropTypes } from 'react';
import { PageWrap } from '../index';
import  {ContactForm } from '../components/Form';
import axios from "axios";
import { AlertDismissable } from '../components/Alert';


export class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			showAlert: {
				error : false,
				success: false
			}
		}

		this.updateError = this.updateError.bind(this);
		this.updateSuccess = this.updateSuccess.bind(this);
		this.dismissErrorAlert = this.dismissErrorAlert.bind(this);
		this.dismissSuccessAlert = this.dismissSuccessAlert.bind(this);
	}

	updateError(errors){
		this.setState({
			errors : errors,
			showAlert : {
				error : true
			}
		});
	}

	updateSuccess(){
		this.setState({
			showAlert : {
				success : true
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
			const listStyle = {
				'textAlign' : 'left'
			}
			AlertError = (
				<AlertDismissable show={this.state.showAlert.error} onHide={this.dismissErrorAlert}>
					<ul style={listStyle}>
						{errorMessages.map(function(message){
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

					<p style={paraStyle}>Thank you for contacting us! We will get back to you soon!</p>
				
				</AlertDismissable>
			);
		}

		return (
			<PageWrap>
				<div className="row default-bg full-height">
					<div className="col-md-offset-2 col-md-8 col-xs-12">
						<h1>Contact Us</h1>
						<div className="form-container">
							<ContactForm 
								actionHandler="/send" 
								onError={this.updateError}
								onSuccess={this.updateSuccess}
							/>
						</div>
						{AlertError}
						{AlertSuccess}
					</div>
				</div>
			</PageWrap>
		);

	}
}

Contact.propTypes = {
};
