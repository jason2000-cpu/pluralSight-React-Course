import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";

function useRequestSpeakers(delayTime = 1000) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(false);
    const [error, setError] = useState("");
    const [speakersData, setSpeakersData] = useState([]);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(()=>{
        function delayFunc() {
            try {
                delay(delayTime);
                // throw new Error("fake error");
                setIsLoading(false);
                setSpeakersData(data);
            } catch(err) {
                setIsLoading(false);
                setHasErrored(true);
                setError(err)
            }
        }
        delayFunc();
    }, []);

    function onFavoriteToggle(id) {
        const speakerRecPrevious = speakerData.find(function (rec) {
            return rec.id === id;
        });
        const speakerRecUpdated = {
            ...speakerRecPrevious,
            favorite: !speakerRecPrevious.favorite
        }
        const SpeakersDataNew = speakerData.map(function (rec){
            return rec.id === id ? speakerRecUpdated : rec;
        });
        setSpeakerData(SpeakersDataNew);
       
    }

    return {
        isLoading,
        hasErrored,
        error,
        speakersData,
        onFavoriteToggle
    }
}

export default useRequestSpeakers;