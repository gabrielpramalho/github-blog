import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from './styles/themes/defalt'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { BlogProvider } from './contexts/BlogContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

