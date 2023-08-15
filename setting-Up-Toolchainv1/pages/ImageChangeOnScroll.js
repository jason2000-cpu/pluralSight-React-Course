import React, { useEffect, useState } from "react";

import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
    const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
    const [mouseCount, setMouseCount] = useState(0);

    useEffect( () => {
        window.document.title= `Speaker ID : ${currentSpeakerId}`;
        console.log("useEffect: Setting title to :", currentSpeakerId)
    }, [currentSpeakerId])

    return (
     <div>
        <h1>Mouse Count: {mouseCount}</h1>
        {[1124, 187, 823, 1269, 1530].map((speakerId) =>{
            return (
                <div key={speakerId}
                    onMouseOver = {()=>{
                        setCurrentSpeakerId(speakerId); 
                        console.log( `spearker Id on MouseOver ${currentSpeakerId}`)
                        setMouseCount(mouseCount + 1)
                    }}
                >
                    <ImageToggleOnScroll
                        primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
                        secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
                    />
                </div>
            );
        })}
       </div>
    )
}

export default ImageChangeOnScroll;