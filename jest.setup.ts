import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'

// Polyfills para react-router-dom v7
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as typeof global.TextDecoder
