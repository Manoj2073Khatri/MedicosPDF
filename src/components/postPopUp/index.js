import React, { useState } from 'react'
import { Images } from '../global/images'
import NewsLinkTag from '../global/newsLinkTag'
import { Paragraphs } from '../global/paragraphs';
import { VscClose } from "react-icons/vsc";
import './_postPopUp.scss';
import background from '../../assets/images/popup.jpg';

export const PostPopUp = () => {
    const [scroll, setScroll] = useState(false);
    const [closeModal, setCloseModal] = useState(false);
    const PopUp = () => {
        const winScroll=document.documentElement.scrollTop;
        const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
        const scrolled=(winScroll / height)*100;
        if (scrolled > 80) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    }

    window.addEventListener('scroll', PopUp);
    return (
        <div>
            {
                !closeModal &&
                <div className="postPopUp-wrapper">
                    <div className={`postPopUp ${scroll ? "active" : ""}`}>
                        <div className="postPopUp-content">
                            <VscClose className="close-button" onClick={()=>setCloseModal(true)}/>

                            <div className="postPopUp-content-col1" style={{ backgroundImage: `url(${background})` }}>

                            </div>

                            <div className="postPopUp-content-col2">
                                <NewsLinkTag color='#2568ef' tag='travel' />
                                <div className="details">
                                    <h3>Wild swimming,concious matter and better adventure</h3>

                                </div>

                                <Paragraphs type="muted-text" content="Sponsored" />

                            </div>

                        </div>

                    </div>


                </div>

            }
        </div>
    )
}
