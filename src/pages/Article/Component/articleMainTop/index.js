import React from 'react'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../../../News/components/author-date-readTime'
import './_articleMainTop.scss';
import { Button } from '../../../../components/global/button';
import NewsPlayBtn from '../../../../components/global/newsPlayBtn';
import NewsRating from '../../../../components/newsRating';
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'

export const MainTop = ({mainTopCol1,mainTopCol2,mainTopCol3}) => {
    const headAnimation1=MappedDataAnimation(.1);
    const headAnimation2=MappedDataAnimation(.1);
    const headAnimation3=MappedDataAnimation(.1);
    return (
        <div className="mainTop-wrapper">
            <div className="mainTop">
                <div ref={headAnimation1.ref} className="mainTop-col1">{
                    mainTopCol1.map((maintop,index)=>{
                        return  <motion.div key={index} custom={index} animate={headAnimation1.animation} className="mainTop-col1-content">
                        <div className="mainTop-col1-content-image"  style={{backgroundImage:`url(${maintop.background})`}}>

                        </div>
                        <div className="mainTop-col1-content-bottom">
                        <NewsLinkTag color={maintop.tagColor} tag={maintop.tagName} link={'/#456'} />
                        <h3 className="mainTop-col1-content-bottom-heading">{maintop.heading}</h3>
                        <AuthorDateRead  date='September 19,2019' readTime='4 Min read' color='#9f9f9f' fontSize='12px'/>


                        </div>

                    </motion.div>


                    })
                }
    
                </div>

                <div ref={headAnimation2.ref} className="mainTop-col2">
                {
                    mainTopCol2.map((maintop,index)=>{
                        return <motion.div key={index} custom={index} animate={headAnimation2.animation} className="mainTop-col2-content">
                        <div className="mainTop-col2-content-image"  style={{backgroundImage:`url(${maintop.background})`}}>
                        <div className="mainTop-col2-content-image-play">
                        <NewsPlayBtn/>

                        </div>
                        </div>
                        <div className="mainTop-col2-content-bottom">
                        <NewsLinkTag color={maintop.tagColor} tag={maintop.tagName} link={'/#456'} />
                        <h3 className="mainTop-col2-content-bottom-heading">{maintop.heading}</h3>
                        <AuthorDateRead  date='September 19,2019' readTime='4 Min read' color='#9f9f9f' fontSize='12px'/>

                        <p className="mainTop-col2-content-bottom-paragraph">{maintop.paragraph}</p>
                        <Button type="primary" label="Read More"/>
                        </div>

                    </motion.div>
                    })
                }

                </div>

                <div ref={headAnimation3.ref} className="mainTop-col3">
                 {
                     mainTopCol3.map((maintop,index)=>{
                         return <motion.div key={index} custom={index} animate={headAnimation3.animation} className="mainTop-col3-content">
                        <div className="mainTop-col3-content-image"  style={{backgroundImage:`url(${maintop.background})`}}>
                            <div className="mainTop-col3-content-image-rating">
                            <NewsRating bgColor={maintop.ratingBgColor} rating={maintop.rating}/>

                            </div>
                        </div>
                        <div className="mainTop-col3-content-bottom">
                            <NewsLinkTag color={maintop.tagColor}tag={maintop.tagName}link={'/#456'} />
                            <h3 className="mainTop-col3-content-bottom-heading">{maintop.heading}</h3>
                            <AuthorDateRead  date='September 19,2019' readTime='4 Min read' color='#9f9f9f' fontSize='12px'/>


                        </div>

                    </motion.div>
                     })
                 }
                    
                   

                </div>                

            </div>

            
        </div>
    )
}
