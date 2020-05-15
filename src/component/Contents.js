import React, { Component } from 'react';
import './contents.css'
import Man from './images/man.svg';
import Phone from './images/phone.svg';
import Mohit from './images/mohit.jpg'
import logo from './images/Acmlogo.jpeg';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';


class contents extends Component{
    render(){
        return(
            <div class="mt-32">
                {/*landing page image*/}
                <div>
                <img class="h-full mb-3" src={logo}/>
                </div>
                {/*this div is for the about element */}
                <div class="bg-blue-600 text-white py-3">
                    <div class="lg:flex flex-wrap px-8">
                        {/*Title and the heading for the ACM */}
                        <div class="sm:w-full lg:w-1/2">
                            <h1 class="flex justify-center text-2xl pt-4">Why ACM</h1>
                            <p class="lg:px-32 py-6 flex text-lg justify-center">ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, 
                            and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through 
                            strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth 
                            of its members by providing opportunities for life‐long learning, career development, and professional networking.</p>
                        </div>
                        {/*Title and the heading for the ACM FISAT*/}
                        <div class="sm:w-full lg:w-1/2">
                        <h1 class="flex justify-center text-2xl pt-4">ACM FISAT</h1>
                        <p class="lg:px-32 py-6 flex text-lg justify-center">ACM Students Chapter FISAT is the biggest Computer Science Students Chapter in FISAT.
                        It even consist a group where use can ask and clarify your doubts or even others doubts as well. The group even consist of teaching faculty
                        where even they are willing to help and guide you through your various doubts and even helps in your projects. We are always ready to help you.
                        To join in our community use the buton given below.</p>
                        </div>
                    </div>
                    {/*this div is for the bottom button */}
                    <div class="button rounded flex justify-center pb-4">
                        <button class="bg-gray-200 text-black rounded p-2 h-16 w-24" ><a href="https://www.acm.org/membership/join">Join Here</a></button>   
                    </div>
                </div> 
                {/*Details about the present members with their numbers and name*/}
                <div class="py-4">
                    <div class="flex justify-center heading py-3">
                        <h1>
                            THANKS FOR VISITING US
                        </h1>
                    </div>
                    <div class="flex justify-center">
                        <hr class="w-64 border-2"/>
                    </div>
                </div>
                <div class="py-4 lg:flex flex-wrap">

                    {/*Acm directives contact*/}
                    <h1 class=" flex justify-center text-2xl my-5">Contact Us</h1>
                    <div className="lg:w-full flex flex-col sm:flex-row items-center justify-center">
                        <div className="flex px-4 mx-4 flex-col text-center justify-between h-full w-full main-test" style={{backgroundImage:`url(${Mohit})`}}>
                            <div>
                                <p className="mt-12 font-bold ">Mohit Rajan E</p>
                                <p className="mt-2">Chairman</p>
                            </div>
                            <div className="mb-12 font-light">
                                <div className="flex justify-center my-2">
                                    <a href="http://linkden.com" target='__blank'><FaLinkedinIn className="mx-2" /></a>{/*<p className="mx-2"></p>*/}
                                    <a href="http://github.com" target='__blank'><FaGithub className="mx-2" /></a>{/*<p className="mx-2"></p>*/}
                                    
                                </div>
                                <p>+91 9037 969 499</p>
                            </div>
                        </div>
                        <div className="flex px-4 mx-4 flex-col text-center justify-between h-full w-full main-test" style={{backgroundImage:`url(${Mohit})`}}>
                            <div>
                                <p className="mt-12 font-bold ">Mohit Rajan E</p>
                                <p className="mt-2">Chairman</p>
                            </div>
                            <div className="mb-12 font-light">
                                <div className="flex justify-center my-2">
                                    <a href="http://linkden.com" target='__blank'><FaLinkedinIn className="mx-2" /></a>{/*<p className="mx-2"></p>*/}
                                    <a href="http://github.com" target='__blank'><FaGithub className="mx-2" /></a>{/*<p className="mx-2"></p>*/}
                                    
                                </div>
                                <p>+91 9037 969 499</p>
                            </div>
                        </div>
                        <div className="flex px-4 mx-4 flex-col text-center justify-between h-full w-full main-test" style={{backgroundImage:`url(${Mohit})`}}>
                            <div>
                                <p className="mt-12 font-bold ">Mohit Rajan E</p>
                                <p className="mt-2">Chairman</p>
                            </div>
                            <div className="mb-12 font-light">
                                <div className="flex justify-center my-2">
                                    <a href="http://linkden.com" target='__blank'><FaLinkedinIn className="mx-2" /></a>{/*<p className="mx-2"></p>*/}
                                    <a href="http://github.com" target='__blank'><FaGithub className="mx-2" /></a>{/*<p className="mx-2"></p>*/}
                                    
                                </div>
                                <p>+91 9037 969 499</p>
                            </div>
                        </div>
                        <div className="flex px-4 mx-4 flex-col text-center justify-between h-full w-full main-test" style={{backgroundImage:`url(${Mohit})`}}>
                            <div>
                                <p className="mt-12 font-bold ">Mohit Rajan E</p>
                                <p className="mt-2">Chairman</p>
                            </div>
                            <div className="mb-12 font-light">
                                <div className="flex justify-center my-2">
                                    <a href="http://linkden.com" target='__blank'><FaLinkedinIn className="mx-2" /></a>{/*<p className="mx-2"></p>*/}
                                    <a href="http://github.com" target='__blank'><FaGithub className="mx-2" /></a>{/*<p className="mx-2"></p>*/}
                                    
                                </div>
                                <p>+91 9037 969 499</p>
                            </div>
                        </div>
                                                <div className="flex px-4 mx-4 flex-col text-center justify-between h-full w-full main-test" style={{backgroundImage:`url(${Mohit})`}}>
                            <div>
                                <p className="mt-12 font-bold ">Mohit Rajan E</p>
                                <p className="mt-2">Chairman</p>
                            </div>
                            <div className="mb-12 font-light">
                                <div className="flex justify-center my-2">
                                    <a href="http://linkden.com" target='__blank'><FaLinkedinIn className="mx-2" /></a>{/*<p className="mx-2"></p>*/}
                                    <a href="http://github.com" target='__blank'><FaGithub className="mx-2" /></a>{/*<p className="mx-2"></p>*/}
                                    
                                </div>
                                <p>+91 9037 969 499</p>
                            </div>
                        </div>
    
                    </div>
                </div>

            </div>
        );
    }
}
export default contents;