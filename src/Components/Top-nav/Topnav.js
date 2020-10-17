import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import ScrollToTop from "../GeneralModules/ScrollToTop";
import $ from "jquery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes, faHome, faPhone} from "@fortawesome/free-solid-svg-icons";
const Topnav = () => {
    const [state, setState] = useState({
        hiden__nav__stt: false
    })
    const {hiden__nav__stt} = state;
    const updateHidenNavStt = () => {
        setState((prevState) => {
            return {
                ...prevState,
                hiden__nav__stt: !prevState.hiden__nav__stt
            }
        })
    }
    useEffect(() => {
        // animation of nav bar when scroll
        window.addEventListener("scroll", (ev) => {
            // initialize inside scroll event to avoind missing update
            const topNav = document.querySelector(".top-nav");
            const links = document.querySelectorAll(".top-nav .nav-link a");
            const contact = document.querySelector(".top-nav .contact span");
            const svgContact = document.querySelector(".top-nav .contact span svg");
            const svgHome = document.querySelector(".nav-link svg");
            const hidenNavBtn = document.querySelector(".toogle-hiden-nav svg");
            const y = window.scrollY;
            if (y > 0) {
                // when scroll happen
                topNav.style.backgroundColor = "white";
                contact.style.color = "black";
                svgContact.style.fill = "black";
                svgHome.style.fill = "black";
                hidenNavBtn.style.color = "black";
                for (let i = 0; i < links.length; i++){
                    links[i].style.padding = "10px 0";
                    links[i].style.color = "black";
                }
            } else {
                // when back to the top (y = 0)
                topNav.style.backgroundColor = "transparent";
                contact.style.color = "white";
                svgContact.style.fill = "white";
                svgHome.style.fill = "white";
                hidenNavBtn.style.color = "white";
                for (let i = 0; i < links.length; i++){
                    links[i].style.padding = "20px 0";
                    links[i].style.color = "white";
                }
            }
        })
        // show / hide hiden-nav when click menu icon (use JS instead of state for simpler accordion animation)
        const hidenNavBtn = document.querySelector(".toogle-hiden-nav svg");
        const hidenNav = document.querySelector(".hiden-nav");
        hidenNavBtn.addEventListener("click", () => {
            const $currentFillColor = $(".nav-link svg");
            hidenNavBtn.style.color = $currentFillColor.css("fill");
            if (hidenNav.style.maxHeight) {
                hidenNav.style.maxHeight = null;
            } else {
                hidenNav.style.maxHeight = hidenNav.scrollHeight + "px";
            }
        })
    }, [])
    return (
        <section className="top-nav">
            <div className="container-fluid">
                <div className="row">
                    {/* main-nav */}
                    <div className="col-auto nav-link">
                        <ul className="main-nav">
                            <li>
                                <NavLink
                                    to = "/"
                                    exact = {true}
                                    className="home"
                                    onClick = {()=>{ScrollToTop(0, 500)}}
                                >
                                    <FontAwesomeIcon icon = {faHome} className="home-icon"/>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to = "/"
                                    exact = {true}
                                    className="home"
                                    onClick = {()=>{ScrollToTop(0, 500)}}
                                >
                                    Advantages
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to = "/house-catalog"
                                    exact = {true}
                                    onClick = {()=>{ScrollToTop(400, 500)}}
                                >
                                    House Catalog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to = "/"
                                    exact = {true}
                                    className="home"
                                    onClick = {()=>{ScrollToTop(0, 500)}}
                                >
                                    Promotions
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                    to = "/"
                                    exact = {true}
                                    className="home"
                                    onClick = {()=>{ScrollToTop(0, 500)}}
                                >
                                    Guides
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* button to toogle hiden-nav */}
                    <div className="col toogle-hiden-nav">
                        {
                            (!hiden__nav__stt) ? 
                            (<FontAwesomeIcon 
                                className="openBtn" 
                                icon = {faBars}
                                onClick = {()=>{updateHidenNavStt()}}
                            >
                            </FontAwesomeIcon>) : 
                            (<FontAwesomeIcon 
                                className="closeBtn" 
                                icon = {faTimes}
                                onClick = {()=>{updateHidenNavStt()}}
                            >
                            </FontAwesomeIcon>)
                        }
                    </div>
                    <div className="col-auto contact">
                        <span>
                            <FontAwesomeIcon icon = {faPhone} className="phone-icon"/>
                            +321 123 4567
                        </span>
                    </div>
                    {/* hidden - nav */}
                    <ul className="hiden-nav">
                        <li>
                            <NavLink
                                to = "/"
                                exact = {true}
                                className="home"
                                onClick = {()=>{ScrollToTop(0, 500)}}
                            >
                                Advantages
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to = "/house-catalog"
                                exact = {true}
                                onClick = {()=>{ScrollToTop(400, 500)}}
                            >
                                House Catalog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to = "/"
                                exact = {true}
                                className="home"
                                onClick = {()=>{ScrollToTop(0, 500)}}
                            >
                                Promotions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to = "/"
                                exact = {true}
                                className="home"
                                onClick = {()=>{ScrollToTop(0, 500)}}
                            >
                                Guides
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Topnav;