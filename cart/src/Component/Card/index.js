import React, {Component} from 'react';
import Base from '../../Component/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 export default class Card extends Component{
    
     render(){
         return(
             <div>
                 <span>Item in Cart:0</span>
                 <br/>
                 <span>Total Price:0</span>
                 <br/>
                 <Link to={'/pay'} ><Base variant="success " text="Pay" /></Link>
             </div>
         );
     }
 }