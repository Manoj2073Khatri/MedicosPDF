import React ,{ useEffect, useState, useCallback } from 'react';
import { Link } from "react-router-dom";
import firebase from "firebase";
//LOCAL IMPORTS
import "./index.scss";
import { pages, exploreLinks, Sub_Catagories, sliderSlides,  newsMoreFromHypeSliderDetails, slideTrending, slideRecentSlideDetails, slideRecentLeft, slideRecentRight } from '../../components/constants/mock';
import { Headings } from '../../components/global/headings';
import SlideCard from '../SlideDetail/components/slideCard';
import ExploreLinkTab from '../Book/components/exploreLinkTab';
import Pagination from '../../components/global/pagination';
import { SubCatagories } from './component/SubCatagories';
import MoreFromHypeSlider from '../News/components/moreFromHypeSlider';
import SlideTrending from './component/slideTrending';
import SlideRecentSlides from './component/slideRecentSlides';
import Recent from './component/recent';
import { slideCategories } from '../../constants/Book/BookCategories';
import { shuffleArrayList } from '../../services/global/CommonServices';


const Slide = () => {
    const firestoreDatabase = firebase.firestore();
    const [mappingData,setMappingData]=useState([])
    const [exploreLinkActiveData,setExploreLinkActiveData]=useState('')
    const [loadingSlides, setLoadingSlides] = useState(false);

        const randomSubcategory = useCallback(category => {
            let filtered = slideCategories .filter(
                slideCategory => slideCategory.category == category,
            );
            let subCategories = filtered[0].subCategories;
            let randomInteger = Math.floor(Math.random() * (subCategories.length - 1));
            console.log('######');
            console.log(randomInteger);
            // console.log(category, randomInteger, subCategories[randomInteger]);
            return subCategories[Math.floor(Math.random() * (subCategories.length - 1))]
                .category;
        }, []
        )
        useEffect(() => {
            let isMounted = true;
        
            const getUserPreferencesData = (subjectName) => {
                console.log("CALLLING USER PREFERENCES");
            
                let allSlidesData = [];
                
                try {
                   
                    if (subjectName == "All Books") {
                        setLoadingSlides(true);
                        console.log('checking:',subjectName);
                        const AllSlides = firestoreDatabase
                            .collection(`AllSlidesDataLockDownVersions`)
                            .get()
                            .then(querySnapshot => {
                                querySnapshot.forEach(ele => {
                                    allSlidesData.push(ele.data());
                                });

                                if (isMounted) {
                                    setLoadingSlides(false);
                                    setMappingData(()=>allSlidesData)
                                }
                            });
                    }
                    else if (subjectName == "Basic Science") {
                        setLoadingSlides(true);
                        console.log('checking:',subjectName);
                        const randomBasicScience = randomSubcategory('Basic Science');
                        const BasicScienceSlides = firestoreDatabase
                            .collection(`K-Slides-BasicScience-${randomBasicScience.replace(/\s|\//g, "")}`)
                            .get()
                            .then(querySnapshot => {
                                querySnapshot.forEach(ele => {
                                    allSlidesData.push(ele.data());
                                });

                                if (isMounted) {
                                    setLoadingSlides(false);
                                    setMappingData(() =>shuffleArrayList(allSlidesData));
                                }
                            });
                    } 
                    else if (subjectName == "Clinical Science") {
                        setLoadingSlides(true);
                        console.log('checking:',subjectName);
                        const randomClinicalScience = randomSubcategory('Clinical Science');
                        const ClinicalSlides = firestoreDatabase
                            .collection(`K-Slides-ClinicalScience-${randomClinicalScience.replace(/\s|\//g, "")}`)
                            .get()
                            .then(querySnapshot => {
                                querySnapshot.forEach(ele => {
                                    allSlidesData.push(ele.data());
                                });

                                if (isMounted) {
                                    setLoadingSlides(false);
                                    setMappingData(()=>shuffleArrayList(allSlidesData));
                                }
                            });
                    } else if (subjectName == "Dental") {
                        setLoadingSlides(true);
                        console.log('checking:',subjectName);
                        const randomDental = randomSubcategory('Dental');
                        const DentistSlides = firestoreDatabase
                            .collection(`K-Slides-Dental-${randomDental.replace(/\s|\//g, "")}`)
                            .get()
                            .then(querySnapshot => {
                                querySnapshot.forEach(ele => {
                                    allSlidesData.push(ele.data());
                                });

                                if (isMounted) {
                                    setLoadingSlides(false);
                                    setMappingData(()=>shuffleArrayList(allSlidesData));
                                }
                            });

                    } else if (subjectName == "Nursing") {
                        setLoadingSlides(true);
                        console.log('checking:',subjectName);
                        const randomNursing = randomSubcategory('Nursing');
                        const NursingSlides = firestoreDatabase
                            .collection(`K-Slides-Nursing-${randomNursing.replace(/\s|\//g, "")}`)
                            .get()
                            .then(querySnapshot => {
                                querySnapshot.forEach(ele => {
                                    allSlidesData.push(ele.data());
                                });

                                if (isMounted) {
                                    setLoadingSlides(false);
                                    setMappingData(()=>shuffleArrayList(allSlidesData));
                                }
                            });
                    } else if (subjectName == "Physiotherapy") {
                        setLoadingSlides(true);
                        console.log('checking:',subjectName);
                        const randomPhysiotherapy = randomSubcategory('Physiotherapy');
                        const PhysiotherapySlides = firestoreDatabase
                            .collection(`K-Slides-Physiotherapy-${randomPhysiotherapy.replace(/\s|\//g, "")}`)
                            .get()
                            .then(querySnapshot => {
                                querySnapshot.forEach(ele => {
                                    allSlidesData.push(ele.data());
                                });

                                if (isMounted) {
                                    setLoadingSlides(false);
                                    setMappingData(()=>shuffleArrayList(allSlidesData));
                                }
                            });
                    }
                } catch (err) {
                    console.log("ERROR FETCHING BOOKS", err);
                }
            };
            
            getUserPreferencesData(exploreLinkActiveData);
            return () => {
                isMounted = false;
            }
        }, [exploreLinkActiveData])

        const activeData=(data)=>{
            setExploreLinkActiveData(data[0].linkName)
        }

    return (
        <div className="slide-page-container">
            <Recent slideDetailsLeft={slideRecentLeft} slideDetailsRight={mappingData}/>
            <SlideRecentSlides  detailsSlides={mappingData}/>
            <div>
               <SlideTrending details={mappingData}/>
            </div>   
            <MoreFromHypeSlider details={newsMoreFromHypeSliderDetails} />
            
            <div className="slide-page-container-wrapper">
               
                <div className="slide-page-slide-section">
                    <div className="slide-page-slide-section-col1">
                        <div className="heading">
                            <Headings className="heading" content="Explore" type="heading3" />
                        </div>
                        <div className="sub-heading">
                            <Headings type="heading5" content="Sub Catagories" />
                        </div>
                        <div className="sub-categories">
                            <SubCatagories subCategories={Sub_Catagories} />
                        </div>
                
                    </div>
                    <div className="slide-page-slide-section-col2">

                        <div className="tabs">
                            <ExploreLinkTab links={exploreLinks} activeData={activeData}  />
                        </div>
                        <div className="slide-page-slide-section-col2-content-section">
                            {mappingData.filter((data,index)=>index<6).map((slide, index) => (
                                  <Link 
                                  key={index}
                                    style={{ textDecoration: 'none' }}
                                    to={{
                                        pathname: '/slideDetails',
                                        state: {
                                            data: JSON.stringify(slide),
                                            wholeData: JSON.stringify(mappingData),
                                           
                                        }
                                    }}>
                                    <div className="item" >
                                            <SlideCard
                                                title={slide.slideCategory}
                                                description={slide.SlideName}
                                                images={slide.slideImages}
                                            />
                                        </div>
                              </Link>
                            ))}
                        </div>
                        <div className="pagination">
                            <Pagination
                                pages={pages}
                                activeColor="primary"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Slide
