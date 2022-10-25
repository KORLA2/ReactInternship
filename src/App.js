import React from 'react'
import Form from './Form'
import News  from './News'
import Protected from './Protected'
import Auth from './Auth'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
const App = () => {


  return (
    <Auth>
      
      <Router>

        <Routes>

          <Route path="/" element={<Form />} />

          <Route path="/News" element={ <Protected><News /></Protected>} />

        </Routes>

      </Router>
    
    </Auth>
  );
}

export default App
