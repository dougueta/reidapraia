import React from 'react'
import TextField from '@mui/material/TextField'

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <>
      <label htmlFor={name}> {label}</label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </>
  )
}

export default Input
