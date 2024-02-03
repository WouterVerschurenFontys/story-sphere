import React, { useEffect, useRef } from 'react';
import '../css/About.css';
import Balloon from '../Scripts/Balloon.js';




const BalloonPage = () => {
    const balloonsContainerRef = useRef();

    useEffect(() => {
        // Additional logic if needed
    }, []); // Empty dependency array ensures this effect runs once on component mount

    return (
        <div className='about-page'>
            <h1>Click a balloon to read a Story</h1>
            {/* <a href="https://i.pinimg.com/originals/f7/87/fc/f787fc217b80611353f95debd090d993.gif"> */}
            <div className="balloons-container" ref={balloonsContainerRef}>
                <Balloon containerRef={balloonsContainerRef} />
            </div>
            {/* </a> */}
        </div >
    );
};

export default BalloonPage;