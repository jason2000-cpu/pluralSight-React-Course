import React, { useEffect, useRef, useState } from "react";

import loadingGif from "../public/static/loadingGIF.gif";


const ImageToggleOnScroll = ({secondaryImg, primaryImg}) => {
    const imgRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);

    const isInView = () => {
        const rect = imgRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    const [inView, setInView] = useState(false);

    useEffect(() => {
        setIsLoading(false);
        setInView(isInView());
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, []);


    const scrollHandler = () => {
        setInView(isInView());
    };

    return (
        <img
            src={isLoading ? loadingGif : inView ? secondaryImg : primaryImg}
            alt=""
            ref={imgRef}
            />
    )
}


export default ImageToggleOnScroll;