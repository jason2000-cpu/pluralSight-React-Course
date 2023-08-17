import React, { useReducer, useState } from 'react'

import useEmailValidating from './useEmailValid'


function EmailValidatingForm() {
  const {count, emailValid, setCount, setEmail, email} = useEmailValidating(30)
  return (
    <div className='container'>
        <br />
        <div className='content'>
            <input 
                onChange={(e)=>{setEmail(e.target.value)}}
                disabled={count <= 0}
                value={email}
                placeholder='Enter email'
                type='email'
                name='email'
                required
            />
            &nbsp;&nbsp;&nbsp;
            <button 
                disabled={!emailValid || count <= 0}
                onClick={()=>{
                    setCount(0);
                    alert(`Button clicked with email ${email}`)
                }}
                className='btn-lg'
                type='submit'
            >
                Press Me!
            </button>
            <div>
                {count > 0 ? `You Have ${count} Seconds To Enter Your Email` : "Email Entered or Time Expired"}
            </div>
        </div>
    </div>
  )
}


export default EmailValidatingForm;