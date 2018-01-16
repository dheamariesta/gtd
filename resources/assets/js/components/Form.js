import React from "react"
import {FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap"

function FieldGroup({ id, label, help, ...props }) {
	return (
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props} />
		</FormGroup>
	);
}

export const ContactForm = (props) => {
    return(
        <form action={props.actionHandler} method="POST">
            <FieldGroup
                id="formControlsName"
                type="text"
                label="Name"
                placeholder="Enter Name"
                name="name"
                required
            />
            <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email address"
                placeholder="Enter email"
                name="email"
                required
            />
            <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Message</ControlLabel>
                <FormControl 
                    componentClass="textarea" 
                    placeholder="Message" 
                    name="Message" 
                    cols="30" 
                    rows="10"
                    required
                />
            </FormGroup>
            <Button type ="submit" bsStyle="primary" bsSize="large" block>
                Submit
            </Button>
        </form>
    )
}