import React,{useState} from 'react';
import headDetails from '../res/heads.json';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai';


export default function Head(props){
    var years = Object.keys(headDetails).reverse();
    for(var i=0; i<years.length;i++) years[i] = +years[i];
    var date = parseInt(new Date(Date.now()).toLocaleString().split(',')[0].split('/')[2]);
    const [startYear,setcurrentYear] = useState(date-1);
    const len = years.length;
    const presentYear = years[0];
    const lastYear = years[len-1];
    function checkRight(){
        if(startYear===lastYear)
            document.getElementById('incrementer').style.visibility = 'hidden';  
    }
    function checkLeft(){
        if(startYear===presentYear)
            document.getElementById('decrementer').style.visibility = 'hidden'; 
    }

    function decrement()
    {
        if(years.includes(startYear-1)){
            setcurrentYear(startYear-1);
            document.getElementById('incrementer').style.visibility = 'visible';
            document.getElementById("decrementer").style.visibility = 'visible';
            checkLeft();
        }
        else
            document.getElementById("decrementer").style.visibility = 'hidden';
    }
    function increment()
    {
        if(years.includes(startYear+1)){
            setcurrentYear(startYear+1);
            document.getElementById('incrementer').style.visibility = 'visible';
            document.getElementById("decrementer").style.visibility = 'visible';
            checkRight();
        }
        else
            document.getElementById('incrementer').style.visibility = 'hidden';
    }
    return(
        <div className = "text-center p-1">
        
            <p>{startYear}</p>
            <div className = "flex justify-center">
                <button className = "decrementer" id = "decrementer" onClick = {decrement}><AiOutlineArrowLeft/></button>
                    {headDetails[startYear].map(events=>(
                        <div className="p-2">
                            <img className="w-24" src = {events.image} alt = "heads"/>
                            <p>{events.post}</p>
                        </div>
                    ))}


                <button className="incrementer" id="incrementer" onClick={increment}><AiOutlineArrowRight/></button>
            </div>
        </div>
    );
}
