import { render, screen, userEvent } from '@/test/test-utils'
import { Router } from '../Router'

const QUERIES = {
  getStartCycleButton: () => screen.getByRole('button', { name: /começar/i }),
  queryStartCycleButton: () =>
    screen.queryByRole('button', { name: /começar/i }),
  getHomeLink: () => screen.getByRole('link', { name: 'Home' }),

  getHistoryTitle: () => screen.getByText('Meu histórico'),
  queryHistoryTitle: () => screen.queryByText('Meu histórico'),
  getHistoryLink: () => screen.getByRole('link', { name: 'History' })
}

describe('Navigation Flow', () => {
  it('should navigate from home to history page', async () => {
    const user = userEvent.setup()

    render(<Router />, {
      memoryRouterOptions: {
        initialEntries: ['/']
      }
    })

    expect(QUERIES.getStartCycleButton()).toBeInTheDocument()
    await user.click(QUERIES.getHistoryLink())

    expect(QUERIES.getHistoryTitle()).toBeInTheDocument()

    expect(QUERIES.queryStartCycleButton()).not.toBeInTheDocument()
  })

  it('should navigate from history page to home', async () => {
    const user = userEvent.setup()

    render(<Router />, {
      memoryRouterOptions: {
        initialEntries: ['/history']
      }
    })

    expect(QUERIES.getHistoryTitle()).toBeInTheDocument()
    expect(QUERIES.queryStartCycleButton()).not.toBeInTheDocument()

    await user.click(QUERIES.getHomeLink())

    expect(QUERIES.queryHistoryTitle()).not.toBeInTheDocument()
    expect(QUERIES.getStartCycleButton()).toBeInTheDocument()
  })
})
