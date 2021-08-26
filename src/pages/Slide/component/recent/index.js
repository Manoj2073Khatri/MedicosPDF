import React from 'react'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../../../News/components/author-date-readTime'
import './_recent.scss'
import { Link } from 'react-router-dom'

const Recent = ({slideDetailsLeft,slideDetailsRight}) => {
    return (
        <>
        <div className="slideRecent-wrapper">
            <div className="slideRecent-wrapper-left"  style={{backgroundImage:`url(${slideDetailsLeft.bgImage})`}}>

                <div className="slideRecent-wrapper-left-mid">
                    <NewsLinkTag color={slideDetailsLeft.tag.color} tag={slideDetailsLeft.tag.tag} link={slideDetailsLeft.tag.link} />
                    <h3 className="slideRecent-wrapper-left-mid-head"><a href={slideDetailsLeft.leftheadinglink}>{slideDetailsLeft.leftheading}</a></h3>
                    <AuthorDateRead date={slideDetailsLeft.dateAndTime.date} readTime={slideDetailsLeft.dateAndTime.readTime} color={slideDetailsLeft.dateAndTime.color} fontSize={slideDetailsLeft.dateAndTime.fontSize}/>
                    <h3 className="slideRecent-wrapper-left-mid-para">{slideDetailsLeft.leftpara}</h3>
                </div>

            </div>

            <div className="slideRecent-wrapper-right">
                <h1 className="slideRecent-wrapper-right-head">Recent</h1>
                <div className="slideRecent-wrapper-right-description">
                    {slideDetailsRight.filter((data,index)=>index<6).map((data,index)=>(
                    <div key={index} className="slideRecent-wrapper-right-description-wrapper">
                         <Link 
                            style={{ textDecoration: 'none' }}
                            to={{
                                pathname: '/slideDetails',
                                state: {
                                    data: JSON.stringify(data),
                                    wholeData: JSON.stringify(slideDetailsRight),
                                }
                            }}>
                             <h3 className="slideRecent-wrapper-right-description-wrapper-head">{data.SlideName}</h3>
                          </Link>
                        <AuthorDateRead  author='Inhype' authorColor='black' link='/ram' date='December 10,2019' readTime='5 Min read' color='#9f9f9f' fontSize='12px' />
                    </div>
                    ))}
                   

                </div>

           </div>

        </div>
           
        </>
    )
}

export default Recent
