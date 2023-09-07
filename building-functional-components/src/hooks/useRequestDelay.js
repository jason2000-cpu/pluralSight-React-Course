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
    const originalRecord = [...data];

    // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(()=>{
        function delayFunc() {
            try {
                delay(delayTime).then(()=> {
                    // throw new Error("fake error");
                    setRequestStatus(REQUEST_STATUS.SUCCESS);
                })

                
            } catch(err) {
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(err)
            }
        }
        delayFunc();
    }, []);

    function updateRecord(recordUpdated, doneCallback) {
        const newRecords = data.map( function(rec){
            return rec.id === recordUpdated.id ? recordUpdated : rec;
        })

        function delayFunction() {
            try {
                setData(newRecords);
                delay(delayTime).then(()=> {
                    if (doneCallback) {
                        doneCallback();
                    }

                })

            } catch(err) {
                console.log("Error thrown inside delayFunction", err);
                if (doneCallback) {
                    doneCallback();
                }
                setData(originalRecord);
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