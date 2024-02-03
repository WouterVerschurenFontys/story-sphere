import React, { useEffect } from 'react';

const BackgroundColorCarousel = () => {
    const colors = ['#E57373', '#64B5F6', '#81C784', '#FFD54F', '#BA68C8'];

    useEffect(() => {
        const intervalId = setInterval(changeBackgroundColor, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    let colorIndex = 0;

    const changeBackgroundColor = () => {
        const body = document.body;
        const currentColor = colors[colorIndex];
        body.style.backgroundColor = currentColor;

        // Increment colorIndex or reset to 0 when it reaches the end
        colorIndex = (colorIndex + 1) % colors.length;
    };

    return (
        <div>
            {/* Your React component content goes here */}
        </div>
    );
};

export default BackgroundColorCarousel;
