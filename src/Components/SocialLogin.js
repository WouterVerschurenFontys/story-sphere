import React from 'react';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const SocialLogin = () => {
    const handleGoogleLogin = (response) => {
        console.log('Logged in with Google:', response);
        // Handle the login logic
    };

    const handleFacebookLogin = (response) => {
        console.log('Logged in with Facebook:', response);
        // Handle the login logic
    };

    return (
        <div>
            <GoogleLogin
                clientId="your-google-client-id"
                onSuccess={handleGoogleLogin}
                onFailure={(err) => console.error('Google login failed:', err)}
            />
            <FacebookLogin
                appId="your-facebook-app-id"
                autoLoad={false}
                fields="name,email,picture"
                callback={handleFacebookLogin}
            />
            {/* Add more social logins as needed */}
        </div>
    );
};

export default SocialLogin;
