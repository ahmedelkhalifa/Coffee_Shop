import React from 'react'
import { HashRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './themes/pages/Home'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App