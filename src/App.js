import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Products from './components/products/Products'
import ProductInfo from './components/product info/ProductInfo';
import RegisterForm from './components/user-panel/RegisterForm';
import LoginForm from './components/user-panel/LoginForm';
import Slider from './components/gallery/Slider';
import Home from './components/home/Home';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Router>
        <Route path="/products" exact component={Products} />
        <Route path="/about" component={About} />
        <Route path="/product/:id" strict component={ProductInfo} />
        <Route path="/register" strict component={RegisterForm} />
        <Route path="/login" strict component={LoginForm} />
        <Route path="/gallery" strict component={Slider} />
        <Route path="/" strict exact component={Home} />
      </Router>
    </Fragment>

  );
}

export default App;
