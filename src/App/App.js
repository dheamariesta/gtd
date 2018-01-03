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
import HistoryPage from '../pages/History/HistoryPage';
import Anthem from '../pages/Anthem/Anthem';
import Contact from '../pages/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/history" component={HistoryPage}/>
            <Route path="/anthem" component={Anthem}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
