import { red } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// // A custom theme for this app
// // export const palette = {

// // }
let theme = createTheme({
  typography: {
    fontFamily: ['"Sora"', 'sans-serif'].join(','),
    h3: {
      color: '#cc8f4d'
    }
  },
  palette: {
    primary: {
      text: '#1e3d59',
      light: '',
      main: '#F2B872',
      dark: ''
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#9bd1dd',
      paper: '#FF9437'
    }
    // TODO: resolver como setar as cores com tokens personalizados
  }
})
theme = responsiveFontSizes(theme)
export default theme

// Hex code: #1e3d59, #f5f0e1, #ff6e40, #ffc13b
// #FF9437
