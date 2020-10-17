import React from 'react';
import {Switch, Route} from "react-router-dom";
import BuyingProcess from '../Contents/Catalog/BuyingProcess';
import CatalogList from '../Contents/Catalog/CatalogList';
import EachHouse from '../Contents/Catalog/EachHouse';
import SucessPurchaseSubmit from '../Contents/Catalog/SucessPurchaseSubmit';
import Homepage from '../Contents/Homepage/Homepage';

const RouterURL = () => {
    return (
        <Switch>
            <Route path = "/" exact = {true} component = {Homepage}></Route>
            <Route path = "/house-catalog" exact = {true} component = {CatalogList}></Route>
            <Route path = "/:id/:slug" exact = {true} component = {EachHouse}></Route>
            <Route path = "/buy/:id/:slug" exact = {true} component = {BuyingProcess}></Route>
            <Route path = "/sucess-purchase" exact = {true} component = {SucessPurchaseSubmit}></Route>
            <Route component = {Homepage}></Route>
        </Switch>
    );
};

export default RouterURL;