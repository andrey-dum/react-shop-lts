import React from 'react';
import AppNavbar from './components/AppNavbar';
import ProductList from './components/ProductList';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';



function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ProductList />
    </div>
  );
}

export default App;
