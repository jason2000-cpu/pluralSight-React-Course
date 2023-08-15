import React, { useState } from "react";


export default function SignMeUp({  signUpCallback }) {
    const [email, setEmail] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        signUpCallback(email);
        setEmail("");
        alert("Signed up successfully");
    }
    
    return (
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