import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/navigation/Navigation'
// import About from './components/about/About'
// import ProductModel from './components/products/ProductModel'
import Products from './components/products/Products'
import ProductInfo from './components/product info/ProductInfo';


function App() {
  return (
    <Fragment>
      <Navigation />
      <Router>
        {/* <Route path="/" component={Products} /> */}

        <Route path="/products" exact component={Products} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/product/:id" strict component={ProductInfo} />

        {/* <Route path="/register" component={Register} />
        <Route path="/login" component={Login} /> */}

      </Router>
    </Fragment>

  );
}

export default App;
