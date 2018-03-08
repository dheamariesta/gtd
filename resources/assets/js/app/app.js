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

// sections
import { Banner } from "../sections/banner";
import { About } from "../sections/about";
import { History } from "../sections/history";
import { Anthem } from "../sections/anthem";
import { Contact } from "../sections/contact";
import { PageWrap } from "..";
import { Footer } from "../sections/footer";


class App extends React.Component {
    constructor(props){
		super(props);
		this.state = {
			isDesktop : true,
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
    
    render(){
        const isDesktop = this.state.isDesktop;
        if (isDesktop) {
            return(
                <div className="app">
                    <Topbar />
                    <Grid fluid>
						<Banner />
						<About />
						<History />
						<Anthem />
						<Contact />
                    </Grid>
					<Footer />
					{/* <Router>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/history" component={History} />
							<Route path="/anthem" component={Anthem} />
							<Route path="/contact" component={Contact} />
						</Switch>
                	</Router> */}
                </div>
            );
		}

		else {
			return (
				<div id="outer-container" className="app">
					<Sidebar />
					<Grid fluid>
						<PageWrap>
							<Home />
							<About />
							<History />
							<Anthem />
							<Contact />
							<Footer />
						</PageWrap>
					</Grid>
				</div>
			);
		}
    }
}

export default App;