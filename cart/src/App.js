import React from 'react';
import './App.css';
import Productlist from './Container/Product/productlist';
import Card from './Component/Card';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Display from './Container/Product/Display';
import Main from './Container/Main';
import Pay from './Container/Pay';

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
        <Route  exact path={"/"} component={Main}/>
        <Route path={"/productlist"} component={Productlist}/>
        <Route path={"/card"} component={Card}/>
        <Route path={"/details"} component={Display}/>
        <Route path={"/pay"} component={Pay}/>
        </Switch>
      </Router>
      </div>
        );
}

export default App;
