import React, {Component} from 'react';
import Base from '../Button';
//import Product from './Product';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Display extends Component{
    constructor(props) {
        super(props);
        this.state = {quantity: 1};
        
      }
      addToCart(){
          alert("the item is successfully added in card");
      }
      handleInputChange = event => 
          this.setState({[event.target.name]: event.target.value})


    render(){
        return(
            <div className="container">
                    
            <div className="card" style={{ border:"1px solid black",marginTop:"10px", height:"200px"}}>
           <div className="card-body">
               
                <h2 className="card-title">{this.props.name}</h2>
                <h4 className="card-text"><b>price: </b>{this.props.price}</h4>
                <h5 className="card-text">{this.props.description}</h5>
                <div>
                 <input type="number" value={this.state.quantity} name="quantity" 
                    onChange={this.handleInputChange}  
                    style={{ width: "60px", marginRight: "10px",marginTop:"15px", borderRadius: "0px"}}/>
                 <Base variant="warning " text="Add to cart" click={this.addToCart.bind(this)}/>
              </div>
              <br/>
              <Link to={'/buy'}><Base variant="success" text="Buy Now" /></Link>
            </div>
            </div>
            </div>
        );
    }
}