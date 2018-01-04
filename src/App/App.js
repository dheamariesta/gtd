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
import { Sidebar } from '../components/Sidebar';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			isDesktop : false
		};
		this.updateView = this.updateView.bind(this);
	};

	componentDidMount(){
		this.updateView();
		window.addEventListener('resize', this.updateView);
	}

	componentWillUnmount(){
		this.updateView();
		window.removeEventListener('resize', this.updateView);
	}

	updateView(){
		this.setState({
			isDesktop : window.innerWidth > 1200
		});
	}


	render() {
		const isDesktop = this.state.isDesktop;
		if (isDesktop) {
			return (
				<div className="App">
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
			)
		}
		else {
			return (
				<div id="outer-container" className="App">
					<Sidebar />
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
}

export default App;
