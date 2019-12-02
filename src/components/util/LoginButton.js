import React from 'react'
import { requestDisclosure } from '../../uport'

const LoginButton = () => (
  <button onClick={() => requestDisclosure({ verified: [], requested: ['weight'] })}>login</button>
)

export default LoginButton