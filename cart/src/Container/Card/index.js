import React, {Component} from 'react';
import Base from '../../Component/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 export default class Card extends Component{
    
     render(){
        
         return(
             <div>
                 
                 <Link to={'/pay'} ><Base variant="success " text="proceed to Pay" /></Link>
             </div>
         );
     }
 }