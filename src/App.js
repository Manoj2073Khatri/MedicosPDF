import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//LOCAL IMPORTS
import Footer from "./components/footer";
import { Navbar } from "./components/global/navbar";
import Book from "./pages/Book";
import Component from "./pages/Component";
import Home from "./pages/Home";
import { appList, footerBottomContent } from "./components/constants/mock";
import BookDetail from "./pages/BookDetail";
import SignUp from "./components/signUp";
import Slide from "./pages/Slide";
import News from "./pages/News";
import SlideDetail from "./pages/SlideDetail";
import Article from "./pages/Article";
import NewsDetail from "./pages/NewsDetail";
import { Journal } from "./pages/journal";

const App = () => {

  const location = useLocation();
  return (
    <>
      <div className="main-container">
        <Navbar />
        <AnimatePresence
          initial={false}
          exitBeforeEnter>

          <Switch location={location} key={location.key}>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/book">
              <Book />
            </Route>
            <Route path="/article">
              <Article />
            </Route>

            <Route path="/bookDetails">
              <BookDetail/>
            </Route>

            <Route path="/news">
              <News />
            </Route>

            <Route path="/newsDetails">
              <NewsDetail />
            </Route>

            <Route path="/journal">
              <Journal />
            </Route>

            <Route path="/slide">
              <Slide />
            </Route>

            <Route path="/slideDetails">
              <SlideDetail />
            </Route>


            <Route path="/component">
              <Component />
            </Route>

            <Route path="/signUp">
              <SignUp />
            </Route>


          </Switch>

        </AnimatePresence>
        <Footer columnOneDescription="Founded in 2077 by Medicos International, Medicos PDF has 
    started its way from its beginnings. When Medicos first started out,
     team passion for how to make people being healthy, well sanitized, as well as focused
    a cleanliness environment drove them to start their own business.
     We hope you like our personalized, world class knowledge as much as we like offering 
     them to you. If you have any questions or comments, please don’t hesitate to contact us."
          appList={appList}
          columnThreeDescription="Welcome to Medicos PDF, May your best source for
             all health-related subject. We’re dedicated to providing you the very best
            information about health facts, theories of a subject. All the articles are based
             on queries answered by expertise, health journal,
             view of physicians, review of healthcare providers in active clinical practice. "

          footerBottomContent={footerBottomContent}
        />
      </div>

    </>
  )
}

export default App;
