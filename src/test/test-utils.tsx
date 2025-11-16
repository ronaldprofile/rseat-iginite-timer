import type { PropsWithChildren, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import { defaultTheme } from '../styles/themes/default'

import { render, type RenderOptions } from '@testing-library/react'
import { CyclesProvider } from '@/context/Cycles/CyclesProvider'

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MemoryRouter>
        <CyclesProvider>{children}</CyclesProvider>
      </MemoryRouter>
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, { wrapper: AllTheProviders, ...options })
}

export * from '@testing-library/react'
export * from '@testing-library/user-event'

export { customRender as render }
