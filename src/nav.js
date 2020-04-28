import React, { Component } from 'react';
import logo from './logo.jpg';
import {Link} from 'react-router-dom';
// import './nav.css';

class Nav extends Component{
    render(){
        return(
            <div class="navbar" style={{position:"fixed",top:'0px',width:'100%'}}> 
                <nav class="flex bg-gray-100 h-24 pt-8 justify-center">
                    {/*this is for the larger devices */}
                    <div class="largedevices text-blue-600 flex">
                        <Link to="www.google.com">
                        <a class="px-2">Events</a>   
                        </Link>
                        <Link>
                        <a class="px-2">Membership</a>   
                        </Link>
                        <Link>
                        <a class="px-2">Gallery</a>  
                        </Link>
                        <Link to="/">
                        <img class="h-16 w-16 pb-2" src={logo}/>
                        </Link> 
                        <Link>
                        <a class="px-2">People</a>
                        </Link>
                        <Link>
                        <a class="px-2">Contact</a>
                        </Link>   
                        <Link>
                        <a class="px-2">News</a>
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Nav;
