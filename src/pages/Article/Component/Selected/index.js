import React from 'react'
import NewsLinkTag from '../../../../components/global/newsLinkTag';
import AuthorDateRead from '../../../News/components/author-date-readTime';
import './_selected.scss';
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'


export const Selected = ({selected}) => {
    const headAnimation1=MappedDataAnimation(.1);
    const headAnimation2=MappedDataAnimation(.1);
    return (
        <div className="selected-wrapper">
            <h3 className="selected-wrapper-heading">Selected</h3>
            {
                selected.map((data,index)=>{
                    return<div key={index} className="selected">
                
           
            <div className="selected-wrapper-content"> 
                    <div ref={headAnimation1.ref} className="selected-wrapper-content-col1">
                    {
                        data.col1.map((data,index)=>(
                            <motion.div key={index} custom={index} animate={headAnimation1.animation} className="selected-wrapper-content-col1-content">
                            <div className="selected-wrapper-content-col1-content-image" style={{backgroundImage:`url(${data.backgroundImage})`}}>

                            </div>
                            <div className="selected-wrapper-content-col1-content-description">
                            <div className="tags">
                            {data.tag.map((data,index) => (
                                
                                <NewsLinkTag key={index} color={data.color} tag={data.tag} link={data.link} />
                               
                                   
                                ))}
                                </div>
                                <h3 className="selected-wrapper-content-col1-content-description-heading" >{data.heading}</h3>
                                <AuthorDateRead date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize}/>
                                <p className="selected-wrapper-content-col1-content-description-paragraph">{data.paragraph}</p>
                            </div>
                        

                        </motion.div>

                        ))
                    }
                        

                    </div>
                    <div className="selected-wrapper-content-col2">
                    <div ref={headAnimation2.ref} className="selected-wrapper-content-col2-imagesContainer">
                    {data.col2.map((data,index)=>(
                        <motion.div custom={index} animate={headAnimation2.animation} key={index} className="selected-wrapper-content-col2-imagesContainer-bgImg" style={{backgroundImage:`url(${data.bgImg})`}}>
                           <div className="selected-wrapper-content-col2-imagesContainer-bgImg-description">
                                <NewsLinkTag color={data.tag.color} tag={data.tag.tag} link={data.tag.link} />
                                <h3 className="selected-wrapper-content-col2-imagesContainer-bgImg-description-heading"><a href={data.headlink}>{data.head}</a></h3>
                                <AuthorDateRead  date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize}  />
                           </div>
                        </motion.div>
                    ))}
                </div>

                    </div>


      </div>
      </div>
  

                })

            }

            
          
               
            
        </div>
    )
}
