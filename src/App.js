import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header'

import RecipeTester from './pages/recipeTester/RecipeTester'
import DamageTester from './pages/damageTester/DamageTester'

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
            <Header/>
            
            <Route exact path="/" render={props => (<h1>Home</h1>)} />
            
            <Route path="/recipetester" component={RecipeTester} />

            <Route path="/damagetester" component={DamageTester} />
        </div>
      </Router>
    );
  }
  
}

export default App;
