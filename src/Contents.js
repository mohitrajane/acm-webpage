import React, { Component } from 'react';
import Man from './man.svg';
import Phone from './phone.svg';

class contents extends Component{
    render(){
        return(
            <div>
                {/*this div is for the about element */}
                <div class="bg-blue-600 text-white py-3">
                    <div class="flex flex-wrap">
                        {/*Title and the heading for the ACM */}
                        <div class="w-1/2">
                            <h1 class="flex justify-center">Why ACM</h1>
                            <p class="px-64 pt-6 pb-6 flex justify-center">ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, 
                            and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through 
                            strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth 
                            of its members by providing opportunities for life‐long learning, career development, and professional networking.</p>
                        </div>
                        {/*Title and the heading for the ACM FISAT*/}
                        <div class="w-1/2">
                        <h1 class="flex justify-center">ACM FISAT</h1>
                        <p class="px-64 pt-6 pb-6 flex justify-center">ACM Students Chapter FISAT is the biggest Computer Science Students Chapter in FISAT.
                        It even consist a group where use can ask and clarify your doubts or even others doubts as well. The group also consist of teaching faculty
                        where even they are willing to help and guide you through your various doubts and even helps in your projects. We are always ready to help you.
                        To join in our community use the buton given below.</p>
                        </div>
                    </div>
                    {/*this div is for the bottom button */}
                    <div class="button rounded flex justify-center ">
                        <button class="bg-gray-200 text-black rounded p-2" onClick="">Join Here</button>   
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
                    {/*Contact for ACM present details*/}
                    <div class="container flex flex-wrap justify-center">
                        <div class="w-1/2">
                            <p class="flex py-3"><img src={Man}/>Yadu Krishnan(Chairman)</p>
                            <p class="flex py-3"><img src={Phone}/>8281537729</p>
                            <p class="flex py-3"><img src={Man}/>Aswin s</p>
                            <p class="flex py-3"><img src={Phone}/>8281537729</p>
                            <p class="flex py-3"><img src={Man}/>Visrutha Arunthathi</p>
                            <p class="flex py-3"><img src={Phone}/>8281537729</p>
                            <p class="flex py-3"><img src={Man}/>Naveen B Jacob(Treasurer)</p>
                            <p class="flex py-3"><img src={Phone}/>8606330293</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default contents;