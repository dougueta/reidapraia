import React from 'react'
import Button from '@mui/material/Button'

export const CustomButtom = ({ children, disabled, ...props }) => {
  return (
    <Button disabled={disabled} {...props}>
      {children}
    </Button>
  )
}
