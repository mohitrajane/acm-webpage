import React, { Component } from 'react';
import {AiFillHeart} from 'react-icons/ai';
import Man from './images/man.svg';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="min-h-24 py-8 bg-blue-600 text-white text-xl">
                    <h5 className="flex justify-center">Copyright ©ACMFISAT</h5>
                    <h5 className="flex justify-center">Made with <AiFillHeart/> via tailwindcss</h5>
                    <h5 className="flex justify-center">Created by <a href="https://www.linkedin.com/in/naveen-b-jacob-229a81182/"><img src={Man} alt="man" /></a></h5>
                </div>            
            </div>
        );
    }
}
export default Footer;