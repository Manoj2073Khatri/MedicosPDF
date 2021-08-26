import React from 'react'
import NewsLinkTag from '../../../components/global/newsLinkTag'
import AuthorDateRead from '../../News/components/author-date-readTime'
import './_income.scss';
// import { motion } from 'framer-motion';
// import MappedDataAnimation from '../../../pages/customAnimation/mappedDataAnimation'


export const Income = ({income}) => {
    // const headAnimation=MappedDataAnimation(.1);
    return (
        <div className="income-wrapper">
            <h3 className="income-wrapper-heading">Fixed Income</h3>
             <div 
            //  ref={headAnimation.ref} 
             className="income">
                
                       {
                           income.map((data,index)=>{
                               return  <div key={index}
                                // custom={index} 
                                // animate={headAnimation.animation} 
                                className="income-wrapper-content">
                            <div className="income-wrapper-content-col1">
                                <div  className="income-wrapper-content-col1-img" style={{backgroundImage:`url(${data.bgImg})`}}>
                                    
                                </div>
                            </div>
                                <div className="income-wrapper-content-col2">
                                    <div className="income-wrapper-content-col2-tag">
                                    {data.tag.map((data,index) => (
                                    <NewsLinkTag key={index} color={data.color} tag={data.tag} link={data.link} />
                                ))}
                                    </div>
                                    <h3 className="income-wrapper-content-col2-head">{data.heading}</h3>  
                                    <AuthorDateRead date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize} className="TodaysHighlights-wrapper-slider-slide-description-dateread"/> 
                            

                                </div>
                        </div>
                           })
                       } 
              </div>
        </div>
    )
}
