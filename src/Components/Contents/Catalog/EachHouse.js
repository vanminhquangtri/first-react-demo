/**@jsx jsx */
import {jsx, css} from "@emotion/core";
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faBed, faHouseUser, faTree, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import TinySlider from "tiny-slider-react";
import {useEffect} from "react";
import {NavLink} from "react-router-dom";
import urlSlug from "url-slug";
import ScrollToTop from "../../GeneralModules/ScrollToTop";
// format price
function formatNumber(num) {
    return "$" + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
// animation of image slide-show
const setting = {
    items: 1,
    controls: false,
}
// start component
const EachHouse = (props) => {
    ScrollToTop(0,0)
    const {id} = props.match.params;
    const {houseInfo} = props;
    // houses to be display at the bottom
    let otherHouse = [];
    for (let i = 0; i < houseInfo.length; i ++ ){
        if (otherHouse.length < 6) {
            if (houseInfo[i].id !== parseFloat(id)) {
                otherHouse.push(houseInfo[i])
            }
        }
    }
    useEffect(() => {
        // use image for nav button of slide show
        const navBtn = document.querySelectorAll(".slide-show .tns-nav button");
        houseInfo.forEach((house, index) => {
            if (house.id === parseFloat(id)){
                for (let i = 0; i < house.sideImage.length; i++){
                    navBtn[i].style.backgroundImage = `url(${house.sideImage[i]})`
                }
            }
        })
        // toogle height of content (description) when click show more / show less
        const houseDescriptionContent = document.querySelector(".house-description .content");
        const overlay = document.querySelector(".house-description .content .overlay");
        const showMoreLessBtn = document.querySelector(".house-description .showBtn");
        showMoreLessBtn.addEventListener("click", (ev) => {
            ev.preventDefault();
            houseDescriptionContent.classList.toggle("showMoreShowLess");
            overlay.classList.toggle("display");
            const txt = showMoreLessBtn.innerHTML;
            if (txt === "Show More") {
                showMoreLessBtn.innerHTML = "Show Less"
            } else showMoreLessBtn.innerHTML = "Show More"
        })
        // animation buy button when croll mouse
        const buyButton = document.querySelector(".detail-info .buy-button");
        // on load
        if (window.innerWidth <= 1210) {
            buyButton.style.position = "relative";
                buyButton.style.top = "unset";
                buyButton.style.right = "unset";
                buyButton.style.bottom = "unset";
                buyButton.style.left = "unset";
        }
        // on resize
        window.addEventListener("resize", (ev) => {
            if (window.innerWidth <= 1210){
                buyButton.style.position = "relative";
                buyButton.style.top = "unset";
                buyButton.style.right = "unset";
                buyButton.style.bottom = "unset";
                buyButton.style.left = "unset";
            } else {
                buyButton.style.display = "absolute";
            }
        })
        const buyButtonPos = buyButton.getBoundingClientRect();
        const detailInfo = document.querySelector(".detail-info");
        const detailInfoPos = detailInfo.getBoundingClientRect();
        const topNav = document.querySelector(".top-nav");
        const topNavPos = topNav.getBoundingClientRect();
        window.addEventListener("scroll", (ev) => {
            if (window.innerWidth > 1210){
                const y = window.scrollY;
                if (y < topNavPos.height + detailInfoPos.y){
                    buyButton.style.position = "absolute";
                    buyButton.style.top = 0;
                    buyButton.style.right = "100px";
                    buyButton.style.bottom = "unset";
                    buyButton.style.left = "unset";
                }
                if (y >= detailInfoPos.y - topNavPos.height * 2){
                    buyButton.style.position = "fixed";
                    buyButton.style.top = topNavPos.height * 2  + "px";
                    buyButton.style.bottom = "unset";
                    buyButton.style.right = "100px";
                    buyButton.style.bottom = "unset";
                    buyButton.style.left = "unset";
                }
                if (y >= detailInfoPos.y + detailInfoPos.height - buyButtonPos.height - topNavPos.height){
                    buyButton.style.position = "absolute";
                    buyButton.style.top = "unset";
                    buyButton.style.right = "100px";
                    buyButton.style.bottom = "0";
                    buyButton.style.left = "unset";
                }
            }
        })
        // END animation buy button when croll mouse
    }, [houseInfo, id])
    return (
        <section className="each-house">
            {/* big image and info at the top */}
            {
                houseInfo.map((house, index) => {
                    if (house.id === parseFloat(id)) {
                        return (
                            <div 
                                className="container-fluid top-highline" 
                                key={index}
                            >
                                <div 
                                    className="background-image"
                                    css = {css`
                                            background-image: url(${house.mainImage})
                                        `}
                                ></div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row price-name">
                                            <span className="price">{formatNumber(house.price)}</span>
                                            <span className="name">{house.address}</span>
                                        </div>
                                        <div className="row specs">
                                            <div className="col-3">
                                                <div>
                                                    <FontAwesomeIcon icon = {faLayerGroup} className="icon"/> <br/>
                                                    {house.storeys} <br/>
                                                    Storeys
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <FontAwesomeIcon icon = {faBed} className="icon"/> <br/>
                                                    {house.bedrooms} <br/> 
                                                    Bedrooms <br/>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <FontAwesomeIcon icon = {faHouseUser} className="icon"/> <br/>
                                                    {house.living__area} m<sup>2</sup><br/>
                                                    Living_area <br/>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <FontAwesomeIcon icon = {faTree} className="icon"/> <br/>
                                                    {house.land__area} m<sup>2</sup><br/>
                                                    Land_area <br/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    return "";
                })
            }
            {/* detail information */}
            {
                houseInfo.map((house, index) => {
                    if (house.id === parseFloat(id)) {
                        return (
                            <div className="detail-info" key = {index}>
                                {/* slide show */}
                                <div className="slide-show">
                                    <TinySlider
                                        settings = {setting}
                                    >
                                        {
                                            house.sideImage.map((image, index) => {
                                                return (
                                                    <div
                                                        key = {index}
                                                        css = {css`
                                                            background-image: url(${image});
                                                            background-repeat: no-repeat;
                                                            background-size: 100% 100%;
                                                            background-position: center
                                                        `}
                                                    >

                                                    </div>
                                                )
                                            })
                                        }
                                    </TinySlider>
                                </div>
                                <div className="key-feature">
                                    <h1>Key Feature</h1>
                                    <ul>
                                        {
                                            house.key__feature.map((feature, index) => {
                                                return (
                                                    <li key = {index}>
                                                        <FontAwesomeIcon icon = {faCheckSquare} className="icon"/>
                                                         {feature}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="house-description">
                                    <h1>House Description</h1>
                                    <div className="content">
                                        {
                                            house.house__description.map((des, index) => {
                                                return (
                                                    <p key = {index}>{des}</p>
                                                )
                                            })
                                        }
                                        <div className="overlay"></div>
                                    </div>
                                    <p className="showBtn">
                                        Show More
                                    </p>
                                </div>
                                {/* map */}
                                <div className="location">
                                    <h1>Location</h1>
                                    <div className="iframe">
                                        <iframe 
                                            src={house.mapLocation} 
                                            height="450" 
                                            frameBorder="0" 
                                            style={{
                                                border:0
                                            }} 
                                            aria-hidden="false" 
                                            tabIndex="0"
                                            title={index}
                                        >
                                        </iframe>
                                    </div>
                                </div>
                                {/* buy button */}
                                <div className="buy-button">
                                    <div className="contact-container">
                                        <h1>Interested in this property?</h1>
                                        <NavLink
                                            to = {`/buy/${house.id}/${urlSlug(house.address)}`}
                                            exact = {true}
                                        >
                                            BUY THIS HOUSE
                                        </NavLink>
                                        <h3>or call +321 123 4567</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    return "";
                })
            }
            {/* see other house */}
            <div className="container-fluid other-house">
                <div className="row">
                    <div className="col" style = {{"padding": 0, "margin": 0}}>
                    <h1>See Other Houses</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        otherHouse.map((house, index) => {
                            return (
                                <div className="col-4" key = {index}>
                                    <NavLink
                                        to = {`/${house.id}/${urlSlug(house.address)}`}
                                        exact = {true}
                                    >
                                        <div className="detail">
                                            <img src={house.mainImage} alt =""/>
                                            <div className="info">
                                                <span className="name">{house.address}</span>
                                                <span className="price">{formatNumber(house.price)}</span>
                                                <div className="specs">
                                                    <span className="storeys">
                                                        <FontAwesomeIcon className="icon" icon = {faLayerGroup}/>
                                                        {house.storeys}
                                                    </span>
                                                    <span className="bedrooms">
                                                        <FontAwesomeIcon className="icon" icon = {faBed}/>
                                                        {house.bedrooms}
                                                    </span>
                                                    <span className="living-area">
                                                        <FontAwesomeIcon className="icon" icon = {faHouseUser}/>
                                                        {house.living__area}
                                                        m<sup>2</sup>
                                                    </span>
                                                    <span className="landing-area">
                                                        <FontAwesomeIcon className="icon" icon = {faTree}/>
                                                        {house.land__area}
                                                        m<sup>2</sup>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        houseInfo: state
    }
}
export default connect(mapStateToProps)(EachHouse)