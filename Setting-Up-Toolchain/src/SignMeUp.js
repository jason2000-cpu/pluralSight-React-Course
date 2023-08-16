import React, { useState, useContext } from "react";
import { ConfigContext } from "./App";


export default function SignMeUp({  signUpCallback }) {
    const [email, setEmail] = useState();
    const context = useContext(ConfigContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        signUpCallback(email);
        setEmail("");
        alert("Signed up successfully");
    }
    
    return context.showSignMeUp  === false ? null :  (
        <div className="container">
            <div>
                <input 
                    placeholder="Enter Email" 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                &nbsp;
                <button 
                    disabled= {true}
                    className="btn" 
                    type="submit" 
                    onClick={handleSubmit}
                     >Get Updates</button>
            </div>
        </div>
    )
}