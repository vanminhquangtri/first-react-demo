import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="footer-home-icon">
                            <NavLink
                                to = "/"
                                exact = {true}
                                >
                                <FontAwesomeIcon icon = {faHome} className="home-icon"/>
                            </NavLink>
                        </div>
                        <ul>
                            <li>
                                <NavLink
                                    to = "/"
                                    exact = {true}
                                >
                                    Advantages
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to = "/house-catalog"
                                    exact = {true}
                                >
                                    Houses Catalog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to = "/"
                                    exact = {true}
                                >
                                    Promotions
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to = "/"
                                    exact = {true}
                                >
                                    Guides
                                </NavLink>
                            </li>
                        </ul>
                        <span className="copy-right">© 2020 Impreza Theme by UpSolution</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;