import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { IoIosLogIn, IoIosMenu } from "react-icons/io";
// import { IoIosMenu } from "react-icons/md";
import { RiArticleLine, RiSlideshow2Line } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";
import { CgComponents } from "react-icons/cg";
import { Button } from '../button';
import { DisplayTitle } from '../Titles';
import { navLinks } from '../../constants/mock';
import './_navbar.scss'

export const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [activeLink, setActiveLink] = useState(0);
    const [showNestedActiveLink, setShowNestedActiveLink] = useState(false);
    const toggleActiveLink = (id) => {
        setShowNestedActiveLink(true);
        if (id == activeLink)
            setShowNestedActiveLink(!showNestedActiveLink);
        setActiveLink(id);
    }
    const changeBackground = () => {
        if (window.scrollY > 0) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div className={`navbar-container ${scroll ? "navbar-container-scroll" : ""}`}>
            <div className={'navbar'}>
                <div className="logo">
                    <img src={require("../../../assets/images/logo.png")?.default} style={{ width: 50, height: 50 }} />
                    <h4>Medicos PDF</h4>
                </div>
                <div className={'nav-item'}>
                    <ul className="nav-link">
                        {navLinks.map((navLink, index) => {
                            return <div key={index} className="link">
                                <li>
                                    <Link to={navLink?.route} onClick={() => setActiveLink(index)}>{navLink?.name}</Link>
                                </li>
                                <div className={`indicator ${activeLink == index && "active"}`}></div>
                            </div>

                        })}
                        <li>
                            <Link to="/signUp">
                                <Button href="#" type="transparent-outline-rounded" label="Create Account" />
                            </Link>
                        </li>

                    </ul>
                </div>


            </div>
            <div className={'navbar-dropdown'}>
                <div className="logo">
                    <img src={require("../../../assets/images/logo.png")?.default} style={{ width: 50, height: 50 }} />
                    <DisplayTitle type="display4" title="Medicos PDF" />
                </div>
                <IoIosMenu className="icon" onClick={() => setShowMenu(!showMenu)} />


                <div className={`nav-item${showMenu ? "-show" : ""}`}>
                    <div className="nav-item-top">
                        <div className="logo">
                            <img src={require("../../../assets/images/logo.png")?.default} style={{ width: 50, height: 50 }} />
                            <DisplayTitle type="display4" title="Medicos PDF" />
                        </div>
                        <VscClose className="icon" onClick={() => setShowMenu(false)} />
                    </div>
                    <ul className="nav-link">
                        {navLinks.map((navLink,index) => {
                            return <div key={index} onClick={() => toggleActiveLink(navLink.id)}>
                                <li>
                                    {navLink.icon}
                                    <Link to={navLink.route}>{navLink.name}</Link>
                                </li>
                                {navLink?.nested?.length &&
                                    <ul className={`nested-nav-link${navLink.id == activeLink && showNestedActiveLink ? '-show' : ''}`}>
                                        {navLink?.nested?.map((nestedNavlink,index) => {
                                            return <li key={index}>
                                                {nestedNavlink.icon}
                                                <Link to={nestedNavlink.route}>{nestedNavlink.name}</Link>
                                            </li>
                                        })}
                                    </ul>
                                }
                            </div>

                        })
                        }
                        {/* <li>
                            <Link to="/signUp">
                                <Button href="#" type="transparent-outline-rounded" label="Create Account" />
                            </Link>
                        </li> */}

                    </ul>
                </div>


            </div>

        </div>
    )
}
