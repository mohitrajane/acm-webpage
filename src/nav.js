import React, { Component } from 'react';
import logo from './logo.png';
import {Link} from 'react-router-dom';
import Menu from './menu-24px.svg';



class Nav extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:false
        };
        this.showContent = this.showContent.bind(this);
    }
    showContent(){
        this.setState({isOpen: !this.state.isOpen});
        console.log(this.state.isOpen);
    }
    render(){
        return(
            <div>
                {/*This is the code for the navbar for the smaller devices */}
                <div class="smalldevice sm:block md:hidden lg:hidden bg-gray-100 text-blue-600" id="myTopnav">
                    <div class="flex flex-wrap">
                        <Link to="/">
                            <img class="h-16 w-16 mx-4 mt-4" src={logo}/>
                        </Link> 
                        <button onClick={this.showContent}>
                            <img src={Menu}/>
                        </button>
                    </div>
                    {this.state.isOpen?
                        <div class="dropdownelements grid-cols-1" id="Content">
                            <Link>
                                <a>Events</a>
                            </Link><br/>
                            <Link>
                                <a>Gallery</a>
                            </Link><br/>
                            <Link to="/people">
                                <a>People</a>
                            </Link><br/>
                            <Link>
                                <a>Contact</a>
                            </Link><br/>

                            <Link>
                                <a>Events</a>
                            </Link><br/>
                        </div>
                    :''
                    }
                </div>
                {/*This is the code for the navbar for the larger devices */}
                <div class="topnavbar hidden md:block lg:block" style={{position:"fixed",top:"0px",width:'100%'}}> 
                    <nav class="flex bg-gray-100 h-24 justify-center">
                        {/*this is for the larger devices */}
                        <div class="largedevices text-blue-600 flex">
                            <Link class="mt-8" to="/event">
                            <a class="px-2 mx-4">Events</a>   
                            </Link>
                            <a class="px-2 mx-4 mt-8" href="https://www.acm.org/membership/join">Membership</a>   
                            <Link class="mt-8">
                            <a class="px-2 mx-4">Gallery</a>  
                            </Link>
                            <Link to="/">
                            <img class="h-16 w-16 mx-4 mt-4" src={logo}/>
                            </Link> 
                            <Link class="mt-8" to="/People">
                            <a class="px-2 mx-4">People</a>
                            </Link>
                            <Link class="mt-8">
                            <a class="px-2 mx-4">Contact</a>
                            </Link>   
                            <Link class="mt-8">
                            <a class="px-2 mx-4">News</a>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
export default Nav;
