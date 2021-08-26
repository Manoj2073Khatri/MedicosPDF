import React from 'react'
import './_newsDetailRelatedPosts.scss'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../../../News/components/author-date-readTime'

const NewsDetailRelatedPosts = ({details}) => {
    return (
        <>

            <div className="newsDetailRelatedPosts-Container">
                <h3 className="newsDetailRelatedPosts-Container-head">Related Posts</h3>
                <div  className="newsDetailRelatedPosts-Container-wrapper">
                        {details.map(data => (
                            <div key={data.id}  className="newsDetailRelatedPosts-Container-wrapper-card">
                                <div className="newsDetailRelatedPosts-Container-wrapper-card-img" style={{ backgroundImage: `url(${data.bgImage})` }}>
                                    <div className="newsDetailRelatedPosts-Container-wrapper-card-img-rating">
                                        {data.rating}
                                    </div>
                                </div>
                                <div className="newsDetailRelatedPosts-Container-wrapper-card-description">
                                    <NewsLinkTag color={data.tag.color} tag={data.tag.tag} link={data.tag.link} />
                                    <h3 className="newsDetailRelatedPosts-Container-wrapper-card-description-head"><a href={data.headinglink}>{data.heading}</a></h3>
                                    <AuthorDateRead author={data.dateAndTime.author} authorColor={data.dateAndTime.authorColor} link={data.dateAndTime.link} date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize} />
                                    <p className="newsDetailRelatedPosts-Container-wrapper-card-description-para">{data.para}</p>
                                </div>
                              
                            </div>
                        ))}

                </div>
            </div>
            
        </>
    )
}

export default NewsDetailRelatedPosts
