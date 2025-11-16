import type { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter, type MemoryRouterProps } from 'react-router-dom'
import { defaultTheme } from '../styles/themes/default'

import { render, type RenderOptions } from '@testing-library/react'
import { CyclesProvider } from '@/context/Cycles/CyclesProvider'

const AllTheProviders = ({
  children,
  memoryRouterOptions
}: {
  children: ReactNode
  memoryRouterOptions?: MemoryRouterProps
}) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MemoryRouter {...memoryRouterOptions}>
        <CyclesProvider>{children}</CyclesProvider>
      </MemoryRouter>
    </ThemeProvider>
  )
}

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  memoryRouterOptions?: MemoryRouterProps
}
const customRender = (ui: ReactElement, options?: CustomRenderOptions) => {
  return render(ui, {
    wrapper: ({ children }) =>
      AllTheProviders({
        children,
        memoryRouterOptions: options?.memoryRouterOptions
      }),
    ...options
  })
}

export * from '@testing-library/react'
export * from '@testing-library/user-event'

export { customRender as render }
