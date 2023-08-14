import React, {useEffect, useState} from "react";

const InputElement = () =>{
    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

   const onChangeHandler = (e) =>{
       setInputText(e.target.value);
       if(e.target.value == ""){
        setHistoryList([]);
       }
       setHistoryList([...historyList, e.target.value]);
    }

    useEffect( () => {
        setTimeout(()=> {setIsLoading(false)}, 5000)
    })
    return (
        isLoading ? <img src="/static/loadingGIF.gif" alt="loading GIF" /> : 
        <>
        <input onChange={onChangeHandler} placeholder="Enter some text please" />
        <h1>{inputText}</h1>
        <hr />
        <br />
        <ul>
            {historyList.map((item)=>{
                return <li>{item}</li>
            })}
        </ul>
    </>
    );
};

export default InputElement;


