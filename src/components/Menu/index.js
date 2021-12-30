/* eslint-disable react/jsx-key */
import { Typography } from '@mui/material'
import React from 'react'
import { MenuContainer, MenuItem } from './Menu.style'

const Menu = ({ itens }) => {
  if (!itens) return <div>oi</div>
  return (
    <MenuContainer>
      <ul>
        {itens.map((item, i) => (
          <MenuItem key={i}>{item}</MenuItem>
        ))}
      </ul>
    </MenuContainer>
  )
}

export default Menu
