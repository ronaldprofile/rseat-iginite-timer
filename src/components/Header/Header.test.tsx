import { render, screen, userEvent } from '@/test/test-utils'
import { Header } from '.'
import { defaultTheme } from '@/styles/themes/default'

describe('<Header />', () => {
  it('should render navigation links', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'History' })).toBeInTheDocument()
  })

  it('should have link active when is clicked', async () => {
    render(<Header />)

    const historyLink = screen.getByRole('link', { name: 'History' })

    expect(historyLink).toBeInTheDocument()

    expect(historyLink).not.toHaveClass('active')
    expect(historyLink).not.toHaveStyle({
      color: defaultTheme['green-500']
    })

    await userEvent.click(historyLink)

    expect(historyLink).toHaveClass('active')
    expect(historyLink).toHaveStyle({
      color: defaultTheme['green-500']
    })
  })
})
