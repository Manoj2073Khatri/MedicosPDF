import React, { useEffect, useState, useCallback } from 'react';
import { Link } from "react-router-dom";
import firebase from "firebase";
// import {firestore} from "@react-firebase/firestore";
import { motion } from 'framer-motion';

//LOCAL IMPORTS
import "./index.scss";
import { exploreLinks, pages, Sub_Catagories, newsMoreFromHypeSliderDetails, bookTrendingDetails, bookSuggestionDetails, newsLastWholeSectionDetails } from '../../components/constants/mock';
import { Headings } from '../../components/global/headings';
import ExploreLinkTab from './components/exploreLinkTab';
import Pagination from '../../components/global/pagination';
import { SubCatagories } from '../Slide/component/SubCatagories';
import BookCard from './components/bookCard';
import MoreFromHypeSlider from '../News/components/moreFromHypeSlider';
import BookTrending from './components/bookTrending';
import BookSuggestion from './components/bookSuggestion';
import { shuffleArrayList } from "../../services/global/CommonServices";
import { bookCategories } from "../../constants/Book/BookCategories";

const Book = () => {
    const firestoreDatabase = firebase.firestore();
    const [allBooks, setAllBooks] = useState([]);
    const [basicScienceBooks, setBasicScienceBooks] = useState([])
    const [clinicalBooks, setClinicalBooks] = useState([])
    const [nursingBooks, setNursingBooks] = useState([])
    const [dentalBooks, setDentalBooks] = useState([])
    const [physiotherapyBooks, setPhysiotherapyBooks] = useState([])
    const [mcqBooks, setMCQBooks] = useState([])
    const [entranceBooks, setEntranceBooks] = useState([]);

    const [initialLoader, setInitialLoader] = useState(true);
    const [loadingAllBooks, setLoadingAllBooks] = useState(false);
    const [loadingClinical, setLoadingClinical] = useState(false);
    const [loadingBasicScience, setLoadingBasicScience] = useState(false);
    const [loadingDental, setLoadingDental] = useState(false);
    const [loadingNursing, setLoadingNursing] = useState(false);
    const [loadingPhysiotherapy, setLoadingPhysiotherapy] = useState(false);
    const [loadingMCQ, setLoadingMCQ] = useState(false);
    const [loadingEntrance, setLoadingEntrance] = useState(false);
  
    // let exploreLinkActiveData=''
    const [mappingData,setMappingData]=useState([])
    const [exploreLinkActiveData,setExploreLinkActiveData]=useState('')

    const randomSubcategory = useCallback(category => {
        let filtered = bookCategories.filter(
            bookCategory => bookCategory.category == category,
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

    const nextTrigger = (index) => {
        console.log("triggered",index)
        let allBooksData = [];
        try {
            // const lastDoc = allBooks[allBooks.length - 1]
            const lastDoc = mappingData[allBooks.length - 1]
            setLoadingBasicScience(true);
            // console.log("BASICCCCCCCCC science");
            const AllBooks = firestoreDatabase
                .collection(`K-Books`)
                .orderBy('title')
                .startAfter(lastDoc.title)
                .limit(9)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(ele => {
                        // console.log(ele.data(), "%%%%%%%%%%%%%%%%%%%%5");
                        allBooksData.push(ele.data());
                    });
                    setLoadingAllBooks(false);
                    setAllBooks(() => allBooksData);
                    
                });

        } catch (err) {
            console.log("ERROR FETCHING BOOKS", err);
        }
    }

    const previousTrigger = (index) => {
        console.log("previous triggered",index)
        let allBooksData = [];
        try {
            const lastDoc = allBooks[0]
            setLoadingBasicScience(true);
            // console.log("BASICCCCCCCCC science");
            const AllBooks = firestoreDatabase
                .collection(`K-Books`)
                .orderBy('title')
                .endAt(lastDoc.title)
                .limit(9)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(ele => {
                        // console.log(ele.data(), "%%%%%%%%%%%%%%%%%%%%5");
                        allBooksData.push(ele.data());
                    });
                    setLoadingAllBooks(false);
                    setAllBooks(() => allBooksData);
                });

        } catch (err) {
            console.log("ERROR FETCHING BOOKS", err);
        }
    }

    useEffect(() => {
        let isMounted = true;
       
        const getAllBooks = () => {
            let allBooksData = [];
            try {
                if (isMounted) {
                    setLoadingBasicScience(true);
                }
                console.log("BASICCCCCCCCC science");
                const AllBooks = firestoreDatabase
                    .collection(`K-Books`)
                    .orderBy('title')
                    .limit(9)
                    .get()
                    .then(querySnapshot => {
                        querySnapshot.forEach(ele => {
                            // console.log(ele.data(), "%%%%%%%%%%%%%%%%%%%%5");
                            allBooksData.push(ele.data());
                            //  console.log(ele.data(), "%%%%%%%%%%%%%%%%%%%%5");
                        });

                        if (isMounted) {
                            setLoadingAllBooks(false);
                            setAllBooks(() => allBooksData);
                        }
                    });

            } catch (err) {
                console.log("ERROR FETCHING BOOKS", err);
            }
        };
        const getUserPreferencesData = (subjectName) => {
            console.log("CALLLING USER PREFERENCES");
            let basicScienceData = [];
            let allBooksData = [];
            let clinicalScienceData = [];
            let dentistScienceData = [];
            let nursingScienceData = [];
            let physiotherapyData = [];
            try {
                // console.log('[randomSubcategory(\'Dental\')]', [randomSubcategory('Dental')])
                // console.log('initial start',subjectName)
                
                if (subjectName == "All Books") {
                    setLoadingAllBooks(true);
                    console.log('checking:',subjectName);
                    // const randomAllBooks = randomSubcategory('All Books');
                    const AllBooks = firestoreDatabase
                        .collection(`K-Books`)
                        .orderBy('title')
                        .limit(9)
                        .get()
                        .then(querySnapshot => {
                            querySnapshot.forEach(ele => {
                                // console.log(ele, 'CLINICAL SCIENCE5', ele);
                                allBooksData.push(ele.data());
                            });

                            if (isMounted) {
                                setLoadingAllBooks(false);
                                setAllBooks(() =>allBooksData);
                                setMappingData(()=>allBooksData)
                            }
                        });
                }
                else if (subjectName == "Basic Science") {
                    setLoadingBasicScience(true);
                    console.log('checking:',subjectName);
                    const randomBasicScience = randomSubcategory('Basic Science');
                    const BasicScienceBooks = firestoreDatabase
                        .collection(`K-Books-BasicScience-${randomBasicScience.replace(/\s|\//g, "")}`)
                        .get()
                        .then(querySnapshot => {
                            querySnapshot.forEach(ele => {
                                // console.log(ele, "%%%%%%%%%%%%%%%%%%%%5");
                                basicScienceData.push(ele.data());
                            });

                            if (isMounted) {
                                setLoadingBasicScience(false);
                                setBasicScienceBooks(() =>shuffleArrayList(basicScienceData));
                                setMappingData(() =>shuffleArrayList(basicScienceData));
                            }
                        });
                } 
                else if (subjectName == "Clinical Science") {
                    setLoadingClinical(true);
                    console.log('checking:',subjectName);
                    const randomClinicalScience = randomSubcategory('Clinical Science');
                    const ClinicalBooks = firestoreDatabase
                        .collection(`K-Books-ClinicalScience-${randomClinicalScience.replace(/\s|\//g, "")}`)
                        .get()
                        .then(querySnapshot => {
                            querySnapshot.forEach(ele => {
                                // console.log(ele, 'CLINICAL SCIENCE5', ele);
                                clinicalScienceData.push(ele.data());
                            });

                            if (isMounted) {
                                setLoadingClinical(false);
                                setClinicalBooks(() => shuffleArrayList(clinicalScienceData));
                                setMappingData(()=>shuffleArrayList(clinicalScienceData));
                            }
                        });
                } else if (subjectName == "Dental") {
                    setLoadingDental(true);
                    console.log('checking:',subjectName);
                    const randomDental = randomSubcategory('Dental');
                    const DentistBooks = firestoreDatabase
                        .collection(`K-Books-Dental-${randomDental.replace(/\s|\//g, "")}`)
                        .get()
                        .then(querySnapshot => {
                            querySnapshot.forEach(ele => {
                                dentistScienceData.push(ele.data());
                            });

                            if (isMounted) {
                                setLoadingDental(false);
                                setDentalBooks(() => shuffleArrayList(dentistScienceData));
                                setMappingData(()=>shuffleArrayList(dentistScienceData));
                            }
                        });

                } else if (subjectName == "Nursing") {
                    setLoadingNursing(true);
                    console.log('checking:',subjectName);
                    const randomNursing = randomSubcategory('Nursing');
                    const NursingData = firestoreDatabase
                        .collection(`K-Books-Nursing-${randomNursing.replace(/\s|\//g, "")}`)
                        .get()
                        .then(querySnapshot => {
                            querySnapshot.forEach(ele => {
                                nursingScienceData.push(ele.data());
                            });

                            if (isMounted) {
                                setLoadingNursing(false);
                                setNursingBooks(() => shuffleArrayList(nursingScienceData));
                                setMappingData(()=>shuffleArrayList(nursingScienceData));
                            }
                        });
                } else if (subjectName == "Physiotherapy") {
                    setLoadingPhysiotherapy(true);
                    console.log('checking:',subjectName);
                    const randomPhysiotherapy = randomSubcategory('Physiotherapy');
                    const PhysiotherapyData = firestoreDatabase
                        .collection(`K-Books-Physiotherapy-${randomPhysiotherapy.replace(/\s|\//g, "")}`)
                        .get()
                        .then(querySnapshot => {
                            querySnapshot.forEach(ele => {
                                physiotherapyData.push(ele.data());
                            });

                            if (isMounted) {
                                setLoadingPhysiotherapy(false);
                                setPhysiotherapyBooks(() => shuffleArrayList(physiotherapyData));
                                setMappingData(()=>shuffleArrayList(physiotherapyData));
                            }
                        });
                }
            } catch (err) {
                console.log("ERROR FETCHING BOOKS", err);
            }
        };
        
        // getAllBooks();
        getUserPreferencesData(exploreLinkActiveData);
        return () => {
            isMounted = false;
        }
    }, [exploreLinkActiveData])

    const activeData=(data)=>{
         setExploreLinkActiveData(data[0].linkName)
         console.log('from callback function',data)
   }
    return (
        <motion.div
            className="book-page">
            <BookTrending details={bookTrendingDetails} />
            <MoreFromHypeSlider details={newsMoreFromHypeSliderDetails} />
            <BookSuggestion details={bookSuggestionDetails} />
            <div className="book-page-book-section">
                <div className="book-page-book-section-col1">
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
                <div className="book-page-book-section-col2">

                    <div className="tabs">
                        <ExploreLinkTab links={exploreLinks} activeData={activeData} />
                    </div>
                    <div className="book-page-book-section-col2-content-section">
                        {mappingData.map((book, index) => {
                            return <Link
                                key={book.image + index}
                                style={{ textDecoration: 'none' }}
                                to={{
                                    pathname: '/bookDetails',
                                    state: {
                                        data: JSON.stringify(book),
                                        wholeData: JSON.stringify(mappingData),
                                    }
                                }}>
                                <div className="item">
                                    <BookCard
                                        image={book.image}
                                        title={book.subject}
                                        author={book.writer}
                                        rating={book.rating}
                                    />
                                </div>
                            </Link>
                        })}

                    </div>
                    <div className="pagination">
                        <Pagination
                            nextTrigger={nextTrigger}
                            previousTrigger={previousTrigger}
                            pages={pages}
                            activeColor="primary"
                        />
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Book
