import React from 'react';
import './App.css';

import propTypes from 'prop-types';

function ProductTable({products}) {
    return (
        <table className="products_list">
            <thead>
         <tr className="row">
             <th>Name</th>
             <th>Price</th>
             <th>Category</th>
         </tr>  
         </thead> 
          {products.map(product=> 
          <tbody key={Math.random()}>
          <tr className="product_color row">
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.category}</td>
          </tr>
          </tbody>)}
        </table>
    )
};
export default ProductTable;
ProductTable.propTypes = {
    products:propTypes.arrayOf(
        propTypes.shape({

name: propTypes.string,
price:propTypes.number,
category:propTypes.oneOf(['Electronic', 'Clothes'])
  }))};