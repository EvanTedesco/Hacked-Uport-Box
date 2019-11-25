import React from 'react'
import { requestDisclosure } from '../../uport'

const LoginButton = () => (
  <button onClick={() => requestDisclosure({ verified: ['hobby', 'firstName', 'lastName', 'age'], requested: ['weight'] })}>login</button>
)

export default LoginButton