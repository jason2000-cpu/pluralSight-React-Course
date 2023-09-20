import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
}

function useRequestRest() {
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

    function updateRecord(record, doneCallback) {
        const newRecords = data.map( function(rec){
            return rec.id === record.id ? record : rec;
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


    function insertRecord(record, doneCallback) {
        const newRecords = [record, ...data]

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


    function deleteRecord(record, doneCallback) {
        const newRecords = data.filter((rec)=> rec.id != record.id )

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
        updateRecord,
        insertRecord,
        deleteRecord
    }
}

export default useRequestRest;