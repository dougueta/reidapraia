import React from 'react'
import { FooterWrapper, Menu, Item, Indicator } from './Footer.styles'
import HomeIcon from '@mui/icons-material/Home'
import StarIcon from '@mui/icons-material/Star'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import AssignmentIcon from '@mui/icons-material/Assignment'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'
import routes from 'routes'

const menuItens = [
  { title: 'Inicio', icon: <HomeIcon />, route: routes.home },
  { title: 'O Rei', icon: <StarIcon />, route: routes.ranking },
  { title: 'Sorteio', icon: <AssignmentIcon />, route: routes.sortition },
  { title: 'Partidas', icon: <FormatListBulletedIcon />, route: routes.matches }
]

const Footer = () => {
  return (
    <FooterWrapper>
      <Menu>
        {menuItens.map((item, i) => (
          <NavLink exact activeClassName="selected" key={i} to={item.route}>
            <Item>
              <span>{item.icon}</span>
              <Typography variant="caption">{item.title}</Typography>
            </Item>
          </NavLink>
        ))}
      </Menu>
    </FooterWrapper>
  )
}

export default Footer
