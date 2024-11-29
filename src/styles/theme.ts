import { createTheme, ThemeOptions } from '@mui/material/styles'

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#522c63'
    },
    secondary: {
      main: '#dc004e'
    },
    customColor: {
      main: '#702d65',
      contrastText: '#ededed'
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif'
  }
}

const theme = createTheme(themeOptions)

export default theme

declare module '@mui/material/styles' {
  interface Palette {
    customColor?: {
      main: string
      contrastText: string
    }
  }
  interface PaletteOptions {
    customColor?: {
      main: string
      contrastText: string
    }
  }
}
