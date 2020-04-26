import React, { Component } from 'react';
import logo from './logo.jpg';
// import './nav.css';

class Nav extends Component{
    render(){
        return(
            <div class="navbar" style={{position:"fixed",top:'0px',width:'100%'}}> 
                <nav class="flex bg-gray-100 h-24 pt-8 justify-center">
                    {/*this is for the larger devices */}
                    <div class="largedevices text-blue-600">
                        <a class="p-2">Events</a>   
                        <a class="p-2">Membership</a>   
                        <a class="p-2">Gallery</a>   
                        {/* <img class="h-10px w-12px" src={logo}/> */}
                        <a class="p-2">People</a>
                        <a class="p-2">Contact</a>      
                        <a class="p-2">News</a>              
                    </div>
                </nav>
            </div>
        );
    }
}
export default Nav;
