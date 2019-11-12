import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Head extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <h3 className="navbar-brand" >Debs Fashion</h3>
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link" to="/productlist">Productlist</Link>
                            <Link className="nav-item nav-link" to="/card">Card</Link>
                        </div>
                    </div>
                    </nav>
                </div>
        );
    }
}