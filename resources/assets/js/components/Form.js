import React from "react"
import {FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import axios from "axios";
import { AlertDismissable } from "./Alert";

function FieldGroup({ id, label, help, ...props }) {
	return (
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props} />
		</FormGroup>
	);
}

export class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email: '',
            message: '',
        }

        this.handleSubmit= this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post('/send', {
			name : this.state.name,
			email : this.state.email,
			message : this.state.message
		})
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    const errors = error.response.data.errors;
                    this.props.onError(errors);
                    console.log(error.response.data);
                    console.log(error.response.headers);
                }
                else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            }.bind(this));
    }

    onChangeName(e){
        const name = e.target.value;
        this.setState({
            name : name
        })
    }

    onChangeEmail(e){
        const email = e.target.value;
        this.setState({
            email : email
        })
    }

    onChangeMessage(e){
        const message = e.target.value;
        this.setState({
            message: message
        });
    }

    render(){
        return(
            <form action={this.props.actionHandler} method="POST" onSubmit={this.handleSubmit}>
                <FieldGroup
                    id="formControlsName"
                    type="text"
                    label="Name"
                    placeholder="Enter Name"
                    name="name"
                    onChange = {this.onChangeName}
    
                />
                <FieldGroup
                    id="formControlsEmail"
                    type="email"
                    label="Email address"
                    placeholder="Enter email"
                    name="email"
                    onChange= {this.onChangeEmail}
    
                />
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Message</ControlLabel>
                    <FormControl 
                        componentClass="textarea" 
                        placeholder="Message" 
                        name="message" 
                        cols="30" 
                        rows="10"
                        onChange={this.onChangeMessage}
    
                    />
                </FormGroup>
                <Button type ="submit" bsStyle="primary" bsSize="large" block>
                    Submit
                </Button>
            </form>
        )
    }
}