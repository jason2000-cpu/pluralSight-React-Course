import { useEffect, useReducer } from "react";
import SpeakerReducer from "./speakerReducer";
import speakerData from "./SpeakerData";



const useSpeakerDataManager = () => {
    let [{ isLoading, speakerList }, dispatch] = useReducer(SpeakerReducer, {
        isLoading: true,
        speakerList: []
    })
    const toggleSpeakerFavorite = (speakerRec) => {
        // speakerRec.favorite === true ? 
        //     dispatch({
        //             type: "unfavorite",
        //             id: speakerRec.id
        //     }) :
        //     dispatch({
        //         type: "favorite",
        //         id: speakerRec.id
        //     })
        dispatch({
            type: speakerRec.favorite === true ? "unfavorite" : "favorite",
            id: speakerRec.id
        })
    }
    
    useEffect(() => {
        new Promise(function(resolve) {
            setTimeout(function() {
                resolve();
            }, 1000);
        }).then(() => {
            dispatch({
                type: "setSpeakerList",
                data: speakerData,
            })
        });
        return () => {
            console.log("cleanup");
        }
    }, []);

    return { isLoading, speakerList, toggleSpeakerFavorite}
}

export default useSpeakerDataManager;