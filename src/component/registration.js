import React from 'react';
import Iframe from 'react-iframe';
import {motion} from 'framer-motion';

export default function Membership(props){
    return(
        <motion.div
        initial="out" animate="in" exit="out" variants={props.pageVariation} transition={props.pageTransition}>
            <Iframe
            style={{overflowY:'hidden'}}
            className="w-full h-screen"
            url="https://docs.google.com/forms/d/e/1FAIpQLScNwhsLm_jtOpGKV4UxWSUsE2v1Q7fL_MK3cAzJTYBa71jLAQ/viewform?usp=sf_link"
            position="relative"
            
            
            />
        </motion.div>
    );
}