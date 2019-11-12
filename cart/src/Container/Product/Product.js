import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Image} from 'react-bootstrap';
export default class Product extends Component{
    
    render(){
        
        return(
            
            <div className=" container">
                    
            <div className="card " style={{ border:"1px solid black",marginTop:"10px", height:"200px",width:"300px"}}>
            <Link to={'/details'}>
           <div className="card-body">
               
                <h2 className="card-title text-info">{this.props.name}</h2>
                <h4 className="card-text text-success"><b>price: </b>{this.props.price}</h4>
                
                </div>
                </Link>
                </div>
                </div>

            
            
     );
    }
}