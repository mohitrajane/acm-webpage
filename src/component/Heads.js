import React,{useState} from 'react';

import Naveen from './images/naveen.jpg';
import headDetails from '../res/heads.json';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai';

export default function Head(props){
    var years = Object.keys(headDetails);
    for(var i=0; i<years.length;i++) years[i] = +years[i];
    var date = parseInt(new Date(Date.now()).toLocaleString().split(',')[0].split('/')[2]);
    const [startYear,setcurrentYear] = useState(date-1);
    console.log(startYear);
    
    function decrement(e)
    {
        return(years.includes(e-1)?e=e-1:console.log("hello"));
    }
    function increment(e)
    {
        return(years.includes(e+1)?e=e+1:console.log("hello"));
    }
    // let a=()=>{
    //     years.includes(startYear-1)?startYear=startYear-1:console.log("hello");
    // }
    return(
        <div className="text-center ">
            <p>2018</p>
            <div className="flex">
                <button className="bg-gray-100" onClick={decrement}>
                    <AiOutlineArrowLeft/></button>
                <div id="2018">
                    <div className="flex w-56">
                        <img src={Naveen}/>

                    </div>
                </div>
                <button className="bg-gray-100" onClick={increment}><AiOutlineArrowRight/></button>
            </div>
        </div>
    );
}
{/*my plan is to start from the present year-1 and then decrement to the year when the ACM was implemented,while decrementing do the
year in function to check whether the value is present in the json; if there is then decrement or if not block the button*/}