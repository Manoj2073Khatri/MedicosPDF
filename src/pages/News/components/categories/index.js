import React from 'react'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import './_categories.scss'
import { motion } from 'framer-motion';
import CustomAnimation from '../../../customAnimation/index'

const hidden={
    opacity:0,
    y:100,
}
const visible={
    opacity:1,
    y:0,
    transition:{
        delay:.3,
        ease:'easeIn'
    }
   }
const Categories = ({details}) => {
    const customAnimation=CustomAnimation(hidden,visible,.1);
    return (
        <>
          <div className="newsCategories-wrapper">
              {/* <h3  className="newsCategories-wrapper-head1">Categories</h3>
              <h6  className="newsCategories-wrapper-head2">FEATURED POSTS</h6> */}
              <motion.div ref={customAnimation.ref} animate={customAnimation.animation}  className="newsCategories-wrapper-imgContainer">
                  {details.map(data=>(
                   
                        <div key={data.id} className="newsCategories-wrapper-imgContainer-bgImg" style={{backgroundImage:`url(${data.bgImg})`}} >
                           
                                <div className="newsCategories-wrapper-imgContainer-bgImg-mid">
                                    <div className="newsCategories-wrapper-imgContainer-bgImg-mid-postNo">{data.postsNo}</div>
                                    <NewsLinkTag color={data.tag.color} tag={data.tag.tag} link={data.tag.link} />
                                    <div className="newsCategories-wrapper-imgContainer-bgImg-mid-btn"><a href={data.btnlink}>View posts</a></div>
                               </div>
                               <div className="overlay" style={{backgroundColor:`${data.tag.color}`}}></div>
                         
                          
                       </div>  
                  ))}
              </motion.div>
          </div>
            
        </>
    )
}

export default Categories
