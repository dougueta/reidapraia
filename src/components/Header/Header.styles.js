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
`

export const HeaderWrapper = styled(Toolbar)`
  font-family: 'lato';
  font-size: 1rem;
  background-color: #003b46;
  /* color: #05676e; */
`

// cores
// #1A081F,#4D1D4D,#05676E,#489C79,#EBC288,#1A081F,#4D1D4D,#05676E
