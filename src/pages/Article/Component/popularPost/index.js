import React from 'react'
import NewsLinkTag from '../../../../components/global/newsLinkTag';
import AuthorDateRead from '../../../News/components/author-date-readTime';
import './_popular.scss';
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'
export const PopularPost = ({popular}) => {
    const headAnimation=MappedDataAnimation(.1);
    return (
        <div className="popularPost-wrapper">
        <h3> Popular Posts</h3>
            <div ref={headAnimation.ref} className="popularPost">
                {
                    popular.map((data,index)=>{
                        return <motion.div key={index} custom={index} animate={headAnimation.animation} className="popularPost-content">
                    <div className="popularPost-content-image"  style={{backgroundImage:`url(${data.background})`}}>
                    </div>
                    <div className="popularPost-content-bottom">
                    <NewsLinkTag color={data.tagColor} tag={data.tagName} link={'/#456'} />
                        <h3 className="popularPost-content-bottom-heading">{data.heading}</h3>
                        <AuthorDateRead  date='September 19,2019' readTime='4 Min read' color='#9f9f9f' fontSize='12px'/>


                    </div>

                </motion.div>
                    })
                }
                

            </div>
            
        </div>
    )
}
