import React, { Component } from 'react';
import './App.css';

import Home from './components/Home' ;
import About from './components/About' ;
import Error from './components/Error' ;
import User from './components/User' ;
import Navigation from './components/Navigation' ;
import { BrowserRouter, Route , Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
            <div>
              <Navigation/>
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/user/:id" component={User}/>
                <Route component={Error}/>
              </Switch>
            </div>   
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
