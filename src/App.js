import React, { Component } from 'react';
import './App.css';
import './output.css';
import Navbar from './nav';
import Footer from './footer';
import Contents from './Contents';
import Event from './event';
import People from './people'
import {BrowserRouter as Router,Route} from 'react-router-dom';


class App extends Component{
  render(){
    return(
      <Router>
      <div class="main">
        <Navbar/>
        <div class="mt-24">
          <Route exact path="/" component={Contents}/>
          <Route exact path="/people" component={People}/>
          <Route exact path="/event" component={Event}/>
        </div> 
        <Footer/>
      </div>
      </Router>
    );
  }
}
export default App;
