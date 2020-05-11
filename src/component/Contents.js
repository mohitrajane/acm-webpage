import React, { Component } from 'react';
import Man from './images/man.svg';
import Phone from './images/phone.svg';
import logo from './images/Acmlogo.jpeg';


class contents extends Component{
    render(){
        return(
            <div className="mt-32">
                {/*landing page image*/}
                <div>
                <img className="h-full mb-3" alt="main_logo"src={logo}/>
                </div>
                {/*this div is for the about element */}
                <div className="bg-blue-600 text-white py-3">
                    <div className="lg:flex flex-wrap px-8">
                        {/*Title and the heading for the ACM */}
                        <div className="sm:w-full lg:w-1/2">
                            <h1 className="flex justify-center text-2xl pt-4">Why ACM</h1>
                            <p className="lg:px-32 py-6 flex text-lg justify-center">ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, 
                            and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through 
                            strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth 
                            of its members by providing opportunities for life‐long learning, career development, and professional networking.</p>
                        </div>
                        {/*Title and the heading for the ACM FISAT*/}
                        <div className="sm:w-full lg:w-1/2">
                        <h1 className="flex justify-center text-2xl pt-4">ACM FISAT</h1>
                        <p className="lg:px-32 py-6 flex text-lg justify-center">ACM Students Chapter FISAT is the biggest Computer Science Students Chapter in FISAT.
                        It even consist a group where use can ask and clarify your doubts or even others doubts as well. The group even consist of teaching faculty
                        where even they are willing to help and guide you through your various doubts and even helps in your projects. We are always ready to help you.
                        To join in our community use the buton given below.</p>
                        </div>
                    </div>
                    {/*this div is for the bottom button */}
                    <div className="button rounded flex justify-center pb-4">
                        <button className="bg-gray-200 text-black rounded p-2 h-16 w-24" ><a href="https://www.acm.org/membership/join">Join Here</a></button>   
                    </div>
                </div> 
                {/*Details about the present members with their numbers and name*/}
                <div className="py-4">
                    <div className="flex justify-center heading py-3">
                        <h1>
                            THANKS FOR VISITING US
                        </h1>
                    </div>
                    <div className="flex justify-center">
                        <hr className="w-64 border-2"/>
                    </div>
                </div>
                <div className="py-4 lg:flex flex-wrap">

                    {/*Acm directives contact*/}
                        <div className="lg:w-full">
                            <h1 className="flex justify-center text-2xl">Contact Us</h1>
                            <p className="py-3 flex justify-center"><img src={Man} alt="man png"/>Yadhu Krishnan(Chairman) <img src={Phone} alt="phone png"/>828-153-7729</p>
                            <p className="py-3 flex justify-center"><img src={Man} alt="man png"/>Aswin S (Secretary) <img src={Phone} alt="phone png"/>8281502849</p>
                            <p className="py-3 flex justify-center"><img src={Man} alt="man png"/>Visrutha Aruhnthathi(Vice Chairman) <img src={Phone} alt="phone png"/>9495497126</p>
                            <p className="py-3 flex justify-center"><img src={Man} alt="man png"/>Naveen B Jacob(Tresurer) <img src={Phone} alt="phone png"/>8606330293</p>

                        </div>
                </div>

            </div>
        );
    }
}
export default contents;