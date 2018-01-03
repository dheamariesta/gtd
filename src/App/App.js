import React, { Component } from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

//Import all the pages
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import History from '../pages/History/History';
import Anthem from '../pages/Anthem/Anthem';
import Contact from '../pages/Contact/Contact';
import { TopMenu } from '../components/Menu';

class App extends Component {
	render() {
		return (
			<div id="outer-container" className="App">
				<TopMenu />
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/history" component={History} />
						<Route path="/anthem" component={Anthem} />
						<Route path="/contact" component={Contact} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
