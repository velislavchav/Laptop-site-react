import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import userService from './components/shared/helpers/userService';
import { getCookie } from './components/shared/helpers/cookieSetter'
// components
import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Products from './components/products/Products'
import ProductInfo from './components/products/product-info/ProductInfo';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Create from './components/user/CreateProduct';
import Slider from './components/gallery/Slider';
import Home from './components/home/Home';
import Profile from './components/user/profile/profile';
import EditProfile from './components/user/EditProfile';
import NotFound from './components/notFound/notFound';
import DeleteConfirmation from './components/products/DeleteConfirmation';

class App extends Component {
  render() {
    const isLogged = !!getCookie('x-auth-token');
    return (
      <Fragment>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/products" exact strict render={render(Products, { isLogged })} /> */}
            {isLogged && <Route path="/products" exact strict component={Products} />}
            {isLogged && <Route path="/profile" exact strict component={Profile} />}
            {isLogged && <Route path="/edit-profile" exact strict component={EditProfile} />}
            <Route path="/about" exact strict component={About} />
            {isLogged && <Route path="/product/:id" exact strict component={ProductInfo} />}
            {!isLogged && <Route path="/register" exact strict component={Register} />}
            {isLogged && <Route path="/delete-confirmation" exact strict component={DeleteConfirmation} />}
            {!isLogged && <Route path="/login" exact strict component={Login} />}
            {/* <Route path="/login" exact strict component={Login}  /> */}
            <Route path="/gallery" exact strict component={Slider} />
            {isLogged && <Route path="/create-product" exact strict component={Create} />}
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Fragment>

    );
  }
}

export default App;
