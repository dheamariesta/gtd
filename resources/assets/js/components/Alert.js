import React from "react";
import { Alert } from "react-bootstrap";


export class AlertDismissable extends React.Component {
	constructor(props) {
		super(props);
		this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
	}

	handleAlertDismiss() {
		this.props.onHide();
	}

	render() {
	  const {show, children, ...rest } = this.props;
		if (show) {
			return (
				<Alert {...rest}>
					{children}
				</Alert>
			);
        }
		return null;
	}
}

AlertDismissable.defaultProps = {
	bsStyle : 'danger'
};
