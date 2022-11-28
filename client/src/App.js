import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Signin from './pages/Auth/Signin'
import Signup from './pages/Auth/Signup'
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile'
import Basket from './pages/Basket';
import Error404 from './pages/Error404';
import './App.css'



function App() {
  return (
    <Router>
      <Navbar />
      <div id="content">
        <Routes>
          <Route path='/products' element={<Products />}/>
          <Route path="/product/:product_id" element={<ProductDetail />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/basket' element={<Basket />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
