import { Button, styled, Typography, useTheme } from '@mui/material'
import '../src/styles/global.css'

const App = () => {
  const theme = useTheme()

  return (
    <Wrapper>
      <Typography variant="h4" color="primary" gutterBottom={true}>
        Tema customizado
      </Typography>
      <Button
        variant="contained"
        style={{
          backgroundColor: theme.palette.customColor?.main,
          color: theme.palette.customColor?.contrastText
        }}
      >
        Botão customizado
      </Button>
    </Wrapper>
  )
}

export const Wrapper = styled('div')`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default App
