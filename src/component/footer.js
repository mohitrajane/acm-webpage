import React from 'react';
import {Link} from 'react-router-dom';
import {AiFillHeart} from 'react-icons/ai';
import {BsFillPeopleFill} from 'react-icons/bs'

const Footer = ()=>{
        return(
            <div className="footer ">
                <div className="min-h-24 py-8 bg-blue-600 text-white text-xl">
                    <h5 className="flex justify-center">Copyright ©ACMFISAT</h5>
                    <h5 className="flex justify-center">Made with <AiFillHeart/> via tailwindcss</h5>
                    <h4 className="flex justify-center">Made by <Link to="/thank"><BsFillPeopleFill/></Link></h4>
                </div>            
            </div>
        );
    }
export default Footer;