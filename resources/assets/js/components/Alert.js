import React from "react";
import { Alert, Button } from "react-bootstrap";


export class AlertDismissable extends React.Component {
	constructor(...args) {
		super(...args);

		this.handleAlertShow = this.handleAlertShow.bind(this);
		this.handleAlertDismiss = this.handleAlertDismiss.bind(this);

		this.state = {
			alertVisible: true
		};
	}

	handleAlertDismiss() {
		this.setState({ alertVisible: false });
	}

	handleAlertShow() {
		this.setState({ alertVisible: true });
	}

	render() {
		if (this.state.alertVisible) {
			return (
				<Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
					<h4>Oh snap! You got an error!</h4>

					{this.props.children}
					{/* <p>
						<Button bsStyle="danger">Take this action</Button>
						<span> or </span>
						<Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
					</p> */}
				</Alert>
			);
        }
        return null;
	}
}
