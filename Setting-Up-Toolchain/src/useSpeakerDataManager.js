import { useEffect, useReducer } from "react";
import SpeakerReducer from "./speakerReducer";
import speakerData from "./SpeakerData";



const useSpeakerDataManager = () => {
    let [{ isLoading, speakerList }, dispatch] = useReducer(SpeakerReducer, {
        isLoading: true,
        speakerList: []
    })
    const toggleSpeakerFavorite = (speakerRec) => {
        // dispatch({
        //     type: speakerRec.favorite === true ? "unfavorite" : "favorite",
        //     id: speakerRec.id
        // })
        async function updateData() {
            fetch(`/api/speakers/${speakerRec.id}`,{
                body: {...speakerRec, favorite: !speakerRec.favorite}
            })
            dispatch({
                type: speakerRec.favorite === true ? "unfavorite" : "favorite"
            })
        }

        updateData();
    }
    
    useEffect(() => {
        new Promise(function(resolve) {
            setTimeout(function() {
                resolve();
            }, 1000);
        }).then(() => {
            // dispatch({
            //     type: "setSpeakerList",
            //     data: speakerData,
            // })
             async function fetchData () {
                const result = await fetch('/api/speakers')
                dispatch({ type: "setSpeakerList", data: result.data })
                console.log(result)
            }
            fetchData();
        });
        return () => {
            console.log("cleanup");
        }
    }, []);

    return { isLoading, speakerList, toggleSpeakerFavorite}
}

export default useSpeakerDataManager;