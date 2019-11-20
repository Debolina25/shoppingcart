import React from 'react';
import './App.css';
import Main from './Container/Main';
import Productlist from './Container/productlist/productlist';
import Kidwear from './Container/Kids/index';
import Womenwear from './Container/Womenwear/index';
import Menwear from './Container/Menwear/index';
import Biscuts from './Container/Biscuts/index';
import Chocolate from './Container/Chocolate/index';
import Namkeen from './Container/Namkeen';
import Mobile from './Container/Mobile/index';
import Household from './Container/Household/index';
import SingleProduct from './Container/SingleProduct/index';
import Card from './Container/Card';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pay from './Container/Pay';
import Completemsg from './Container/Complete';
import Winter from './Container/Winter';
import Deal from './Container/Deals';


function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
        <Route  exact path={"/"} component={Main}/>
        <Route path={"/productlist"} component={Productlist}/>
        <Route path={"/womenwear"} component={Womenwear}/>
          <Route path={"/menwear"} component={Menwear}/>
          <Route path={"/biscuts"} component={Biscuts}/>
          <Route path={"/chocolate"} component={Chocolate}/>
          <Route path={"/mobile"} component={Mobile}/>
          <Route path={"/household"} component={Household}/>
          <Route path={"/kids"} component={Kidwear}/>
          <Route path={"/namkeen"} component={Namkeen}/>
          <Route path={"/winter"} component={Winter}/>
          <Route path={"/deals"} component={Deal}/>
          <Route path={"/singleproduct"} component={SingleProduct}/>
        <Route path={"/card"} component={Card}/>
        <Route path={"/pay"} component={Pay}/>
        <Route path={'/complete'} component={Completemsg}/>
        </Switch>
      </Router>
      </div>
        );
}

export default App;
