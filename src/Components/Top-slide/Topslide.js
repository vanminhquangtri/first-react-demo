/**@jsx jsx */
import {connect} from "react-redux";
import {jsx, css} from "@emotion/core";
import TinySlider from "tiny-slider-react";
import {useEffect} from "react";
import {NavLink} from 'react-router-dom';
import urlSlug from "url-slug";

// format price
function formatNumber(num) {
    return "$" + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
// properties of slideshow
const settings = {
    nav: false,
    items: 1,
    controls: true,
    autoplay: true,
    speed: 500,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
};
const Topslide = (props) => {
    const {houseInfo} = props;
    useEffect(() => {
        // hide default dots of tiny-slider on load
        const autoBtn = document.querySelector(".tns-visually-hidden");
        autoBtn.parentElement.style.display = "none";
    },[])
    return (
        <section className="top-slide" id="top-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <TinySlider settings = {settings}>
                            {
                                houseInfo.map((house, index) => {
                                    if (house.top__slide){
                                    // only show house that has property top__slide is true
                                    return (
                                            <div 
                                                className="slide-item" 
                                                key = {index} 
                                            >   
                                                <div 
                                                    className="background-image"
                                                    css = {css`
                                                        background-image: url('${house.mainImage}');
                                                    `}
                                                />
                                                <div className="info">
                                                    <span className="address ">{house.address}</span>
                                                    <div className="price-area">
                                                        <span className="price">{formatNumber(house.price)}</span>
                                                        <span className="area">
                                                            Living area: 
                                                            <span className="figure">{house.living__area} m<sup>2</sup></span>
                                                        </span>
                                                    </div>
                                                    <NavLink
                                                        to = {`/${house.id}/${urlSlug(house.address)}`}
                                                        exact = {true}
                                                        className="linkBtn"
                                                    >
                                                        View This House
                                                    </NavLink>
                                                </div>
                                            </div>
                                        )
                                    }
                                    return "";
                                })  
                            }
                        </TinySlider>
                    </div>
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
export default connect(mapStateToProps)(Topslide)