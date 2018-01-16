import React, { PropTypes } from 'react';
import { PageWrap } from '../index';

export class History extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		<PageWrap>
            <div className="row default-bg full-height">
                <div className="col-md-12">
                    <h1>History</h1>
                </div>
            </div>
		</PageWrap>
		);
	}
}

History.propTypes = {
};
