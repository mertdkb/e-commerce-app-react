import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Signin from './pages/Auth/Signin'
import Signup from './pages/Auth/Signup'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div id="content">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>
}

export default App;
