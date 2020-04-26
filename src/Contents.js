import React, { Component } from 'react';


class contents extends Component{
    render(){
        return(
            <div>
                {/*this div is for the whole element */}
                <div class="bg-blue-600 text-white">
                    <div class="grid-col-2">
                        {/*Title and the heading for the ACM */}
                        <div>
                            <h1 class="flex justify-center">Why ACM</h1>
                            <p class="px-64 pt-6 pb-6 flex justify-center">ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, 
                            and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through 
                            strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth 
                            of its members by providing opportunities for life‐long learning, career development, and professional networking.</p>
                        </div>
                        {/*Title and the heading for the ACM FISAT*/}
                        <div>
                        <h1 class="flex justify-center">ACM FISAT</h1>
                        <p class="px-64 pt-6 pb-6 flex justify-center">ACM Students Chapter FISAT is the biggest Computer Science Students Chapter in FISAT.
                        It even consist a group where use can ask and clarify your doubts or even others doubts as well. The group also consist of teaching faculty
                        where even they are willing to help and guide you through your various doubts and even helps in your projects. We are always ready to help you.
                        To join in our community use the buton given below.</p>
                        </div>
                    </div>
                    {/*this div is for the bottom button */}
                    <div class="button rounded flex justify-center ">
                        <button class="bg-white text-black rounded py-2" onClick="">Join Here</button>   
                    </div>
                </div> 
            </div>
        );
    }
}
export default contents;