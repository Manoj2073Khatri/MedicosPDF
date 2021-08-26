import React from 'react'
import './_newsDetailAlsoRead.scss'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../../../News/components/author-date-readTime'

const NewsDetailAlsoRead = ({details}) => {
    return (
        <>
         <div className="newsDetailAlsoRead-Container">
                <h3 className="newsDetailAlsoRead-Container-head">Also Read</h3>
                <div  className="newsDetailAlsoRead-Container-wrapper">
                        {details.map(data => (
                            <div key={data.id}  className="newsDetailAlsoRead-Container-wrapper-card">
                                <div className="newsDetailAlsoRead-Container-wrapper-card-img" style={{ backgroundImage: `url(${data.bgImage})` }}>
                                    <div className="newsDetailAlsoRead-Container-wrapper-card-img-rating">
                                        {data.rating}
                                    </div>
                                </div>
                                <div className="newsDetailAlsoRead-Container-wrapper-card-description">
                                    <div className="newsDetailAlsoRead-Container-wrapper-card-description-tags">
                                        {data.tags.map(data=>(
                                           <div key={data.id} className="newsDetailAlsoRead-Container-wrapper-card-description-tags-tag">
                                                <NewsLinkTag color={data.color} tag={data.tag} link={data.link} />
                                           </div>
                                        ))}
                                      
                                    </div>
                                    <h3 className="newsDetailAlsoRead-Container-wrapper-card-description-head"><a href={data.headinglink}>{data.heading}</a></h3>
                                    <AuthorDateRead  date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize} />
                                </div>
                              
                            </div>
                        ))}

                </div>
            </div>
            
        </>
    )
}

export default NewsDetailAlsoRead
