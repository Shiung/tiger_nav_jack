import React, { useEffect } from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import MainLayout from 'layouts/mainLayout'

import 'styles/main.scss'

const App = () => {
  const history = createBrowserHistory()
  useEffect(() => {
    console.log('process.env.VERSION', process.env.VERSION)
    console.log('process.env.VERSION', process.env.commitHEAD)
    return () => {
      console.log('清除')
    }
  })
  return (
    <Router history={history}>
      <MainLayout history={history} />
    </Router>
  )
}

export default App
