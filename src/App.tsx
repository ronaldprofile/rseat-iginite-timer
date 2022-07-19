import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CyclesProvider } from './context/Cycles/CyclesProvider'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesProvider>
          <Router />
        </CyclesProvider>

        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}
