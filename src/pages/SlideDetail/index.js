import React,{useState} from 'react';
import {
    useLocation
} from "react-router-dom";

import { slideTrending } from '../../components/constants/mock';
import CategorizedSlides from './components/categorizedSlides';
import SlideDescription from './components/slideDescription';
import ImgSlider from './components/slider';
import "./index.scss";
const SlideDetail = () => {
    const location = useLocation();
    const {data,wholeData}=location.state;
    const [slide,setSlide] = useState(JSON.parse(data))
    const [wholeSlides,setWholeSlides ]= useState(JSON.parse(wholeData))
    const categorizedSlides= wholeSlides.filter((data)=>data.SlideName!=slide.SlideName);

    const activeData=(data)=>{
        setSlide(data)
        window.scrollTo({top:0,behavior:'smooth'});
    }
    return (
        <div className="slide-detail-page-wrapper">
            <ImgSlider images={slide}/>
            <SlideDescription/>
            <CategorizedSlides details={categorizedSlides} activeData={activeData}/>
        </div>
    )
}

export default SlideDetail
