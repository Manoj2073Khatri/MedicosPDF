import React from 'react';
import { MdAccountCircle } from "react-icons/md";
import { BsCalendar } from "react-icons/bs";
import { Button } from '../../../../components/global/button';
import { IconName } from "react-icons/bs";
import { Paragraphs } from '../../../../components/global/paragraphs';
import { DisplayTitle } from '../../../../components/global/Titles';
import { Headings } from "../../../../components/global/headings";
import "./index.scss";
const News = () => {
    return (
        <div className="home-page-news-wrapper">
            <div className="home-page-news-wrapper-content">
                <DisplayTitle color="white" type="display4" title="Medical News" />
                <div className="home-page-news-wrapper-content-row1">
                    <div className="home-page-news-wrapper-content-row1-news1">
                        <img className="image" src={require("../../../../assets/images/home/news1.png").default} />
                        <div className="home-page-news-wrapper-content-row1-news1-content">
                            <Headings type="heading5" content="Probiotic ‘yeast robots’ may one day treat IBD"/>
                           
                                <Paragraphs content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sit sed in in mi nascetur massa. Pellentesque netus gravida odio venenatis aliquet rutrum egestas vehicula vel. Ornare pretium sagittis ut enim nibh aliquet magna risus."/>
                            
                        </div>
                        <div className="bottom-container">
                            <div className="bottom-container-author">
                                <MdAccountCircle className="icon" />
                                <p className="text">Charlotte Hartley</p>
                            </div>

                            <div className="bottom-container-time">
                                <BsCalendar className="icon" />
                                <Paragraphs content="lightgray" content="2 days ago" />
                            </div>
                        </div>
                    </div>
                    <div className="home-page-news-wrapper-content-row1-news2">
                        <img className="image" src={require("../../../../assets/images/home/news2.png").default} />
                        <div className="home-page-news-wrapper-content-row1-news2-content">
                            <Headings type="heading5" content="COVID-19 vaccine: What to do about side effects"/>
                            <div className="paragraph">
                            <Paragraphs content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sit sed in in mi nascetur massa. Pellentesque netus gravida odio venenatis aliquet rutrum egestas vehicula vel. Ornare pretium sagittis ut enim nibh aliquet magna risus."/>
                            </div>
                        </div>
                        <div className="bottom-container">
                            <div className="bottom-container-author">
                                <MdAccountCircle className="icon" />
                                <p className="text">Audrey Amos, Pharm.D.</p>
                            </div>

                            <div className="bottom-container-time">
                                <BsCalendar className="icon" />
                                <Paragraphs content="lightgray" content="2 days ago" />
                            </div>
                        </div>

                    </div>
                    <div className="home-page-news-wrapper-content-row1-news1">
                        <img className="image" src={require("../../../../assets/images/home/news3.png").default} />
                        <div className="home-page-news-wrapper-content-row1-news1-content">
                           <Headings type="heading5" content="Fast food's equity problem"/>
                            <div className="paragraph">
                                <Paragraphs content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sit sed in in mi nascetur massa. Pellentesque netus gravida odio venenatis aliquet rutrum egestas vehicula vel. Ornare pretium sagittis ut enim nibh aliquet magna risus."/>
                            </div>
                        </div>
                        <div className="bottom-container">
                            <div className="bottom-container-author">
                                <MdAccountCircle className="icon" />
                                <p className="text">Audrey Amos, Pharm.D." </p>
                            </div>

                            <div className="bottom-container-time">
                                <BsCalendar className="icon" />
                                <Paragraphs content="lightgray" content="2 days ago" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default News
