import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
}

function useRequestDelay(delayTime = 1000, initialData = []) {
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");
    const [data, setData] = useState(initialData);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(()=>{
        function delayFunc() {
            try {
                delay(delayTime);
                // throw new Error("fake error");
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(data);
            } catch(err) {
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(err)
            }
        }
        delayFunc();
    }, []);

    function updateRecord(recordUpdated) {
        const newRecords = data.map( function(rec){
            return rec.id === recordUpdated.id ? recordUpdated : rec;
        })

        function delayFunction() {
            try {
                delay(delayTime);
                setData(newRecords);
            } catch(err) {
                console.log("Error thrown inside delayFunction", err);
            }

        }
        delayFunction();
    }

    return {
        requestStatus,
        error,
        data,
        updateRecord
    }
}

export default useRequestDelay;