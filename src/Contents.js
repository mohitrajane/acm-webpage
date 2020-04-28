import React, { Component } from 'react';
import Man from './man.svg';
import Phone from './phone.svg';
import logo from './Acmlogo.jpeg';
import {FiInstagram} from 'react-icons/fi';

class contents extends Component{
    render(){
        return(
            <div>
                {/*landing page image*/}
                <div>
                <img class="h-full" src={logo}/>
                </div>
                {/*this div is for the about element */}
                <div class="bg-blue-600 text-white py-3">
                    <div class="flex flex-wrap">
                        {/*Title and the heading for the ACM */}
                        <div class="w-1/2">
                            <h1 class="flex justify-center text-2xl pt-4">Why ACM</h1>
                            <p class="px-32 pt-6 pb-6 flex text-lg justify-center">ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, 
                            and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through 
                            strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth 
                            of its members by providing opportunities for life‐long learning, career development, and professional networking.</p>
                        </div>
                        {/*Title and the heading for the ACM FISAT*/}
                        <div class="w-1/2">
                        <h1 class="flex justify-center text-2xl pt-4">ACM FISAT</h1>
                        <p class="px-32 pt-6 pb-6 flex text-lg justify-center">ACM Students Chapter FISAT is the biggest Computer Science Students Chapter in FISAT.
                        It even consist a group where use can ask and clarify your doubts or even others doubts as well. The group also consist of teaching faculty
                        where even they are willing to help and guide you through your various doubts and even helps in your projects. We are always ready to help you.
                        To join in our community use the buton given below.</p>
                        </div>
                    </div>
                    {/*this div is for the bottom button */}
                    <div class="button rounded flex justify-center pb-4">
                        <button class="bg-gray-200 text-black rounded p-2" ><a href="https://www.acm.org/membership/join">Join Here</a></button>   
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
                <div class="flex flex-wrap py-4">
                {/*Acm directives contact*/}
                    <div class="w-1/2">
                        <h1 class="flex justify-center text-2xl">Contact Us</h1>
                        <p class="flex justify-center text-lg py-2"><img src={Man}/>Yadhu Krishnan</p>
                        <p class="flex justify-center py-2"><img src={Phone}/>0123456789</p>
                        <p class="flex justify-center py-2"><img src={Man}/>Yadhu Krishnan</p>
                        <p class="flex justify-center py-2"><img src={Phone}/>0123456789</p>
                        <p class="flex justify-center py-2"><img src={Man}/>Yadhu Krishnan</p>
                        <p class="flex justify-center py-2"><img src={Phone}/>0123456789</p>
                        <p class="flex justify-center py-2"><img src={Man}/>Yadhu Krishnan</p>
                        <p class="flex justify-center py-2"><img src={Phone}/>0123456789</p>
                        <p class="flex justify-center py-2"><img src={Man}/>Yadhu Krishnan</p>
                        <p class="flex justify-center py-2"><img src={Phone}/>0123456789</p>
                    </div>
                    <div class="w-1/2">
                        <h1 class="flex justify-center text-2xl">Follow Us</h1>

                    </div>

                </div>

            </div>
        );
    }
}
export default contents;