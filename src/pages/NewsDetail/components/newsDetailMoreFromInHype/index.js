import React from 'react'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../../../News/components/author-date-readTime'
import './_newsDetailMoreFromInHype.scss'
const NewsDetailMoreFromInHype = ({details}) => {
    return (
        <>
             <div className="newsDetailMoreFromInHype-Container">
                {/* <h3 className="newsDetailMoreFromInHype-Container-head1">More from InHype</h3>
                <h6 className="newsDetailMoreFromInHype-Container-head2">More from InHype</h6> */}
                <div  className="newsDetailMoreFromInHype-Container-wrapper">
                        {details.map(data => (
                            <div key={data.id}  className="newsDetailMoreFromInHype-Container-wrapper-card">
                                <div className="newsDetailMoreFromInHype-Container-wrapper-card-img" style={{ backgroundImage: `url(${data.bgImage})` }}>
                                    <div className="newsDetailMoreFromInHype-Container-wrapper-card-img-rating">
                                        {data.playbtn}
                                    </div>
                                </div>
                                <div className="newsDetailMoreFromInHype-Container-wrapper-card-description">    
                                    <NewsLinkTag color={data.tag.color} tag={data.tag.tag} link={data.tag.link} />
                                    <h3 className="newsDetailMoreFromInHype-Container-wrapper-card-description-head"><a href={data.headinglink}>{data.heading}</a></h3>
                                    <AuthorDateRead  date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize} />
                                </div>
                              
                            </div>
                        ))}

                </div>
            </div>
        </>
    )
}

export default NewsDetailMoreFromInHype
