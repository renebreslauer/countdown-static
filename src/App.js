import React from 'react'
import Countdown from './countdown'
import './App.css'

function App() {
  return (
    <Countdown
      timeTillDate="01 18 2021, 10:00 am"
      timeFormat="MM DD YYYY, h:mm a"
    />
  )
}

export default App
