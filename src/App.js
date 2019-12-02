import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import userService from './components/shared/helpers/userService';

import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Products from './components/products/Products'
import ProductInfo from './components/products/product-info/ProductInfo';
import Register from './components/user-panel/Register';
import Login from './components/user-panel/Login';
import Create from './components/user-panel/CreateProduct';
import Slider from './components/gallery/Slider';
import Home from './components/home/Home';
import NotFound from './components/notFound/notFound';


function render(Cmp, otherProps) {
  return function (props) {
    return <Cmp {...props} {...otherProps} />
  };
}

function parseCookies() {
  return document.cookie
    .split('; ').reduce((acc, cookie) => {
      const [cookieName, cookieValue] = cookie.split('=');
      acc[cookieName] = cookieValue;
      return acc;
    }, {})
}

class App extends Component {
  constructor(props) {
    super(props);
    const cookies = parseCookies();
    this.state = {
      isLogged: !!cookies['x-auth-token'],
      username: ""
    };
  }

  // logout = (history) => {
  //   userService.logout().then(() => {
  //     this.setState({ isLogged: false });
  //     history.push('/');
  //     return null;
  //   });
  // }

  login = (history, data) => {
    userService.login(data).then(() => {
      let user_id = data._id;
      this.setState({ isLogged: true, user_id });
      history.push('/');
    })
      .catch(err => console.log)
  }

  render() {
    const { isLogged } = this.state;
    return (
      <Fragment>
        <BrowserRouter>
          <Navigation isLogged={isLogged} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact strict render={render(Products, { isLogged })} />
            {/* <Route path="/products" exact strict component={Products} /> */}

            <Route path="/about" exact strict component={About} />
            <Route path="/product/:id" exact strict component={ProductInfo} />
            <Route path="/register" exact strict render={render(Register, { isLogged })} />
            {/* <Route path="/register" exact strict component={Register} /> */}
            <Route path="/login" exact strict render={render(Login, { isLogged, login: this.login })} />
            {/* <Route path="/login" exact strict component={Login}  /> */}
            <Route path="/gallery" exact strict component={Slider} />
            <Route path="/create-product" exact strict render={render(Create, { isLogged })} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Fragment>

    );
  }
}

export default App;
