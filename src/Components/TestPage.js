import React, { useState, useEffect } from 'react';

const StoryList = () => {
    const [stories, setStories] = useState([]);

    const fetchStories = async () => {
        // Make API request to fetch a batch of stories
        const response = await fetch('https://localhost:44357/StorySphere');
        const newStories = await response.json();

        // Append new stories to the existing list
        setStories((prevStories) => [...prevStories, ...newStories]);
    };

    useEffect(() => {
        // Fetch initial batch of stories when the component mounts
        fetchStories();

        // Set up interval for periodic updates
        const intervalId = setInterval(fetchStories, 30000); // Fetch every 30 seconds

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures useEffect runs only once on mount

    return (
        <div>
            {stories.map((story) => (
                <div key={story.Id}>
                    {/* Display story details */}
                    <h3>{story.Name}</h3>
                    <p>{story.StoryText}</p>
                    {/* Add other story details as needed */}
                </div>
            ))}
        </div>
    );
};

export default StoryList;
