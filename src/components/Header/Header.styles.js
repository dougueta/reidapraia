import styled from 'styled-components'
import { AppBar, Toolbar } from '@mui/material'

export const Wrapper = styled.div`
  border: 1px solid;
`

export const MenuOptions = styled.div`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4rem;
  width: 100%;
  a {
    color: #e5e5e5;
  }
`

export const HeaderWrapper = styled(Toolbar)`
  font-size: 1rem;
  background-color: #ff9437;
`

// cores
// #1A081F,#4D1D4D,#05676E,#489C79,#EBC288,#1A081F,#4D1D4D,#05676E
