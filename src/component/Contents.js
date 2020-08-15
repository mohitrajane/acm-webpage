import React from 'react';
import './contents.css';
import {motion} from 'framer-motion';
import logo from './images/Acmlogo.jpeg';
import Present from '../res/present.json';
import {FaLinkedinIn} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Contents(props){
    return(
        <motion.div
        initial="out" animate="in" exit="out" variants={props.pageVariation} transition={props.pageTransition}>
            {/*landing page image*/}
            <div className="">
                    <img className="hidden object-contain md:block " alt="main_logo"src={logo}/>
                </div>
                {/*this div is for the about element */}
                <div className="bg-blue-600 text-white">
                    <div className="lg:flex flex-wrap px-8">
                        {/*Title and the heading for the ACM */}
                        <div className="sm:w-full lg:w-1/2">
                            <h1 className="flex justify-center text-2xl pt-4">Why ACM</h1>
                            <p className="lg:px-32 py-6 flex text-lg text-left justify-center lg:text-justify">ACM brings together computing educators, researchers, and professionals 
                            to inspire dialogue, share resources, and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through 
                            strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth 
                            of its members by providing opportunities for life‐long learning, career development, and professional networking.</p>
                        </div>
                        {/*Title and the heading for the ACM FISAT*/}
                        <div className="sm:w-full lg:w-1/2">
                        <h1 className="flex justify-center text-2xl pt-4">ACM FISAT</h1>
                        <p className="lg:px-32 py-6 flex text-lg text-left justify-center lg:text-justify">ACM Students Chapter FISAT is the biggest Computer Science Students Chapter in FISAT.
                        It even consist a group where use can ask and clarify your doubts or even others doubts as well. The group even consist of teaching faculty
                        where even they are willing to help and guide you through your various doubts and even helps in your projects. We are always ready to help you.
                        To join in our community use the button given below.</p>
                        </div>
                    </div>
                    {/*this div is for the bottom button */}
                    <div className="button rounded flex justify-center pb-4">
                        <Link to='/registration' className="bg-gray-200 text-black rounded p-3">
                            Join here
                        </Link>
                    </div>
                </div> 
                {/*Details about the present members with their numbers and name*/}
                <div className="py-4 lg:flex flex-wrap">

                    {/*Acm directives contact*/}
                    <div className="flex justify-center item-center w-full"><h1 className="text-2xl my-5">Contact Us</h1></div>
                    <div className="justify-center sm:flex-no-wrap md:flex-wrap lg:w-full flex flex-row flex-wrap">
                        {Present.map(item=>(
                            
                            <pre className="py-2" key={item.key}>
                                <div className="flex px-4 mx-4 flex-col text-center justify-between h-full w-full main-test" style={{backgroundImage:`url(${process.env.PUBLIC_URL+item.image})`}}>
                                    <div>
                                        <p className="mt-8 font-bold name">{item.name}</p>
                                        <p className="mt-2">{item.post}</p>
                                    </div>
                                    <div className="mb-12 font-light">
                                        <div className="flex justify-center my-2">
                                            <a href={item.linkedin} target='__blank'><FaLinkedinIn className="mx-2" /></a>{/*<p className="mx-2"></p>*/}
                                            
                                        </div>
                                    <p>{item.mobile}</p>
                                    </div>
                                </div>
                            </pre>
                        ))
                        }

                    </div>
                </div>
        </motion.div>
    );
}
export default Contents;