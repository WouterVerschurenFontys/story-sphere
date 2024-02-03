import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/AddStory.css';

function AddStory() {
    const [name, setName] = useState('');
    const [information, setInformation] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Name: name,
            StoryLocation: 'test',  // You may need to provide a value for this property
            StoryName: 'test',      // You may need to provide a value for this property
            StoryText: information,
            Anonymous: isAnonymous,
        };

        console.log(data);

        axios
            .post('https://localhost:44357/StorySphere', data)
            .then((response) => {
                console.log(response.data);
                toast.success('Story added successfully!');
            })
            .catch((error) => {
                console.error(error);
                toast.error('Error adding location');
            });
    };


    return (
        <div className="vakje">
            <div class="container">
                <div class="cta-form">
                    <h2>Fill out the form!</h2>
                    <p>Check out the comments for line by line explanations. Form-related code starts on line 145.</p>
                </div>
                <form onSubmit={handleSubmit} class="form2">

                    <label for="name" class="form__label">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="form__input"
                        placeholder="name"
                    />

                    <label>
                        I want this place for information about the location
                        <span className="required">*</span>
                    </label>
                    <input
                        value={information}
                        onChange={(event) => setInformation(event.target.value)}
                        className="field-long field-textarea form__input"
                    ></input>

                    <label for="email" class="form__label">Email</label>
                    <input type="email" placeholder="Email" class="form__input" id="email" />

                    <label for="subject" class="form__label">Subject</label>
                    <input type="text" placeholder="Subject" class="form__input" id="subject" />

                    <li>
                        <input type="submit" value="Submit" className="input-submit" />
                    </li>
                </form>
            </div>

            <form onSubmit={handleSubmit} className="form-style-1">
                <ul>
                    <li>
                        <label>
                            Name <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className="field-divided"
                            placeholder="name"
                        />
                    </li>
                    <li>
                        <label>
                            Do you want to stay anonymous?
                        </label>
                        <div className="anonymous-buttons">
                            <label>
                                <input
                                    type="radio"
                                    value="yes"
                                    checked={isAnonymous === true}
                                    onChange={() => setIsAnonymous(true)}
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="no"
                                    checked={isAnonymous === false}
                                    onChange={() => setIsAnonymous(false)}
                                />
                                No
                            </label>
                        </div>
                    </li>
                    <li>
                        <label>
                            I want this place for information about the location
                            <span className="required">*</span>
                        </label>
                        <textarea
                            value={information}
                            onChange={(event) => setInformation(event.target.value)}
                            className="field-long field-textarea"
                        ></textarea>
                    </li>
                    <li>
                        <input type="submit" value="Submit" className="input-submit" />
                    </li>
                </ul>
            </form>
            <ToastContainer position="bottom-right" />
        </div>
    );
}

export default AddStory;