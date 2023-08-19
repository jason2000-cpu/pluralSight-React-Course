import { useEffect, useReducer } from "react";
import SpeakerReducer from "./speakerReducer";
import speakerData from "./SpeakerData";



const useSpeakerDataManager = () => {
    let [{ isLoading, speakerList }, dispatch] = useReducer(SpeakerReducer, {
        isLoading: true,
        speakerList: []
    })
    
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

    return { isLoading, speakerList, dispatch}
}

export default useSpeakerDataManager;