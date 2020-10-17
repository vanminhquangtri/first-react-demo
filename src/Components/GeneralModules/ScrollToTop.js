import $ from "jquery";
const ScrollToTop = function (position, speed){
    return $('html, body').animate ({
        scrollTop: position
    }, speed)
}
export default ScrollToTop;