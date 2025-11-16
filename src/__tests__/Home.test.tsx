import { Home } from '@/pages/Home'
import { act, render, screen, userEvent, UserEvent } from '@/test/test-utils'

const QUERIES = {
  getTaskInput: () => screen.getByLabelText(/Vou trabalhar em/i),
  getDurationInput: () => screen.getByLabelText(/Durante/i),
  getStartCycleButton: () => screen.getByRole('button', { name: 'Começar' }),
  getStopCycleButton: () => screen.findByRole('button', { name: 'Interromper' })
}

function setupHomePage() {
  render(<Home />)

  return {
    user: userEvent.setup()
  }
}

// usar `jest.useFakeTimers()` substitui todas as functions de timer do JS
// settimeout, setinterval etc...

// ideal isolar essa prática somente a tests que precisam.
function setupHomePageWithFakeTimers() {
  render(<Home />)

  return {
    user: userEvent.setup({
      // ao fazer isso globalmente preciso de atenção com o userEvent
      // use os fake timers do Jest quando precisar avançar o tempo internamente
      advanceTimers: jest.advanceTimersByTime
    })
  }
}

describe('Integration: Home page', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  it('should start and manually stop a new cycle', async () => {
    const { user } = setupHomePage()

    // verify if elements existing
    const startCycleButton = QUERIES.getStartCycleButton()
    const taskInput = QUERIES.getTaskInput()
    const durationInput = QUERIES.getDurationInput()

    expect(startCycleButton).toBeInTheDocument()
    expect(startCycleButton).toBeDisabled()

    expect(taskInput).toBeInTheDocument()
    expect(taskInput).toBeEnabled()

    expect(durationInput).toBeInTheDocument()
    expect(durationInput).toBeEnabled()

    // type task and duration, and submit form
    await user.type(taskInput, 'Fazer café')
    expect(taskInput).toHaveValue('Fazer café')

    await user.type(durationInput, '5') // 5 min
    expect(durationInput).toHaveValue(5)

    expect(startCycleButton).toBeEnabled()
    await user.click(startCycleButton)

    expect(taskInput).toHaveValue('')
    expect(durationInput).toHaveValue(0)

    // check if cycle is started
    expect(taskInput).toBeDisabled()
    expect(durationInput).toBeDisabled()

    const stopCycleButton = await QUERIES.getStopCycleButton()

    expect(stopCycleButton).toBeInTheDocument()
    expect(startCycleButton).not.toBeInTheDocument()

    // stop current cycle
    await user.click(stopCycleButton)

    expect(taskInput).toBeEnabled()
    expect(durationInput).toBeEnabled()

    expect(QUERIES.getStartCycleButton()).toBeInTheDocument()
  })

  it('should start and automatically complete a cycle when timer finishes', async () => {
    jest.useFakeTimers()
    const DURATION_MINUTES = 5

    const { user } = setupHomePageWithFakeTimers()

    const taskInput = QUERIES.getTaskInput()
    const durationInput = QUERIES.getDurationInput()
    const startCycleButton = QUERIES.getStartCycleButton()

    await user.type(taskInput, 'Fazer café')
    await user.type(durationInput, String(DURATION_MINUTES))
    await user.click(startCycleButton)

    const stopCycleButton = await QUERIES.getStopCycleButton()
    expect(stopCycleButton).toBeInTheDocument()

    act(() => {
      jest.advanceTimersByTime(DURATION_MINUTES * 60 * 1000)
    })

    expect(stopCycleButton).not.toBeInTheDocument()

    const startButtonAfter = QUERIES.getStartCycleButton()
    expect(startButtonAfter).toBeInTheDocument()

    expect(taskInput).toBeEnabled()
    expect(durationInput).toBeEnabled()

    expect(startButtonAfter).toBeDisabled()
  })
})
