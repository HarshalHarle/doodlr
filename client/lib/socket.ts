import { io } from 'socket.io-client'

const SERVER =
  process.env.NODE_ENV === 'production'
    ? 'https://doodlr.vercel.app'
    : 'http://localhost:3001'

export const socket = io(SERVER, { transports: ['websocket'] })
