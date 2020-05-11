import React,{useState} from 'react';


import headDetails from '../res/heads.json';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai';

export default function Head(props){
    var years = Object.keys(headDetails);
    for(var i=0; i<years.length;i++) years[i] = +years[i];
    var date = parseInt(new Date(Date.now()).toLocaleString().split(',')[0].split('/')[2]);
    const [startYear,setcurrentYear] = useState(date-1);

    
    function decrement()
    {
        if(years.includes(startYear-1)){
            setcurrentYear(startYear-1);
            document.getElementById('decrementer').style.visibility='visible';
            document.getElementById('incrementer').style.visibility='visible';

        }
        else{
            document.getElementById('decrementer').style.visibility='hidden';
        }
        console.log(startYear);
    }
    function increment()
    {
        if(years.includes(startYear+1)){
            setcurrentYear(startYear+1);
            document.getElementById('decrementer').style.visibility='visible';
            document.getElementById('incrementer').style.visibility='visible';

        }
        else{
            document.getElementById('incrementer').style.visibility='hidden';
        }
        console.log(startYear);
    }
    // years.map((item)=>{
    //     console.log(headDetails[item]['post']);
    // })

    return(
        <div className="text-center p-1">
            <p>{startYear}</p>
            <div className="flex justify-center">
                <button className="bg-gray-100" id="decrementer" onClick={decrement}><AiOutlineArrowLeft/></button>
                    {headDetails[startYear].map(events=>(
                        <div>
                            <img src={events.image} alt="heads"/>
                            <p>{events.post}</p>
                        </div>
                    ))}


                <button className="bg-gray-100" id="incrementer" onClick={increment}><AiOutlineArrowRight/></button>
            </div>
        </div>
    );
}
{/*my plan is to start from the present year-1 and then decrement to the year when the ACM was implemented,while decrementing do the
year in function to check whether the value is present in the json; if there is then decrement or if not block the button*/}