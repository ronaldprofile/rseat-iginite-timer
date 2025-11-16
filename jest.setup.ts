import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'

// Polyfills para react-router-dom v7
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as typeof global.TextDecoder

Object.defineProperty(global, 'Notification', {
  writable: true,
  value: jest.fn().mockImplementation((title, options) => {
    return {
      title,
      ...options,
      close: jest.fn()
    }
  })
})

Object.defineProperty(global.Notification, 'permission', {
  writable: true,
  value: 'default'
})

Object.defineProperty(global.Notification, 'requestPermission', {
  writable: true,

  value: jest.fn().mockResolvedValue('granted') // Pode resolver para 'granted', 'denied', ou 'default'
})

global.Audio = jest.fn().mockImplementation(() => ({
  play: jest.fn(),
  pause: jest.fn(),
  load: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  currentTime: 0,
  duration: 0,
  volume: 1,
  muted: false,
  paused: true,
  ended: false,
  src: ''
}))
