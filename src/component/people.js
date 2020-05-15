import React, { Component } from 'react';
import Heads   from './Heads';



import {AiFillGitlab,AiFillLinkedin} from 'react-icons/ai';

class People extends Component{
    render(){
        return(
        <div className="bg-gray-200 text-blue-600">

            {/*heading*/}
            <div>
            <p className="flex justify-center text-2xl text-blue">ACM heads for the respective years</p>
            <Heads/>
            <p className="flex justify-center text-xl text-blue">People stood up with ACM no matter what
            </p>
            </div>
            {/*---------------------------------------For the people cards----------------------------------------------------*/}
            <div className="flex flex-wrap justify-center text-blue-600 py-2">
                {/*Card 1 starts here*/}
                <div className="md:px-2 py-2 lg:px-2 py-2 w-64">
                    <div className="max-w-sm rounded overflow-hidden bg-gray-100 shadow-lg">
                        <img className="w-full" src="images/mohit.jpg" alt="Mohit rajan"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Mohit Rajan E</div>

                        </div>
                        <div className="px-6 py-4 flex justify-center">
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><AiFillGitlab/></span>
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"><AiFillLinkedin/></span>
                        </div>
                    </div>
                </div>
                {/*card 1 ends here*/}

                {/*Card 2 starts here*/}
                <div className="md:px-2 py-2 lg:px-2 py-2 w-64">
                    <div className="max-w-sm rounded overflow-hidden bg-gray-100 shadow-lg">
                        <img className="w-full" src="images/leo.png" alt="Leo varghese"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Leo Varghese</div>

                        </div>
                        <div className="px-6 py-4 flex justify-center">
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><AiFillGitlab/></span>
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"><AiFillLinkedin/></span>
                        </div>
                    </div>
                </div>
                {/*card 2 ends here*/}
                {/*Card 3 starts here*/}
                <div className="md:px-2 py-2 lg:px-2 py-2 w-64">
                    <div className="max-w-sm rounded overflow-hidden bg-gray-100 shadow-lg">
                        <img className="w-full" src="images/nandhini.jpeg" alt="Nandini"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Nandini Menon</div>

                        </div>
                        <div className="px-6 py-4 flex justify-center">
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><AiFillGitlab/></span>
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"><AiFillLinkedin/></span>
                        </div>
                    </div>
                </div>
                {/*card 3 ends here*/}
                {/*Card 4 starts here*/}
                <div className="md:px-2 py-2 lg:px-2 py-2 w-64">
                    <div className="max-w-sm rounded overflow-hidden bg-gray-100 shadow-lg">
                        <img className="w-full" src="images/paul.jpg" alt="Sandeep"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Sandeep</div>

                        </div>
                        <div className="px-6 py-4 flex justify-center">
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><AiFillGitlab/></span>
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"><AiFillLinkedin/></span>
                        </div>
                    </div>
                </div>
                {/*card 4 ends here*/}
                {/*Card 5 starts here*/}
                <div className="md:px-2 py-2 lg:px-2 py-2 w-64">
                    <div className="max-w-sm rounded overflow-hidden bg-gray-100 shadow-lg">
                        <img className="w-full" src="images/bryan.jpeg" alt="Bryan"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Bryan </div>

                        </div>
                        <div className="px-6 py-4 flex justify-center">
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><AiFillGitlab/></span>
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"><AiFillLinkedin/></span>
                        </div>
                    </div>
                </div>
                {/*card 5 ends here*/}
                {/*Card 6 starts here*/}
                <div className="md:px-2 py-2 lg:px-2 py-2 w-64">
                    <div className="max-w-sm rounded overflow-hidden bg-gray-100 shadow-lg">
                        <img className="w-full" src="images/deepak.jpg" alt="Deepak Rao"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Deepak Rao Flecher</div>

                        </div>
                        <div className="px-6 py-4 flex justify-center">
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><AiFillGitlab/></span>
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"><AiFillLinkedin/></span>
                        </div>
                    </div>
                </div>
                {/*card 6 ends here*/}
                {/*Card 7 starts here*/}
                <div className="md:px-2 py-2 lg:px-2 py-2 w-64">
                    <div className="max-w-sm rounded overflow-hidden bg-gray-100 shadow-lg">
                        <img className="w-full" src="images/alen.jpg" alt="Alan Looves"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Alan Looves</div>

                        </div>
                        <div className="px-6 py-4 flex justify-center">
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><AiFillGitlab/></span>
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"><AiFillLinkedin/></span>
                        </div>
                    </div>
                </div>
                {/*card 7 ends here*/}
                {/*Card 8 starts here*/}
                <div className="md:px-2 py-2 lg:px-2 py-2 w-64">
                    <div className="max-w-sm rounded overflow-hidden bg-gray-100 shadow-lg">
                        <img className="w-full" src="images/paul.jpg" alt="Visrutha"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Visrutha </div>

                        </div>
                        <div className="px-6 py-4 flex justify-center">
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><AiFillGitlab/></span>
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"><AiFillLinkedin/></span>
                        </div>
                    </div>
                </div>
                {/*card 8 ends here*/}
                {/*Card 9 starts here*/}
                <div className="md:px-2 py-2 lg:px-2 py-2 w-64">
                    <div className="max-w-sm rounded overflow-hidden bg-gray-100 shadow-lg">
                        <img className="w-full" src="images/paul.jpg" alt="lakshmi S"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Laskshmi S</div>

                        </div>
                        <div className="px-6 py-4 flex justify-center">
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><AiFillGitlab/></span>
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"><AiFillLinkedin/></span>
                        </div>
                    </div>
                </div>
                {/*card 9 ends here*/}
                {/*Card 10 starts here*/}
                <div className="md:px-2 py-2 lg:px-2 py-2 w-64">
                    <div className="max-w-sm rounded overflow-hidden bg-gray-100 shadow-lg">
                        <img className="w-full" src="images/paul.jpg" alt="Paul Sojan"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Paul Elias Sojan</div>

                        </div>
                        <div className="px-6 py-4 flex justify-center">
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><AiFillGitlab/></span>
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"><AiFillLinkedin/></span>
                        </div>
                    </div>
                </div>
                {/*card 10 ends here*/}
                {/*Card 11 starts here*/}
                <div className="md:px-2 py-2 lg:px-2 py-2 w-64">
                    <div className="max-w-sm rounded overflow-hidden bg-gray-100 shadow-lg">
                        <img className="w-full" src="images/naveen.jpg" alt="Naveen Jacob"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Naveen B Jacob</div>

                        </div>
                        <div className="px-6 py-4 flex justify-center">
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><AiFillGitlab/></span>
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"><AiFillLinkedin/></span>
                        </div>
                    </div>
                </div>
                {/*card 11 ends here*/}
                {/*Card 12 starts here*/}
                <div className="md:px-2 py-2 lg:px-2 py-2 w-64">
                    <div className="max-w-sm rounded overflow-hidden bg-gray-100 shadow-lg">
                        <img className="w-full" src="images/devu.jpg" alt="Devu"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Devu Kurup</div>

                        </div>
                        <div className="px-6 py-4 flex justify-center">
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><AiFillGitlab/></span>
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"><AiFillLinkedin/></span>
                        </div>
                    </div>
                </div>
                {/*card 12 ends here*/}
                {/*Card 13 starts here*/}
                <div className="md:px-2 py-2 lg:px-2 py-2 w-64">
                    <div className="max-w-sm rounded overflow-hidden bg-gray-100 shadow-lg">
                        <img className="w-full" src="images/paul.jpg" alt="Yedhin"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Yedhin</div>

                        </div>
                        <div className="px-6 py-4 flex justify-center">
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><AiFillGitlab/></span>
                            <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"><AiFillLinkedin/></span>
                        </div>
                    </div>
                </div>
                {/*card 12 ends here*/}

                
                
            </div>
            
            

            <hr/>
        </div>
        );
    }
}
export default People