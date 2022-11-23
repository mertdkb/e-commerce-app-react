import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Signin from './pages/Auth/Signin'
import Signup from './pages/Auth/Signup'
import Products from './pages/Products';

import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div id="content">
        <Routes>
          <Route path='/products' element={<Products />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
