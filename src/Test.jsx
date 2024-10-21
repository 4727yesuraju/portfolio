import React, { useState } from 'react';
import {motion, transform} from 'framer-motion';

export default function Test() {
    const [open,setOpen] = useState(true);
    const variants = {
        visible : {opacity : 1, transition : { duration : 5}},
        hidden : {opacity : 0, transition :{duration : 5}}
    }
  return (
    <div className='course'>
      <motion.div className="box" 
          variants={variants}
          animate ={open ? "visible" : "hidden"}
          ></motion.div>
      <button onClick={()=>setOpen(!open)}>click me</button>
    </div>
  )
}
