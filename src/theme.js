import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// // A custom theme for this app
// // export const palette = {

// // }
const theme = createTheme({
  palette: {
    primary: {
      light: '',
      main: '#F2B872',
      dark: '',
      contrastText: 'blue'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#F2B872'
    }
  }
})

export default theme

// // /* Color Theme Swatches in Hex */
// // .Yellow-1-hex { color: #F2D16D; }
// // .Yellow-2-hex { color: #F2C777; }
// // .Yellow-3-hex { color: #F2B872; }
// // .Yellow-4-hex { color: #BF784E; }
// // .Yellow-5-hex { color: #BFBEBD; }

// // /* Color Theme Swatches in RGBA */
// // .Yellow-1-rgba { color: rgba(242, 208, 109, 1); }
// // .Yellow-2-rgba { color: rgba(242, 199, 118, 1); }
// // .Yellow-3-rgba { color: rgba(242, 184, 113, 1); }
// // .Yellow-4-rgba { color: rgba(191, 119, 78, 1); }
// // .Yellow-5-rgba { color: rgba(191, 189, 189, 1); }

// // /* Color Theme Swatches in HSLA */
// // .Yellow-1-hsla { color: hsla(45, 83, 68, 1); }
// // .Yellow-2-hsla { color: hsla(39, 82, 70, 1); }
// // .Yellow-3-hsla { color: hsla(33, 83, 69, 1); }
// // .Yellow-4-hsla { color: hsla(22, 46, 52, 1); }
// // .Yellow-5-hsla { color: hsla(11, 1, 74, 1); }
