import { AppBar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import { MenuOptions, HeaderWrapper } from './Header.styles'

export default function Header() {
  const displayDesktop = () => (
    <HeaderWrapper>
      <MenuOptions>
        <Link to="/sorteio" aria-label="Sorteio de duplas">
          Sorteio de duplas
        </Link>
        <Link to="/ranking" aria-label="Ranking">
          Ranking
        </Link>
        <Link to="/jogador" aria-label="Perfil Jogador">
          Jogador
        </Link>
        <Link to="/jogador/criar" aria-label="Criar Jogador">
          Criar jogador
        </Link>
      </MenuOptions>
    </HeaderWrapper>
  )

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  )
}
// to="/" aria-label="Dogs - Home"
