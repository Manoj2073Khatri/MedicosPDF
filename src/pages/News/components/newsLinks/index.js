import React from 'react'
import './_newsLinks.scss'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../author-date-readTime'

const NewsLinks = ({details}) => {
    return (
        <div className='NewsLinks-container'>
           {details.map((data,index)=>(
               <div key={index} className="NewsLinks-container-wrapper">
                    <div className="NewsLinks-container-wrapper-newslinktags">
                        {data.tag.map((data,index)=>(
                        <div key={index} className="NewsLinks-container-wrapper-newslinktags-tag">    
                        <NewsLinkTag  color={data.color} tag={data.tag} link={data.link} />
                        </div>
                       ))}
                    </div>
                  
                    <h3 className="NewsLinks-container-wrapper-heading"><a href={data.headinglink}>{data.heading}</a></h3>
                    <AuthorDateRead date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize} />
                </div>
           ))}
          
        </div>
    )
}

export default NewsLinks
