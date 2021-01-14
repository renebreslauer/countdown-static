import React from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <>
      <Hero />
      <Footer />
    </>
  )
}

export default App
