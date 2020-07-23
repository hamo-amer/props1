import React from 'react';
import './App.css';
import ProductTable from './ProductTable';

// array of products
const products=[
  {name:"Desktop",price:1000,category:"Electronic"},
  {name:"Tablet",price:500,category:"Electronic"},
  {name:"Jacket",price:100,category:"Clothes"}
];

function App() {
  return (
    <div className="App">
    <ProductTable  products={products} />
    </div>
  );
}

export default App;
