import React, { Component } from 'react';
import Right from './copyright-24px.svg';
import {AiFillHeart} from 'react-icons/ai';
import Man from './man.svg';

class Footer extends React.Component{
    render(){
        return(
            <div class="footer">
                <div class="min-h-24 py-8 bg-blue-600 text-white text-xl">
                    <h5 class="flex justify-center">Copyright ©ACMFISAT</h5>
                    <h5 class="flex justify-center">Made with <AiFillHeart/> via tailwindcss</h5>
                    <h5 class="flex justify-center">Created by <a href="https://www.linkedin.com/in/naveen-b-jacob-229a81182/"><img src={Man} /></a></h5>
                </div>            
            </div>
        );
    }
}
export default Footer;