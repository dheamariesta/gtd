import React from "react";
import { Alert, Button } from "react-bootstrap";


export class AlertDismissable extends React.Component {
	constructor(...args) {
		super(...args);

		this.handleAlertDismiss = this.handleAlertDismiss.bind(this);

	}

	handleAlertDismiss() {
		this.props.onHide();
	}

	render() {
		if (this.props.show) {
			return (
				<Alert bsStyle={this.props.bsStyle} onDismiss={this.handleAlertDismiss}>

					{this.props.children}
					
				</Alert>
			);
        }
		return null;
	}
}

AlertDismissable.defaultProps = {
	bsStyle : 'danger'
}
