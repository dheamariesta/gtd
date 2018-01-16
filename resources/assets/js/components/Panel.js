import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Panel } from "react-bootstrap";

export class DefaultPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var bodyContainer = '';
        if (this.props.withBody && this.props.body !== '') {
            bodyContainer= (
                <Panel.Body>
                    {this.props.body}
                </Panel.Body>
            );
        }
        else {
            console.error('To include panel body, provide the attribute body (any) and withBody (boolean) to the component <DefaultPanel />!');
        }

        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h1"> 
                        {this.props.title}
                    </Panel.Title>
                </Panel.Heading>
                {bodyContainer}
                {this.props.additionalComponent}
            </Panel>
        );
    }
}

DefaultPanel.defaultProps = {
    title: 'Default Title',
    body: '',
    withBody: false,
    additionalComponent : ''
};

