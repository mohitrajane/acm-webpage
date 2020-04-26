import React, { Component } from 'react';
import './App.css';
import './output.css';
import Navbar from './nav';
import Footer from './footer';
import Main from './main_page';
import Contents from './Contents';


class App extends Component{
  render(){
    return(
      <div class="main">
        <Navbar/> 
        <Main/>
        <Contents/>
        <Footer/>
      </div>
    );
  }
}
export default App;
