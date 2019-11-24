import React, { Fragment } from 'react';
import Navigation from './components/navigation/Navigation'
// import About from './components/about/About'
// import ProductModel from './components/products/ProductModel'
import Products from './components/products/Products'
import data from './data'



function App() {
  return (
    <Fragment>
      <Navigation />
      <Products data={data} />
    </Fragment>
  );
}

export default App;
