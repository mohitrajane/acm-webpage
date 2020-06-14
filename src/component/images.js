import React from "react";
import Image from "../res/images.json";


export default function Images(){
    return(
        <div>
            {    
            Object.keys(Image).reverse().map(function(key){
                Image[key].map(item=>(
                    <div className='p-2' key={item.key}>
                    <img className="w-24" src={item.image} alt="heads"/>
                    <p>{item.post}</p>
                </div>
                ))
            })}
        </div>
    );
}