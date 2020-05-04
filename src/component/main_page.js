import React, { Component } from 'react';
import logo from './images/Acmlogo.jpeg';

class Main extends Component{
    render(){
        return(
            <div>
                <img class="h-full" src={logo}/>
            </div>
        );
    }
}
export default Main;