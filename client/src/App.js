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
import ProtectedRoutes from './pages/Admin/ProtectedRoutes';
import Home from './pages/Admin/Home';
import AdminProducts from './pages/Admin/Products'
import Orders from './pages/Admin/Orders';
import AdminProductDetail from './pages/Admin/ProductDetail'
import NewProduct from './pages/Admin/Products/newProduct';



function App() {
  return (
    <Router>
      <Navbar />
      <div id="content">
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin' element={<ProtectedRoutes />}>
            <Route path='/admin/home' element={<Home />} />
            <Route path='/admin/orders' element={<Orders />} />
            <Route path='/admin/products' element={<AdminProducts />} />
            <Route path='/admin/products/:product_id' element={<AdminProductDetail />} />
            <Route path='/admin/products/new/:product_id' element={<NewProduct />} />
          </Route>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
