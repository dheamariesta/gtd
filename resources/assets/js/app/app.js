// Components
import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

import { Grid } from "react-bootstrap";
import { Topbar } from "../components/Topbar";
import { Sidebar } from "../components/Sidebar";

// pages
import { Home } from "../pages/Home";
import { About } from "../pages/about";
import { History } from "../pages/History";
import { Anthem } from "../pages/Anthem";
import { Contact } from "../pages/Contact";


class App extends React.Component {
    constructor(props){
		super(props);
		this.state = {
			isDesktop : true,
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
		this.setState({
			activeMenu: location.pathname
		});
	}

	updateView(){
		this.setState({
			isDesktop : window.innerWidth > 1200
		});
    }
    
    render(){
        const isDesktop = this.state.isDesktop;
        if (isDesktop) {
            return(
                <div className="app">
                    <Topbar activeMenu={this.state.activeMenu} />
                    <Grid fluid>
                        <Router>
                            <Switch>
								<Route exact path="/" component={Home} />
								<Route path="/about" component={About} />
								<Route path="/history" component={History} />
								<Route path="/anthem" component={Anthem} />
								<Route path="/contact" component={Contact} />
                            </Switch>
                        </Router>
                    </Grid>
                </div>
            );
            
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