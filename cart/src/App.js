import React from 'react';
import './App.css';
import Productlist from './Container/Product/productlist';
import Card from './Container/Card';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Displaylist from './Container/Product/Display';
import Main from './Container/Main';
import Pay from './Container/Pay';
import Completemsg from './Container/Complete';

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
        <Route  exact path={"/"} component={Main}/>
        <Route path={"/productlist"} component={Productlist}/>
        <Route path={"/card"} component={Card}/>
        <Route path={"/details"} component={Displaylist}/>
        <Route path={"/pay"} component={Pay}/>
        <Route path={'/complete'} component={Completemsg}/>
        </Switch>
      </Router>
      </div>
        );
}

export default App;
