import React, { Component } from 'react';
import './App.css';
import './output.css';
import Navbar from './component/nav';
import Footer from './component/footer';
import Contents from './component/Contents';
import Event from './component/event';
import People from './component/people';


import {BrowserRouter as Router,Route} from 'react-router-dom';



class App extends Component{
  render(){
    return(
      <Router>
      <div className="main">
        <Navbar/>
        <div className="md:mt-24">
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
