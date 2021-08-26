import React from 'react'
import './_lastsection.scss';

import NewsPlayBtn from '../../../../components/global/newsPlayBtn';
import AuthorDateRead from '../../../News/components/author-date-readTime';
import NewsLinkTag from '../../../../components/global/newsLinkTag';
import { Button } from '../../../../components/global/button';
import { articelpopular, ArticleCategoriesDetails, ArticlelatestPost } from '../../../../components/constants/mock';
import { SocialFollow } from '../SocialFollow';
import ArticleCategories from '../catagories';
import { LatestPost } from '../latestPost';
import { PopularPost } from '../popularPost';
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'
export const LastSection = ({lastsecCol1,lastsecCol1Row2}) => {
    const headAnimation1=MappedDataAnimation(.1);
    const headAnimation2=MappedDataAnimation(.1);
    return (
        <div className="lastSection-wrapper">
            <div className="lastSection">
             <div ref={headAnimation1.ref} className="lastSection-col1">
                {
                    lastsecCol1.map((data,index)=>{
                        return <motion.div key={index} custom={index} animate={headAnimation1.animation} className="lastSection-col1-content">
                        <div className="lastSection-col1-content-image"  style={{backgroundImage:`url(${data.background})`}}>
                        <div className="lastSection-col1-content-image-play">
                        <NewsPlayBtn/>

                        </div>
                        </div>
                        <div className="lastSection-col1-content-bottom">
                        <NewsLinkTag color={data.tagColor} tag={data.tagName} link={'/#456'} />
                        <h3 className="lastSection-col1-content-bottom-heading">{data.heading}</h3>
                        <AuthorDateRead  date='September 19,2019' readTime='4 Min read' color='#9f9f9f' fontSize='12px'/>
                        <p className="lastSection-col1-content-bottom-paragraph">{data.paragraph}</p>
                        <Button type="primary" label="Read More"/>
                        </div>

                    </motion.div>
                    })
                }
                <div ref={headAnimation2.ref}>
                    {
                        lastsecCol1Row2.map((data,index)=>{
                            return <motion.div key={index} custom={index} animate={headAnimation2.animation} className="lastSection-col1-row">
                        <div className="lastSection-col1-row-image"  style={{backgroundImage:`url(${data.background})`}}>
                        </div>
                        <div className="lastSection-col1-row-bottom">
                        <NewsLinkTag color={data.tagColor} tag={data.tagName} link={'/#456'} />
                            <h3 className="lastSection-col1-row-bottom-heading">{data.heading}</h3>
                            <AuthorDateRead  date='September 19,2019' readTime='4 Min read' color='#9f9f9f' fontSize='12px'/>
                            <p className="lastSection-col1-row-bottom-paragraph">{data.paragraph}</p>
                            <Button type="primary" label="Read More"/>

                        </div>

                    </motion.div>
                        })
                    }
                </div>
                

                </div>
                <div className="lastSection-col2">
                <LatestPost latestPost={ArticlelatestPost}/>
                <PopularPost popular={articelpopular}/>
                <ArticleCategories details={ArticleCategoriesDetails}/>
                <SocialFollow/>
                
                   
                   
                </div>
            </div>
            
        </div>
    )
}
