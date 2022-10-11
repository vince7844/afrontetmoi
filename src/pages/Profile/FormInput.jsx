import React from 'react'
import { useRef } from 'react';

const FormInput = ({ profileKey, profileValue, register, required }) => {
  const inputRef = useRef(null)

  const renderLabel = (key) => {
    switch(key) {
      case "userFirstname": 
        return "Prénom";
      case "userLastname": 
        return "Nom"
      case "userEmail": 
        return "Email"
      default: return "";
    }
  }

  return (
    <div ref={inputRef} className='flex flex-col w-200'>
      <label>{ renderLabel(profileKey) }</label>
      <input 
        { ...register(profileKey, { required }) }
        type="text" 
        className='border border-slate-600 w-96 p-2 rounded' 
        defaultValue={profileValue} 
      />
    </div>  
  )
}

export default FormInput;