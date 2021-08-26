import React,{useState} from 'react'
import './_accordion.scss';
import { motion } from 'framer-motion';
export const Accordion = ({accordion}) => {
    const [show, setShow]=useState(null);
    const toggle=(i)=>{
        if (show===i){
        return setShow(null)}
        setShow(i)
    }
  

    return (
        <div className="accordion-wrapper">
            <h3 className="accordion-wrapper-head">Any Questions??</h3>
            <div className="accordion-main">
                {
                    accordion.map((data,i)=>{
                        return<div className="accordion-main-content " key={i}>
                                    <div className={show===i?"accordion-main-content-heading active": "accordion-main-content-heading"} >
                                        <h2 onClick={()=>toggle(i)}>{data.heading}</h2>
                                    </div>
                            
                                    <div className={show===i?"accordion-main-content-paragraph active":"accordion-main-content-paragraph"}>
                                        <p>{data.paragraphs}</p>
                                    </div>
            
                

                                 </div>

                    })
                }

            </div>
            
        </div>
    )
}
