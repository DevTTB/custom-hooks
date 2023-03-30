import { useLayoutEffect, useState } from 'react'

export const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);

    const updateSize = () => {
        setSize([window.innerWidth, window.innerHeight]);
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
}