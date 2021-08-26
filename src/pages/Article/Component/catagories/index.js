import React from 'react'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import './_catagories.scss'
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'
const  ArticleCategories = ({details}) => {
    const headAnimation=MappedDataAnimation(.1);
    return (
        <>
          <div className="articleCategories-wrapper">
          <h3 className="articleCategories-wrapper-heading"> Categories</h3>
              <div ref={headAnimation.ref}  className="articleCategories-wrapper-imgContainer">
                  {details.map(data=>(
                   
                        <motion.div custom={data.id} animate={headAnimation.animation} key={data.id} className="articleCategories-wrapper-imgContainer-bgImg" style={{backgroundImage:`url(${data.bgImg})`}} >
                           
                                <div className="articleCategories-wrapper-imgContainer-bgImg-mid">
                                    <NewsLinkTag color={data.tag.color} tag={data.tag.tag} link={data.tag.link} />
                                    <div className="articleCategories-wrapper-imgContainer-bgImg-mid-postNo">{data.postsNo}</div>
                                </div>
                               <div className="overlay" style={{backgroundColor:`${data.tag.color}`}}></div>
                         
                          
                       </motion.div>  
                  ))}
              </div>
          </div>
            
        </>
    )
}

export default ArticleCategories
