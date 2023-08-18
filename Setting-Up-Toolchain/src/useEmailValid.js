import { useState,useReducer } from "react";

import useInterval from './useInterval'

function useEmailValidating(time) {
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email)
        // return email.includes('@')
    }
    const [emailValid, setEmailValid] = useState(false);
    const emailReducer = (state, action) => {
        const isValidEmail = validateEmail(action);
        setEmailValid(isValidEmail);
        return action
    }

    const [email, setEmail] = useReducer(emailReducer, "");
    // const maxSeconds = 30;
    const [count, setCount] = useState(time);
    
    useInterval(()=>{
        setCount(count - 1);
    }, 1000);

    return {count, emailValid, setCount, setEmail, email }
}


export default useEmailValidating;