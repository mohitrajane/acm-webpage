import React, { Component } from 'react';
import './App.css';
import './output.css';
import Navbar from './nav';
import Footer from './footer';
import Contents from './Contents';
import {BrowserRouter as Router,Route} from 'react-router-dom';


class App extends Component{
  render(){
    return(
      <Router>
      <div class="main">
        <Navbar/> 
        <Route exact path="/" component={Contents}/>

        <Footer/>
      </div>
      </Router>
    );
  }
}
export default App;
