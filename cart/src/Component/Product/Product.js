import React, {Component} from 'react';
import Base from '../Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Image} from 'react-bootstrap';
export default class Product extends Component{
    
    render(){
        return(
            <div className="container">
                    
            <div className="card" style={{ border:"1px solid black",marginTop:"10px", height:"200px",width:"300px"}}>
           <div className="card-body">
               
                <h2 className="card-title">{this.props.name}</h2>
                <h4 className="card-text"><b>price: </b>{this.props.price}</h4>
                <Link to={'/details'}><Base variant="success" text="Details"/></Link>
                </div>
                </div>
                </div>

            
            
     );
    }
}