import React, { Fragment } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Products from './components/products/Products'
import ProductInfo from './components/product info/ProductInfo';
import Register from './components/user-panel/Register';
import Login from './components/user-panel/Login';
import Create from './components/user-panel/CreateProduct';
import Slider from './components/gallery/Slider';
import Home from './components/home/Home';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/products" exact strict component={Products} />
        <Route path="/about" exact strict component={About} />
        <Route path="/product/:id" exact strict component={ProductInfo} />
        <Route path="/register" exact strict component={Register} />
        <Route path="/login" exact strict component={Login} />
        <Route path="/gallery" exact strict component={Slider} />
        <Route path="/create-product" exact strict component={Create} />
      </BrowserRouter>
    </Fragment>

  );
}

export default App;
