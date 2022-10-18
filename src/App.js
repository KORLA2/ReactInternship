import React from 'react'

import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'

import {Feed,Video} from './Youtube/transport'

const App = () => {
  return (
    <div>

<Router>

  <Routes>

<Route path='/' exact element={<Feed/>}/>

<Route path='/video/:id' exact element={<Video/>}/>
  </Routes>
</Router>

    </div>
  )
}

export default App
