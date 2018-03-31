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
import { Footer } from "../components/footer";

// pages
import { Home } from "../pages/Home";


class App extends React.Component {
    constructor(props){
		super(props);
	};

	scrollSpy(){
		$('body').scrollspy({
			target: '#navbar-scrollspy',
			offset: 100
		});
	}
    
    render(){
		return(
			<div className="app">
				<Topbar />
				<Grid fluid>
					<Router>
						<Switch>
							<Route exact path="/" component={Home} />
							{/* <Route path="/about" component={About} />
							<Route path="/history" component={History} />
							<Route path="/anthem" component={Anthem} />
							<Route path="/contact" component={Contact} /> */}
						</Switch>
					</Router>
				</Grid>
				<Footer />
			</div>
		);
    }
}

export default App;