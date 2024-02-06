import '../css/AboutPage.css';
import React, { useEffect, useState } from 'react';

function AboutPage() {
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
    <div>
      <h1>About Page</h1>
      <p>Story Sphere is a platform for writers to share their stories with the world.</p>
      <div className='StoryItems'>
        <ul>
          {data.map(story => (
            <li className={`anim${story.id}`} key={story.id}>
              <div className="Writer">Story Writer: {story.name}</div>
              <div className="Story">{story.storyText}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;


