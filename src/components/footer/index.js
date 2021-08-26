import React from 'react';
import { SocialIcons } from '../global/social_icons';
//import "./_footer.scss";
import { Headings } from '../global/headings';
import { Paragraphs } from '../global/paragraphs';
import ButtonWithArrow from '../../pages/Home/components/buttonWithArrow';
import { Images } from '../global/images';

const Footer = ({ columnOneDescription, columnThreeDescription, appList, footerBottomContent }) => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-wrapper-top">
                    <div className="footer-wrapper-top-column1">
                        <Headings type="heading3" content="Connect with Us" />
                        <div className="footer-wrapper-top-column1-texts">
                            <Paragraphs className="Paragraphs" content={columnOneDescription} />
                        </div>
                        <div className="footer-wrapper-top-column1-icons">
                            <SocialIcons icon="twitter" type="twitter" styles="rounded" />
                            <SocialIcons icon="facebook" type="facebook" styles="rounded" />
                            <SocialIcons icon="instagram" type="instagram" styles="rounded" />
                            <SocialIcons icon="youtube" type="youtube" styles="rounded" />
                            <SocialIcons icon="linkedin" type="linkedin" styles="rounded" />
                        </div>
                    </div>

                    <div className="footer-wrapper-top-column2">
                        <Headings type="heading3" content="Our App" />
                        {/* <ul className="footer-wrapper-top-column2-texts">
                            {
                                appList.map((item) => {
                                    return <li>{item}</li>
                                })
                            }
                        </ul> */}
                        <div className="footer-wrapper-top-column2-appIcon">
                            {
                                appList.map((item,index)=>{
                                    return <div key={index} className="applist">
                                        <Images  width={50} height={50} Image={item.icon} />
                                    </div>
                                }
                                
                                )
                            }

                        </div>
                    </div>

                    <div className="footer-wrapper-top-column3">
                        <Headings type="heading3" content="About Us" />
                        <ul className="footer-wrapper-top-column3-texts">
                            <Paragraphs content={columnThreeDescription} type="" />
                        </ul>
                        {/* <Button className="button" type="default-rounded" label="Read More" /> */}
                         <div className="footer-wrapper-top-column3-btn">
                           <ButtonWithArrow name="Read More..." link="/readMore" />
                         </div>
                        
                    </div>

                </div>


                <div className="footer-wrapper-bottom">
                <div className="footer-wrapper-bottom-copyright">
                
                    <p>© 2020 <span>Medicos International </span>    
                    </p>
                    <p>All Rights Reserved</p>
                </div>
                
                <ul className="footer-wrapper-bottom-links">
                    {
                        footerBottomContent.map((item,index) => {
                            return <li key={index}><a href='./someLinkss'>{item}</a></li>
                        })
                    }
                </ul>
                </div>

            </div>

        </div>
    )
}

export default Footer
