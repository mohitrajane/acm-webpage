import React, {useState} from 'react';
import headDetails from '../res/heads.json';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai';

export default function Heads(){
//the variable dates store the all the keys of the json headDetails..
// var dates = Object.keys(headDetails).reverse().map(Number);
//this var presentYear store the current year
var presentYear = parseInt(new Date(Date.now()).toLocaleString().split(',')[0].split('/')[2]); 
//the changeYear will be changed on the basis of the button press.
const [changeYear, setChangeYear] = useState(presentYear-1);
//function to change the changeYear value.
function decrement(){
    if(changeYear===2016){
        document.getElementById('decrementer').style.visibility = 'hidden';
    }
    else{
        setChangeYear(changeYear-1);
        document.getElementById('decrementer').style.visibility = 'visible';
        document.getElementById('incrementer').style.visibility = 'visible';
    }
}
function increment(){
    if(changeYear===presentYear-1){
        document.getElementById('incrementer').style.visibility = 'hidden';
    }
    else{
        setChangeYear(changeYear+1);
        document.getElementById('decrementer').style.visibility = 'visible';
        document.getElementById('incrementer').style.visibility = 'visible';
    }
}
    return(
        //this is the main div
        <div className="text-center p-1">
            <h1 className='underline'>{changeYear}</h1>
            <div className="flex justify-center">
                <button onClick={decrement} id='decrementer'><AiOutlineArrowLeft/></button>
                {   //to get all the values in key variable of the json.
                    headDetails[changeYear].map(item=>(
                        <div className='p-2' key={item.key}>
                            <img className="w-24" src={process.env.PUBLIC_URL+item.image} alt="heads"/>
                            <p>{item.post}</p>
                        </div>
                    ))
                }
                <button onClick={increment} id='incrementer'><AiOutlineArrowRight/></button>
            </div>
        </div>
    );
}
