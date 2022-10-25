import React from 'react'
import Auth from './Auth'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
const App = () => {


  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Auth />}/>


      </Routes>
    </Router>
  );
}

export default App
