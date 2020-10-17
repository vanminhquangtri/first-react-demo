import React from 'react';
import {useEffect} from "react";
import $ from "jquery";
import ScrollToTop from "../GeneralModules/ScrollToTop";
// button at the right bottom of all pages
const Backtop = (props) => {
    useEffect(() => {
        const $backToTopBtn = $(".back-top");
        window.addEventListener("scroll", (ev) => {
            const y = window.scrollY;
            if (y > 0) {
                $backToTopBtn.css("opacity", 1)
            } else {$backToTopBtn.css("opacity", 0)}
        })
        $backToTopBtn.on("click",() => {
            ScrollToTop(0, 500)
        })
    },[])
    return (
        <div className="back-top">
            <img src={require("../../image/back-top/up-chevron.svg")} alt=""/>
        </div>
    );
};

export default Backtop;