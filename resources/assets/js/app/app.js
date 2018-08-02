// Components
import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import { Grid } from "react-bootstrap";
import { Footer } from "../components/Footer";

// pages
import  Home  from "../pages/Home";
import Exodia from "../pages/Exodia";
import { Score } from "../pages/score";

// cookies
//import { CookiesProvider } from 'react-cookie';

class App extends React.Component {
    constructor(props){
		super(props);
		this.state = {
			isDesktop : true,
		};
		this.updateView = this.updateView.bind(this);

    App.scrollSpy();
	};

	static scrollSpy(){
		$('body').scrollspy({
			target: '#navbar-scrollspy',
			offset: 100
		});
	}
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
    
    render(){
		const isDesktop = this.state.isDesktop;
		return(
			<div className="app">
				<Grid fluid>
					<Router>
						<Switch>
							<Route exact path="/" render = {() => (<Home isDesktop={isDesktop} /> )}/>
              <Route path="/exodia" render={() => (<Exodia />)} />
							<Route exact path="/score" component={Score} />
						</Switch>
					</Router>
				</Grid>
				<Footer />
			</div>
		);
  }
}

export default App;
