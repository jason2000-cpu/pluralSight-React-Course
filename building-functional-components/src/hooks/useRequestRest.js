import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";

import axios from 'axios';

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
}

function useRequestRest() {
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");
    const [data, setData] = useState([]);
    const originalRecord = [...data];

    // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const baseUrl = 'api/speakers'

    useEffect(()=>{
        async function delayFunc() {
            try {
                const result = await axios.get(baseUrl)
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(result.data);
                
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

        async function delayFunction() {
            try {
                setData(newRecords);
                await axios.put(`${baseUrl}/${record.id}`, record);
                console.log("The Record:", record)
                if (doneCallback ) {
                    doneCallback();
                }

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

        async function delayFunction() {
            try {
                setData(newRecords);
                await axios.post(`${baseUrl}/99999`, record);
                    if (doneCallback) {
                        doneCallback();
                    }

                

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
                axios.delete(`${baseUrl}/${record.id}`, record);
                if (doneCallback) {
                    doneCallback();
                }

                

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