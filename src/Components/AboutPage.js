import '../css/AboutPage.css';
import React, { useEffect, useState } from 'react';

function AboutPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://localhost:44357/StorySphere')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Log data to console
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>

      <h1>Pure CSS Text Carousel</h1>

      <div className="content-slider">
        <div className="slider">
          <div className="mask">
            <ul>
              {data.map(story => (
                <li className={`anim${story.id}`} key={story.id}>
                  <div className="quote">Name of writer:{story.name}</div>
                  <div className="source">Story: {story.storyText}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutPage;


