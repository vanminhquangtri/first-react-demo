import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import urlSlug from 'url-slug';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faBed, faHouseUser, faTree, faChevronDown, faTimesCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ScrollToTop from "../../GeneralModules/ScrollToTop"
// format price
function formatNumber(unit, num) {
    return unit + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
// start Component
const CatalogList = (props) => {
    ScrollToTop(350, 0)
    const {houseInfo} = props;
    const [state, setState] = useState ({
        conditions: {
            storeys: null,
            bedrooms: null,
            price: {
                min: null,
                max: null
            },
            living__area: {
                min: null,
                max: null
            },
            land__area: {
                min: null,
                max: null
            }
        }
    })
    // update state of storeys and bedrooms when click any value of criteria-top-up
    const updateConditions = (condition, ev) => {
        const {conditions} = state;
        // define which category is clicked
        const target = ev.target;
        // define the clicked value
        const value = parseFloat(target.textContent);
        // display value to butoon   
        ev.target.parentNode.parentNode.querySelector(".choosen").innerHTML = `: ${value}`;
        // update the choosen condition (name and value) to original condition array
        var newConditions = {...conditions};
        newConditions[condition] = value;
        // set state of conditions for re-render
        setState((prevState) => {
            return {
                ...prevState,
                conditions: newConditions
            }
        })
    }
    // update state of conditions when choose any value of criteria-top-up (except storeys and bedrooms) 
    const updatRangeConditions = (ev, minDefault, maxDefault, condition, unit) => {
        // defind changed input and its value when press enter input
        const target = ev.target;        
        if (ev.key === "Enter"){
            // defind parentNode ===> choose all input tags class = min, max ===> choose value
            let minValue = target.parentNode.querySelector("input.min").value;
            let maxValue = target.parentNode.querySelector("input.max").value;
            // if min value === empty ===> min value === minDefault
            // if max value === empty ===> max value === maxDefault
            if (minValue === "") {minValue = minDefault};
            if (maxValue === "") {maxValue = maxDefault};
            // set state of conditions
            const currentConditions = {...state.conditions};
            currentConditions[condition].min = parseFloat(minValue);
            currentConditions[condition].max = parseFloat(maxValue);
            setState((prevState) => {
                return {
                    ...prevState,
                    conditions: currentConditions
                }
            })
            // append the value to the choosen box
            target.parentNode.parentNode.parentNode.querySelector(".choosen").textContent = ": " + formatNumber(unit, minValue) + " - " + formatNumber(unit, maxValue);
        }
    }
    // get the highest / lowest value of house (highest price, lowest land__area, etc)
    const getMinMax = (propertyName, limit) => {
        const valueList = [];
        houseInfo.forEach((house) => {
            valueList.push(house[propertyName])
        })
        valueList.sort((a, b) => {
            return a - b
        })
        if (limit === "min") {
            return valueList[0];
        }
        if (limit === "max") {
            return valueList[valueList.length - 1]
        }
    }
    // set state of storeys and bedrooms to null if click close button
    const removeCondition = (condition) => {
        let currentConditions = {...state.conditions}
        currentConditions[condition] = null;
        setState((prevState) => {
            return {
                ...prevState,
                conditions: currentConditions
            }
        })
    }
    // set state of conditions (except storeys and bedrooms) to null if click close button
    const removeRangeCondition = (condition) => {
        let currentRangeConditions = {...state.conditions}
        currentRangeConditions[condition].min = null;
        currentRangeConditions[condition].max = null;
        setState((prevState) => {
            return {
                ...prevState,
                conditions: currentRangeConditions
            }
        }) 
    }
    // set state of conditions to original (all are null) when click button "View Full Catalog" and redirect page (from cataloglist to each house)
    const resetConditions = () => {
        setState((prevState) => {
            return {
                ...prevState,
                conditions: {
                    storeys: null,
                    bedrooms: null,
                    price: {
                        min: null,
                        max: null
                    },
                    living__area: {
                        min: null,
                        max: null
                    },
                    land__area: {
                        min: null,
                        max: null
                    }
                }
            }
        })
    }
    useEffect(() => {
        // show / hide top-up box when click on criteria name
        const criteriaBtn = document.querySelectorAll(".criteria");
        const boxList = document.querySelectorAll(".criteria__top-up");
        for (let i = 0; i < criteriaBtn.length; i++){
            criteriaBtn[i].addEventListener("click", (ev) => {
                // hide top-up of OTHER criteria those are not clicked
                for (let k = 0; k < boxList.length; k++){
                    boxList[k].style.display = "none";
                }
                // show top-up of the click criteria
                const box = criteriaBtn[i].querySelector(".criteria__top-up");
                if (ev.target.getAttribute("class")){
                    // avoid duplicate with close button
                    if (ev.target.getAttribute("class").includes("closed") === false){
                        if (window.innerWidth <= 660) {
                            box.style.display = "inline-flex";
                        } else {
                            box.style.display = "block";
                        }
                    }
                }
            })
        }
        // hide all top-up if not click in criteria bar
        window.addEventListener("click", (ev) => {
            if (window.location.pathname === "/house-catalog"){
                const target = ev.target.getAttribute("class");
                if (target !== "criteria" && target !== "min" && target !== "max" && target !== "top-up-form"){
                    for (let k = 0; k < boxList.length; k++){
                        boxList[k].style.display = "none";
                    }
                }
            }
        })
        // hide all top-up boxes if scroll mouse
        window.addEventListener("scroll", (ev) => {
            for (let k = 0; k < boxList.length; k++){
                boxList[k].style.display = "none";
            }
        })
        // show closed button, choosen value when click on criteria 
        const boxListSpan = document.querySelectorAll(".criteria__top-up span");
        for (let i = 0; i < boxListSpan.length; i ++) {
            boxListSpan[i].addEventListener("click", () => {
                boxListSpan[i].parentNode.parentNode.querySelector(".close-icon").style.display = "inline-block";
                boxListSpan[i].parentNode.parentNode.querySelector(".choosen").style.display = "inline-block";
            })
        }
        // hide closed button, criteria box, choosen value if click on "View Full Catalog"
        const viewFullBtn = document.querySelector(".view-full-catalog");
        const closeBtns = document.querySelectorAll(".criteria .close-icon");
        const choosenBox = document.querySelectorAll(".criteria .choosen");
        viewFullBtn.addEventListener("click", (ev) => {
            for (let i = 0; i < closeBtns.length; i++){
                closeBtns[i].style.display = "none";
            }
            for (let i = 0; i < boxList.length; i++){
                boxList[i].style.display = "none";
            }
            for (let i = 0; i < choosenBox.length; i++){
                choosenBox[i].textContent = "";
            }
        })
        // hide closed button, choosen value if click close button
        for (let j = 0; j < closeBtns.length; j++){
            closeBtns[j].addEventListener("click", () => {
                // defind choosen value box
                const choosenBox = closeBtns[j].parentNode.querySelector(".choosen");
                choosenBox.style.display = "none";
                closeBtns[j].style.display = "none"
            })
        }
        // show closed button, choosen value when enter criterias (except bedrooms and storeys)
        const topUpFormInputs = document.querySelectorAll(".top-up-form input");
        for (let i = 0; i < topUpFormInputs.length; i++){
            topUpFormInputs[i].addEventListener("keyup", (ev) => {
                const target = ev.target;
                const closeBtn = target.parentNode.parentNode.parentNode.querySelector(".close-icon");
                const choosenBox = target.parentNode.parentNode.parentNode.querySelector(".choosen");
                if (ev.key === "Enter"){
                    closeBtn.style.display = "inline-block";
                    choosenBox.style.display = "inline-block";
                }
            })
        }
    },[])
    return (
        <section className="catalog-list">
            <div className="container-fluid">
                <div className="row title">
                    <div className="col">
                        <h1>Houses Catalog</h1>
                        <span
                            className="view-full-catalog"
                            onClick = {()=>resetConditions()}
                        >View Full Catalog</span>
                    </div>
                </div>
                {/* filter bar */}
                <div className="row filter">
                    <div className="col">
                        <span className="criteria">
                            Price
                            <span className="choosen" style = {{"fontSize": "17px"}}></span>
                            <FontAwesomeIcon 
                                icon = {faTimesCircle} 
                                className="close-icon closed"
                                onClick = {()=>{removeRangeCondition("price")}}
                            />
                            <FontAwesomeIcon icon = {faChevronDown} className="icon"/>
                            <FontAwesomeIcon icon = {faChevronRight} className="right-icon"/>
                            <div className="criteria__top-up price">
                                <form className="top-up-form">
                                    <input 
                                        type="text" 
                                        placeholder = {getMinMax("price", "min")}
                                        className="min"
                                        onKeyUp = {(ev)=>{updatRangeConditions(ev, getMinMax("price", "min"), getMinMax("price", "max"), "price", "$")}}
                                    ></input>
                                    <label>to</label>
                                    <input 
                                        type="text" 
                                        placeholder = {getMinMax("price", "max")}
                                        className="max"
                                        onKeyUp = {(ev)=>{updatRangeConditions(ev, getMinMax("price", "min"), getMinMax("price", "max"), "price", "$")}}
                                    ></input>
                                </form>
                            </div>
                        </span>   
                        <span className="criteria">
                            Storeys
                            <span className="choosen"></span>
                            <FontAwesomeIcon 
                                icon = {faTimesCircle} 
                                className="close-icon closed"
                                onClick = {()=>removeCondition("storeys")}
                            />
                            <FontAwesomeIcon icon = {faChevronDown} className="icon"/>
                            <FontAwesomeIcon icon = {faChevronRight} className="right-icon"/>
                            <span className="criteria__top-up">
                                <span onClick = {(ev)=>{updateConditions("storeys", ev)}}>1</span>
                                <span onClick = {(ev)=>{updateConditions("storeys", ev)}}>2</span>
                                <span onClick = {(ev)=>{updateConditions("storeys", ev)}}>3</span>
                                <span onClick = {(ev)=>{updateConditions("storeys", ev)}}>4</span>
                            </span>
                        </span>   
                        <span className="criteria">
                            Bedrooms
                            <span className="choosen"></span>
                            <FontAwesomeIcon 
                                icon = {faTimesCircle} 
                                className="close-icon closed"
                                onClick = {()=>removeCondition("bedrooms")}
                            />
                            <FontAwesomeIcon icon = {faChevronDown} className="icon"/>
                            <FontAwesomeIcon icon = {faChevronRight} className="right-icon"/>
                            <div className="criteria__top-up">
                                <span onClick = {(ev)=>{updateConditions("bedrooms", ev)}}>1</span>
                                <span onClick = {(ev)=>{updateConditions("bedrooms", ev)}}>2</span>
                                <span onClick = {(ev)=>{updateConditions("bedrooms", ev)}}>3</span>
                                <span onClick = {(ev)=>{updateConditions("bedrooms", ev)}}>4</span>
                            </div>
                        </span>   
                        <span className="criteria">
                            Living Area
                            <span className="choosen" style = {{"fontSize": "17px"}}></span>
                            <FontAwesomeIcon 
                                icon = {faTimesCircle} 
                                className="close-icon closed"
                                onClick = {()=>{removeRangeCondition("living__area")}}
                            />
                            <FontAwesomeIcon icon = {faChevronDown} className="icon"/>
                            <FontAwesomeIcon icon = {faChevronRight} className="right-icon"/>
                            <div className="criteria__top-up living__area">
                                <form className="top-up-form">
                                    <input 
                                        type="text" 
                                        placeholder = {getMinMax("living__area", "min")}
                                        className="min"
                                        onKeyUp = {(ev)=>{updatRangeConditions(ev, getMinMax("living__area", "min"), getMinMax("living__area", "max"), "living__area", "")}}
                                    ></input>
                                    <label>to</label>
                                    <input 
                                        type="text" 
                                        placeholder = {getMinMax("living__area", "max")}
                                        className="max"
                                        onKeyUp = {(ev)=>{updatRangeConditions(ev, getMinMax("living__area", "min"), getMinMax("living__area", "max"), "living__area", "")}}
                                    ></input>
                                </form>
                            </div>
                        </span>   
                        <span className="criteria">
                            Land Area
                            <span className="choosen" style = {{"fontSize": "17px"}}></span>
                            <FontAwesomeIcon 
                                icon = {faTimesCircle} 
                                className="close-icon closed"
                                onClick = {()=>{removeRangeCondition("land__area")}}
                            />
                            <FontAwesomeIcon icon = {faChevronDown} className="icon"/>
                            <FontAwesomeIcon icon = {faChevronRight} className="right-icon"/>
                            <div className="criteria__top-up land__area">
                                <form className="top-up-form">
                                    <input 
                                        type="text" 
                                        placeholder = {getMinMax("land__area", "min")}
                                        className="min"
                                        onKeyUp = {(ev)=>{updatRangeConditions(ev, getMinMax("land__area", "min"), getMinMax("land__area", "max"), "land__area", "")}}
                                    ></input>
                                    <label>to</label>
                                    <input 
                                        type="text" 
                                        placeholder = {getMinMax("land__area", "max")}
                                        className="max"
                                        onKeyUp = {(ev)=>{updatRangeConditions(ev, getMinMax("land__area", "min"), getMinMax("land__area", "max"), "land__area", "")}}
                                    ></input>
                                </form>
                            </div>
                        </span>  
                    </div> 
                </div>
                {/* display houses */}
                <div className="row house-list">
                    {
                        houseInfo.map((house, index) => {
                            // defind properties of conditions state of storeys and bedrooms
                            var currentConditions = [];
                            for (let condition in state.conditions){
                                if (condition === "storeys" || condition === "bedrooms") {
                                    currentConditions.push(condition)
                                }
                            }
                            // check if storeys and bedrooms of house match state conditions, only show house if true
                            const resultStoreysBedrooms = currentConditions.every((condition) => {
                                if (state.conditions[condition] === null) {return true}
                                else if (state.conditions[condition] === house[condition]) {return true}
                                return "";
                            })
                            // defind properties of conditions state except storeys and bedrooms
                            var currentRangeConditions = [];
                            for (let condition in state.conditions){
                                if (condition !== "storeys" && condition !== "bedrooms") {
                                    currentRangeConditions.push(condition)
                                }
                            }
                            //check if properties (except storeys and bedroom) of house match properties of conditions, only show house if true
                            const resultRangeConditions = currentRangeConditions.every((condition) => {
                                const minValue = state.conditions[condition].min;
                                const maxValue = state.conditions[condition].max;
                                const housePro = house[condition];
                                if (minValue === null && maxValue === null) {return true}
                                else if (housePro >= minValue && housePro <= maxValue) {
                                    return true;
                                }
                                return "";
                            })
                            // start render
                            if (resultStoreysBedrooms && resultRangeConditions) {
                                return (
                                    <div className="col-4" key = {index}>
                                        <NavLink
                                            to = {`/${house.id}/${urlSlug(house.address)}`}
                                            exact = {true}
                                            onClick = {()=>resetConditions()}
                                        >
                                            <div className="detail">
                                                <img src={house.mainImage} alt =""/>
                                                <div className="info">
                                                    <span className="name">{house.address}</span>
                                                    <span className="price">{formatNumber("$", house.price)}</span>
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
                            }
                            return "";
                        })
                    }
                </div>
            </div>
        </section>
    );
};
const mapStateToProps = (state, ownProps) => {
    return {
        houseInfo: state
    }
}
export default connect(mapStateToProps)(CatalogList)
