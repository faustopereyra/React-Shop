import React from 'react';

import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx"
import Header from "./components/header/header.component"
import SingInAndSingUpPage from "./pages/sing-in-and-sing-up/sing-in-and-sing-up.component"
import { auth } from "./firebase/firebase.utils";



class App extends React.component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SingInAndSingUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
