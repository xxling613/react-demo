import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
// import Home from './components/home.js'
// import Check from './components/check.js'
// import List from './components/tolist.js'
// import Parent from './components/parents.js'
// import News from './components/news.js'
// import logo from './assets/images/logo.svg';
import './assets/css/App.css';
// import Fetch from './components/fetch.js'
import Home from './components/router/Home'
import News from './components/router/news'
import Cart from './components/router/cart'
import Center from './components/router/center'
import Cartdet from './components/router/cartdet'
import Login from './components/router/login'

class App extends Component {
  render() {
    return (
      <Router>
    <div>
      {/* <p>我是app</p> */}
      {/* <Home></Home> */}
      {/* <Check></Check> */}
      {/* <News></News> */}
     {/* <List></List> */}
     {/* <Parent /> */}
     {/* <Fetch /> */}
     
     <Route exact path="/" component={Home} /> 
     {/* <Route exact path="/home" component={Home}> </Route> */}
     <Route  path="/news" component={News} /> 
     <Route  path="/login" component={Login} /> 
     <Route  path="/cart" component={Cart} /> 
     <Route  path="/center/:id" component={Center} /> 
     <Route  path="/cartdet/:id" component={Cartdet} /> 
    </div>
    </Router>
    );
  }
}

export default App;