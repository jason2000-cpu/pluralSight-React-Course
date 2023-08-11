import React, {useState} from "react";

const InputElement = () =>{
    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] = useState([]);
   const onChangeHandler = (e) =>{
       setInputText(e.target.value);
       if(e.target.value == ""){
        setHistoryList([]);
       }
       setHistoryList([...historyList, e.target.value]);
    }
    return (
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


