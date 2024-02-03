import { useEffect, useRef } from "react";

const getRandomColor = () => {
    const colors = ['#E6D1B6', '#A37B6F', '#9EB3BA', '#2E5A61', '#763634'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

const Balloon = ({ containerRef }) => {
    const balloonsRef = useRef([]);

    useEffect(() => {
        const handleBalloonClick = (balloon, balloonColor) => {
            // Remove the balloon from the DOM
            balloon.remove();

            // Create an expanding effect
            const explosion = document.createElement('div');
            explosion.className = 'explosion';
            explosion.style.backgroundColor = balloonColor;

            document.body.appendChild(explosion);

            // Set up a transition to smoothly expand the explosion
            setTimeout(() => {
                explosion.style.transform = 'scale(100)';
                explosion.style.opacity = 0;
            }, 10);

            // Remove the explosion from the DOM after the transition
            setTimeout(() => {
                document.body.removeChild(explosion);
            }, 500);
        };

        const createBalloon = (container) => {
            let intervalId;

            if (!document.body.contains(container)) {
                return () => { };
            }

            const balloon = document.createElement('div');
            balloon.className = 'balloon';

            balloon.style.bottom = `-${Math.floor(Math.random() * 150) + 120}vh`;

            const positionX = Math.floor(Math.random() * 100);
            const initialLeft = `calc(${positionX}vw - 60px)`;
            balloon.style.left = `${initialLeft} + ${Math.floor(Math.random() * 1000) + 500}px`;

            const balloonColor = getRandomColor();
            balloon.style.backgroundColor = balloonColor;
            balloon.style.setProperty('--balloon-color', balloonColor);

            const zIndex = Math.floor(Math.random() * 15);
            balloon.style.zIndex = zIndex;
            const scale = (zIndex * 0.02) + 0.8;
            balloon.style.transform = `scale(${scale})`;
            const balloonsizehover = scale + 0.1;

            const handleBalloonHover = () => {
                balloon.style.transform = `scale(${balloonsizehover})`;
                balloon.style.transition = 'transform 0.4s';
            };

            const handleBalloonLeave = () => {
                balloon.style.transform = `scale(${scale})`;
                balloon.style.transition = 'transform 0.4s';
            };

            balloon.addEventListener('mouseenter', handleBalloonHover);
            balloon.addEventListener('mouseleave', handleBalloonLeave);
            balloon.addEventListener('click', () => handleBalloonClick(balloon, balloonColor));

            const amplitude = Math.floor(Math.random() * 15) + 3;
            const frequency = 0.03;
            const speed = Math.floor(Math.random() * 1.5) + 1;

            intervalId = requestAnimationFrame(function animate() {
                const bottomValue = (parseFloat(balloon.style.bottom) || 0) + speed;
                const oscillation = amplitude * Math.sin(frequency * bottomValue);
                balloon.style.bottom = bottomValue + 'px';
                balloon.style.left = `calc(${initialLeft} + ${oscillation}px)`;

                intervalId = requestAnimationFrame(animate);
            });

            if (document.body.contains(container)) {
                container.appendChild(balloon);
                balloonsRef.current.push(balloon);
            }

            return () => {
                cancelAnimationFrame(intervalId);

                balloon.removeEventListener('mouseenter', handleBalloonHover);
                balloon.removeEventListener('mouseleave', handleBalloonLeave);

                if (document.body.contains(container)) {
                    container.removeChild(balloon);
                    balloonsRef.current = balloonsRef.current.filter((ref) => ref !== balloon);
                }
            };
        };

        const spawnBalloonsRandomly = () => {
            createBalloon(containerRef.current);

            const timeout = Math.floor(Math.random() * 1000) + 2000;
            setTimeout(spawnBalloonsRandomly, timeout);
        };

        spawnBalloonsRandomly();
    }, [containerRef]);

    return null;
};

export default Balloon;
