import React from 'react'
import './_topBackground.scss'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../../../News/components/author-date-readTime'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TopBackground = ({details}) => {
    return (
        <>
           <div className="newsDetailsTopBackground-wrapper">
              
               <div className="newsDetailsTopBackground-wrapper-leftBgImg" style={{backgroundImage:`url(${details.bgImage})`}}>    
                    <div className="newsDetailsTopBackground-wrapper-leftBgImg-rating">
                        {details.rating}
                    </div>
               </div>

               <div className="newsDetailsTopBackground-wrapper-right">
                   <div className="newsDetailsTopBackground-wrapper-right-tags">
                       {details.tags.map(data=>(
                        <div key={data.id} className="newsDetailsTopBackground-wrapper-right-tags-tag">   
                          <NewsLinkTag  color={data.color} tag={data.tag} link={data.link} />
                        </div>
                       ))}  
                   </div>
                   <h3 className="newsDetailsTopBackground-wrapper-right-head">{details.heading}</h3>
                   <AuthorDateRead author={details.dateAndTime.author} authorColor={details.dateAndTime.authorColor} link={details.dateAndTime.link} date={details.dateAndTime.date} readTime={details.dateAndTime.readTime} color={details.dateAndTime.color} fontSize={details.dateAndTime.fontSize}  />
                   <div className="newsDetailsTopBackground-wrapper-right-bottom">
                       <div className="newsDetailsTopBackground-wrapper-right-bottom-col1">
                           {details.likesAndLove.map(data=>(
                               <div  key={data.id} className="newsDetailsTopBackground-wrapper-right-bottom-col1-item">
                                    <FontAwesomeIcon icon={data.img} className="newsDetailsTopBackground-wrapper-right-bottom-col1-item-icon"/>
                                    <div className="newsDetailsTopBackground-wrapper-right-bottom-col1-item-no">{data.likesAndloveNo}</div>
                               </div>
                           ))}
                          
                       </div>

                       <div className="newsDetailsTopBackground-wrapper-right-bottom-col2">
                           {details.socialBtn.map(data=>(
                               <div key={data.id} className="newsDetailsTopBackground-wrapper-right-bottom-col2-item" style={{backgroundColor:`${data.color}`}}>
                                   <a href={data.link} className="newsDetailsTopBackground-wrapper-right-bottom-col2-item-a"><FontAwesomeIcon icon={data.img} className="newsDetailsTopBackground-wrapper-right-bottom-col2-item-a-icon"/></a>
                                </div> 
                           ))}
                     
                       </div>
                   </div>

               </div>
           </div>
            
        </>
    )
}

export default TopBackground
