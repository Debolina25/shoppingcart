import React, {Component} from 'react';
import Base from '../../Component/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Image} from 'react-bootstrap';
export default class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {quantity: 1};
        
      }
      handleClick = (id)=>{
        this.props.addToCart(id); 
    }
      handleInputChange = event => 
          this.setState({[event.target.name]: event.target.value})
      
    render(){
        const item = this.props.item;
        
        return(
            
            <div className=" container">
                    
            <div className="card " style={{ border:"1px solid black",marginTop:"10px"}}>
            <Link to={'/details'} >
           <div className="card-body">
           
                <h4 className="card-text text-success"><b>{item.id}</b></h4>
                <h2 className="card-title text-info">{item.name}</h2>
                <h4 className="card-text text-success"><b>price: </b>{item.price}</h4>
                
                </div>
                </Link>
                <h5 className="card-text">{item.description}</h5>
                <div>
                 <input type="number" value={this.state.quantity} name="quantity" 
                    onChange={this.handleInputChange}  
                    style={{ width: "60px", marginRight: "10px",marginTop:"15px", borderRadius: "0px"}}/>
                    <Base variant="warning " text="Add to cart" onClick={()=>{this.handleClick(item.id)}}/>
              </div>
              <br/>
              <Link to={'/pay'}><Base variant="success" text="Buy Now" /></Link>
                </div>
                </div>



            
     );
    }
}