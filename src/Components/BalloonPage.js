// BalloonPage.js
import React, { useEffect, useRef, useState } from 'react';
import '../css/BalloonPage.css';
import Balloon from '../Scripts/Balloon.js';
import { Link } from 'react-router-dom';

const BalloonPage = () => {
    const balloonsContainerRef = useRef();
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://storyballoonapi.azurewebsites.net/api/Story')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data); // Log data to console
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='about-page'>
            <h1>Click a balloon to read a Story</h1>
            <Link to="/TestPage">
                <div className="balloons-container" ref={balloonsContainerRef}>
                    {data.map((story, index) => (
                        <Balloon key={index} containerRef={balloonsContainerRef} storyData={story} />
                    ))}
                </div>
            </Link>
        </div>
    );
};

export default BalloonPage;
