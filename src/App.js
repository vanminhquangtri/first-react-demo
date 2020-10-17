import React from 'react';
import './index.scss';
import {connect} from "react-redux"
import Topslide from './Components/Top-slide/Topslide';
import Footer from './Components/Footer/Footer';
import Topnav from './Components/Top-nav/Topnav';
import Backtop from './Components/Back-top/Backtop';
import {BrowserRouter as Router} from "react-router-dom";
import RouterURL from './Components/RouterURL/RouterURL';
function App(props) {
  return (
    <Router>
      <div className = "App">
        <Topslide></Topslide>
        <Topnav></Topnav>
        <RouterURL></RouterURL>
        <Footer></Footer>
        <Backtop></Backtop>
      </div>
      </Router>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    houseInfo: state
  }
}
export default connect(mapStateToProps)(App)