import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Productlist from './Component/Product/productlist';

//import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <Router>
    //         <div>
    //           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //             <div className="container">
    //               <Link className="navbar-brand" to="/">ShoppingCart</Link>
    //               {/* <button className="navbar-toggler" type="button" 
    //                 data-toggle="collapse" data-target="#navbarNavAltMarkup" 
    //                 aria-controls="navbarNavAltMarkup" aria-expanded="false" 
    //                 aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //               </button> */}
    //               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //                 <div className="navbar-nav">
    //                   <Link className="nav-item nav-link" to="/">Products</Link>
    //                   <Link className="nav-item nav-link" to="/cart">Cart</Link>
    //                   {/* { (auth) ? <Link className="nav-item nav-link" to="/checkout">
    //                           Checkout</Link>: ''}
    //                   { ( auth ) ? 
    //                       ( <a className="nav-item nav-link" href="/" 
    //                           onClick={this.logOut}>Log out</a>) : 
    //                       ( <Link className="nav-item nav-link float-right" 
    //                           to="/login">Log in</Link> )
    //                   } */}
    //                 </div>
    //               </div>
    //             </div>
    //           </nav>
    //           <div className="container">
    //             <br/>
    //             <Route exact path="/" component={Products} />
    //             <Route exact path="/cart" component={Cart} />
    //             {/* <Route exact path="/checkout" component={Checkout} />
    //             { (!auth) ? <Route exact path="/login" component={Login} /> : '' } */}
    //           </div>
    //         </div>
    //       </Router>
    <div className="App">
      <Productlist/>
    </div>
        );
}

export default App;
