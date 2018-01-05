import React, { Component } from 'react';

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
import { Topbar } from '../components/Topbar';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			isDesktop : false,
			activeMenu: '/'
		};
		this.updateView = this.updateView.bind(this);
		this.getActiveMenu = this.getActiveMenu.bind(this);
	};

	componentDidMount(){
		this.updateView();
		window.addEventListener('resize', this.updateView);
		this.getActiveMenu();
	}

	componentWillUnmount(){
		this.updateView();
		window.removeEventListener('resize', this.updateView);
	}

	getActiveMenu(){
		switch (location.pathname) {
			case '/':
				this.setState({
					activeMenu: '/'
				});
				break;
			case '/about':
				this.setState({
					activeMenu: '/about'
				});
				break;
			
			case '/history':
				this.setState({
					activeMenu: '/history'
				});
				break;
			
			case '/anthem':
				this.setState({
					activeMenu: '/anthem'
				});
				break;

			case '/contact':
				this.setState({
					activeMenu: '/contact'
				});
				break;
		
			default:
				break;
		}
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
					<Topbar activeMenu={this.state.activeMenu} />
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
