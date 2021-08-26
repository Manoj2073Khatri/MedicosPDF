import React from 'react'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../../../News/components/author-date-readTime'
import './_selectedJournal.scss'
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'

const SelectedJournal = ({details}) => { 
    const headAnimation1=MappedDataAnimation(.1);
    const headAnimation2=MappedDataAnimation(.1);
    return (
        <>
          <div className="selectedJournal-wrapper">
              <h3 className="selectedJournal-wrapper-head1">Selected Journals</h3>
              <h6 className="selectedJournal-wrapper-head2">EDITOR'S PICKS</h6>
              <div className="selectedJournal-wrapper-infoContainer">
                  <div className="selectedJournal-wrapper-infoContainer-col1">
                      <div  className="selectedJournal-wrapper-infoContainer-col1-tag">
                         <NewsLinkTag  color={details.col1tag.color} tag={details.col1tag.tag} link={details.col1tag.link} />
                      </div>   
                     <h3 className="selectedJournal-wrapper-infoContainer-col1-head"><a href={details.col1headinglink}>{details.col1heading}</a></h3>
                     <div  className="selectedJournal-wrapper-infoContainer-col1-authordateread">
                        <AuthorDateRead author={details.col1dateAndTime.author}  authorColor={details.col1dateAndTime.authorColor} link={details.col1dateAndTime.link} date={details.col1dateAndTime.date} readTime={details.col1dateAndTime.readTime} color={details.col1dateAndTime.color} fontSize={details.col1dateAndTime.fontSize}  />
                     </div>
                     <p className="selectedJournal-wrapper-infoContainer-col1-para">{details.col1para}</p>

                     <div ref={headAnimation1.ref} className="selectedJournal-wrapper-infoContainer-col1-bottom">
                         {details.col1bottom.map((data,index)=>(
                             <motion.div custom={index} animate={headAnimation1.animation} key={index} className="selectedJournal-wrapper-infoContainer-col1-bottom-description">
                                 <div className="selectedJournal-wrapper-infoContainer-col1-bottom-description-img"  style={{backgroundImage:`url(${data.bgImg})`}} >                    
                                 </div>
                                 <h3 className="selectedJournal-wrapper-infoContainer-col1-bottom-description-head"><a href={data.headinglink}>{data.heading}</a></h3>
                                 <AuthorDateRead author={data.dateAndTime.author} link={data.dateAndTime.link} date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize}  />
                             </motion.div>
                         ))}
                         
                     </div>

                  </div>

                  <div ref={headAnimation2.ref} className="selectedJournal-wrapper-infoContainer-col2">
                      {details.col2.map((data,index)=>(
                        <motion.div key={index} custom={index} animate={headAnimation2.animation} className="selectedJournal-wrapper-infoContainer-col2-description">
                            <NewsLinkTag color={data.tag.color} tag={data.tag.tag} link={data.tag.link} />
                            <h3 className="selectedJournal-wrapper-infoContainer-col2-description-head"><a href={data.headinglink}>{data.heading}</a></h3>
                            <AuthorDateRead author={data.dateAndTime.author} link={data.dateAndTime.link} date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize}  />
                        </motion.div>
                      ))}
                     

                  </div>

                  <div className="selectedJournal-wrapper-infoContainer-col3">
                      <div className="selectedJournal-wrapper-infoContainer-col3-img" style={{backgroundImage:`url(${details.col3bgImg})`}} >                    
                      </div>
                      <div className="selectedJournal-wrapper-infoContainer-col3-desc">
                        <div className="selectedJournal-wrapper-infoContainer-col3-desc-tag">
                           <NewsLinkTag  color={details.col3tag.color} tag={details.col3tag.tag} link={details.col3tag.link} />
                        </div>
                        <h3 className="selectedJournal-wrapper-infoContainer-col3-desc-head"><a href={details.col3headinglink}>{details.col3heading}</a></h3>
                        <AuthorDateRead  date={details.col3dateAndTime.date} readTime={details.col3dateAndTime.readTime} color={details.col3dateAndTime.color} fontSize={details.col3dateAndTime.fontSize}  />
                      </div>
                     
                  </div>
              </div>
          </div>
            
        </>
    )
}

export default SelectedJournal
