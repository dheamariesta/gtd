// Components
import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import $ from "jquery";
import { Grid } from "react-bootstrap";
import { Topbar } from "../components/Topbar";
import { Footer } from "../components/Footer";

// pages
import { Home } from "../pages/Home";
import { Score } from "../pages/score";


class App extends React.Component {
    constructor(props){
		super(props);
		this.state = {
			isDesktop : true,
		};
		this.updateView = this.updateView.bind(this);
	};

	scrollSpy(){
		$('body').scrollspy({
			target: '#navbar-scrollspy',
			offset: 100
		});
	}
	componentDidMount(){
		this.updateView();
		window.addEventListener('resize', this.updateView);
		this.scrollSpy();
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
    
    render(){
		const isDesktop = this.state.isDesktop;
		return(
			<div className="app">
				<Topbar isDesktop={isDesktop} />
				<Grid fluid>
					<Router>
						<Switch>
							<Route exact path="/" render = {() => (<Home isDesktop={isDesktop} /> )}/>
							{/* <Route path="/about" component={About} />
							<Route path="/history" component={History} />
							<Route path="/anthem" component={Anthem} />
							<Route path="/contact" component={Contact} /> */}
						</Switch>
					</Router>
					<Router>
						<Switch>
							<Route exact path="/score" render = {() => (<Score /> )}/>
						</Switch>
					</Router>
				</Grid>
				<Footer />
			</div>
		);
    }
}

export default App;
