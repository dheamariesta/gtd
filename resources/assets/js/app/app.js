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
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/footer";
import { PageWrap } from "..";

// pages
import { Home } from "../pages/Home";


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
        if (isDesktop) {
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

		else {
			return (
				<div id="outer-container" className="app">
					<Sidebar />
					<Grid fluid>
						<PageWrap>
							<Router>
								<Switch>
									<Route exact path="/" component={Home} />
									{/* <Route path="/about" component={About} />
									<Route path="/history" component={History} />
									<Route path="/anthem" component={Anthem} />
									<Route path="/contact" component={Contact} /> */}
								</Switch>
							</Router>
						</PageWrap>
					</Grid>
					<Footer />
				</div>
			);
		}
    }
}

export default App;