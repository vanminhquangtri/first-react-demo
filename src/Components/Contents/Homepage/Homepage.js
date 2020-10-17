import React from 'react';
import {NavLink} from "react-router-dom";
import ScrollToTop from "../../GeneralModules/ScrollToTop";

const Homepage = () => {
    ScrollToTop(0, 500);
    return (
        <div className = "Homepage">
            <section className="strength">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <div className="ad-container">
                                <img src = {require("../../../image/section-strength/team.svg")}  alt="" />
                                <NavLink
                                    to = "/"
                                    exact = {true}
                                >
                                    Flexible Terms of Payments
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ad-container">
                                <img src = {require("../../../image/section-strength/family.svg")}  alt="" />
                                <NavLink
                                    to = "/"
                                    exact = {true}
                                >
                                    Unique Social Programs
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ad-container">
                                <img src = {require("../../../image/section-strength/insurance.svg")}  alt="" />
                                <NavLink
                                    to = "/"
                                    exact = {true}
                                >
                                    Risk Insurance Program
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="advantage">
                <div className="container-fluid">
                    <div className="row infras">
                        <div className="col-5">
                            <div className="content">
                                <span className="title">Developed Infrastructure</span> <br />
                                <span className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis auctor leo pretium vestibulum.</span><br />
                                <ul className="list">
                                <li>Nunc lacus libero, faucibus sed iaculis at, sollicitudin sed leo.</li>
                                <li>Proin ullamcorper metus sit amet consectetur interdum.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-7" />
                    </div>
                    <div className="row public">
                        <div className="col-5">
                            <div className="content">
                                <span className="title">Public Areas</span> <br />
                                <span className="des">Mauris dapibus volutpat lectus, porta condimentum quam maximus vitae. Donec quis tortor fringilla, condimentum erat in, viverra massa.</span><br />
                                <span className="des">Nam commodo dolor eget commodo ullamcorper. Nam commodo, dui nec facilisis maximus, odio risus posuere enim, et hendrerit eros erat at tortor.</span><br />
                            </div>
                        </div>
                        <div className="col-7" />
                    </div>
                    <div className="row landscape">
                        <div className="col-5">
                            <div className="content">
                                <span className="title">Landscape Design</span> <br />
                                <span className="des">Etiam ut diam lectus. Nam a sem quis felis interdum tincidunt vel id mi. Ut eu ante at ipsum efficitur facilisis.</span><br />
                                <span className="des">Integer lobortis nulla in dui scelerisque, ut ultrices quam tincidunt. In tristique risus eu magna sollicitudin, sed convallis leo imperdiet.</span><br />
                            </div>
                        </div>
                        <div className="col-7" />
                    </div>
                    <div className="row furniture">
                        <div className="col-5">
                            <div className="content">
                                <span className="title">Furniture Design</span> <br />
                                <span className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis auctor leo pretium vestibulum.</span><br />
                                <ul className="list">
                                    <li>Nunc lacus libero, faucibus sed iaculis at, sollicitudin sed leo.</li>
                                    <li>Proin ullamcorper metus sit amet consectetur interdum.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-7" />
                    </div>
                </div>
            </section>
            <section className="catalog">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="content">
                                <span>Find Your Dream House</span> 
                                <span>Using Our Interactive Catalog</span> 
                                <NavLink
                                    to = "/house-catalog"
                                    exact = {true}
                                >
                                    CHECK ALL HOUSES
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="guide">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col title">
                            <span>Guides</span>
                            <NavLink
                                to = "/"
                                exact = {true}
                            >
                                See all guides
                            </NavLink>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-article">
                            <div className="article">
                                <div className="content">
                                    <div>
                                        <NavLink
                                            to = "/"
                                            exact = {true}
                                        >
                                            Growing Sales of High-Priced Country Houses
                                        </NavLink> 
                                        <span>19 Jul at 10:51 am</span>
                                    </div>
                                </div>
                                <img src={require("../../../image/section-guide/morning-brew-SQ5Lx-pCvDI-unsplash-1024x683.jpg")} alt="high price" />
                            </div>
                            <div className="article">
                                <div className="content">
                                    <div>
                                        <NavLink
                                            to = "/"
                                            exact = {true}
                                        >
                                            How to Lower Mortgage Rates when Buying a House
                                        </NavLink>
                                        <span>19 Jul at 10:47 am</span>
                                    </div>
                                </div>
                                <img src={require("../../../image/section-guide/joss-woodhead-3wFRlwS91yk-unsplash-1024x683.jpg")} alt="lower mortage" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;