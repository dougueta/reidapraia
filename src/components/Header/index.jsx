import { AppBar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import { MenuOptions, HeaderWrapper } from './Header.styles'

export default function Header() {
  // trocar a cor do header pela a do footer
  const displayDesktop = () => (
    <HeaderWrapper>
      <MenuOptions>
        <Link to="/" aria-label="Sorteio de duplas">
          home
        </Link>
        <Link to="/ranking" aria-label="Ranking">
          Ranking
        </Link>
        <Link to="/jogador" aria-label="Perfil Jogador">
          Jogador
        </Link>
        <Link to="/partida" aria-label="Criar Jogador">
          Partida
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
