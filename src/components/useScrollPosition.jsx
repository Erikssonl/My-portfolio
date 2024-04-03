import { useState, useEffect } from 'react';

const useScrollPosition = () => {
    useEffect(() => {
        const updatePosition = () => {
            document.documentElement.style.setProperty('--scrollY', `${window.scrollY}px`) 
        };

        window.addEventListener("scroll", updatePosition);
        updatePosition();

        return () => window.removeEventListener("scroll", updatePosition)

    }, []);
};

export default useScrollPosition;