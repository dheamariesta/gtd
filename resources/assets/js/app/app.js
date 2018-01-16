// Components
import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

import { Grid } from "react-bootstrap";

// pages
import { Home } from "../pages/Home";
// import { Contact } from "../pages/Contact";


class App extends React.Component {
    render(){
        return(
            <div className="app">
                <Grid>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            {/* <Route path="/contact" component={Contact} /> */}
                        </Switch>
                    </Router>
                </Grid>
            </div>
        )
    }
}

export default App;