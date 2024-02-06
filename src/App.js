// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './css/nav.css';
import './css/site.css';
import BalloonPage from "./Components/BalloonPage";
import AboutPage from "./Components/AboutPage";
import AddStory from "./Components/AddStory";
import TestPage from "./Components/TestPage";
// import LoginPage from "./Components/LoginPage";
// import BackgroundColorCarousel from './Scripts/BackgroundColorCarousel.js';

const Navbar = () => {
    return (

        <nav>
            <ul className="NavBar">
                <li>
                    <Link to="/">
                        <div>Stories</div>
                    </Link>
                </li>
                <li>
                    <Link to="/AddStory">
                        <div>AddStory</div>
                    </Link>
                </li>
                <li>
                    <Link to="/AboutPage">
                        <div>About</div>
                    </Link>
                </li>
                <li>
                    <Link to="/TestPage">
                        <div>TestPage</div>
                    </Link>
                </li>
                {/* <li>
                    <Link to="/LoginPage">
                        <div>TestPage</div>
                    </Link>
                </li> */}
            </ul>
        </nav>
    );
};

const App = () => {


    return (
        <>
            {/* <BackgroundColorCarousel /> */}
            <Router>
                <Navbar />
                <Routes>

                    <Route exact path="/" element={<BalloonPage />} />
                    <Route path="/AboutPage" element={<AboutPage />} />
                    <Route path="/AddStory" element={<AddStory />} />
                    <Route path="/TestPage" element={<TestPage />} />
                    {/* <Route path="/LoginPage" element={<LoginPage />} /> */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
