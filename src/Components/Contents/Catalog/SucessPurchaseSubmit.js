import React, { useEffect } from 'react';
import {useHistory} from "react-router-dom";
import ScrollToTop from "../../GeneralModules/ScrollToTop";

const SucessPurchaseSubmit = (props) => {
    const history = useHistory();
    const navigateTo = () => history.push("/house-catalog");
    ScrollToTop(0, 500);
    useEffect(() => {
        const time = document.querySelector(".time");
        let count = 10;
        var timeID;
        // automatic navigate to full catalog after 10 seconds
        function countToNavigate(){
            time.innerHTML = count;
            if (count === 0) {
                navigateTo();
            }
            count -= 1;
            timeID = setTimeout(countToNavigate, 1000)
        }
        countToNavigate();
        // $("a").on("click", () => {
        //     clearTimeout(timeID)
        // })
        return () => {
            clearTimeout(timeID)
        }
    })
    return (
        <section className="success-purchase-submit">
            <h1>Thank you so much for your information</h1>
            <h3>One of our consultants will contact you very shortly</h3>
            <h5>In the mean time, we will back to Full Catalog automatically after:</h5>
            <h5 className="time">10</h5>
        </section>
    );
};

export default SucessPurchaseSubmit;