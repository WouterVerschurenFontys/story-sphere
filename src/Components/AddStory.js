import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/AddStory.css';

function AddStory() {
    const [name, setName] = useState('');
    const [story, setStory] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Name: name,
            StoryText: story,
            Anonymous: isAnonymous,
        };

        console.log(data);

        axios
            .post('https://storyballoonapi.azurewebsites.net/api/Story', data)
            .then((response) => {
                console.log(response.data);
                toast.success('Story added successfully!');
            })
            .catch((error) => {
                console.error(error);
                toast.error('Error adding location');
            });
    };

    const handleAnonymousChange = (event) => {
        const value = event.target.value === 'true';
        setIsAnonymous(value);
        if (value) {
            setName('');
        }
    };

    return (
        <div className="vakje">
            <div class="container">
                <div class="cta-form">
                    <h2>Fill out the form!</h2>
                    <p>Check out the comments for line by line explanations. Form-related code starts on line 145.</p>
                </div>
                <form onSubmit={handleSubmit} class="form">
                    <label>
                        Do you want to stay anonymous?
                    </label>
                    <div className="form__input RadioButton">
                        <label>
                            <input
                                type="radio"
                                value="true"
                                checked={isAnonymous === true}
                                onChange={handleAnonymousChange}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="false"
                                checked={isAnonymous === false}
                                onChange={handleAnonymousChange}
                            />
                            No
                        </label>
                    </div>
                    {!isAnonymous && (
                        <>
                            <label for="name" class="form__label">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                className="form__input"
                                placeholder="name"
                            />
                        </>
                    )}

                    <label>
                        Write your story here:
                        <span className="required"></span>
                    </label>
                    <input
                        type="text"
                        value={story}
                        onChange={(event) => setStory(event.target.value)}
                        className="form__input"
                        placeholder="Once upon a time..."
                    ></input>

                    <li>
                        <input type="submit" value="Submit" className="input-submit" />
                    </li>
                </form>
            </div>
            <ToastContainer position="bottom-right" />
        </div>
    );
}

export default AddStory;