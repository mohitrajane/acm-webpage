import React, { Component } from 'react';
import Mohit from './images/mohit.jpg';
import Leo from './images/leo.png';

class People extends Component{
    render(){
        return(
        <div class="bg-blue-600 text-white">
            {/*heading*/}
            <h1 class="flex justify-center text-3xl text-blue">Mentionable people</h1>
            <p class="flex justify-center text-lg text-blue">This page is used to mention those people who all stood up with ACM no matter what!!
            </p>
            {/*---------------------------------------For the people cards----------------------------------------------------*/}
            <div class="flex">
                {/*Card 1 starts here*/}
                <div class="p-4">
                    <div class="max-w-sm rounded overflow-hidden bg-gray-300 shadow-lg">
                        <img class="w-full" src={Mohit} alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 text-white">Mohit Rajan E</div>
                            {/* <p class="text-gray-700 text-base">
                            Mohit Rajan E
                            </p> */}
                        </div>
                        <div class="px-6 py-4">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                        </div>
                    </div>
                </div>
                {/*card 1 ends here*/}
                {/*Card 1 starts here*/}
                <div class="p-4">
                    <div class="max-w-sm rounded overflow-hidden bg-gray-300 shadow-lg">
                        <img class="w-full" src={Leo} alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Leo varghese</div>
                            {/* <p class="text-gray-700 text-base">
                            Leo Varghese
                            </p> */}
                        </div>
                        <div class="px-6 py-4">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                        </div>
                    </div>
                </div>
                {/*card 1 ends here*/}
            </div>
            
            

            <hr/>
        </div>
        );
    }
}
export default People