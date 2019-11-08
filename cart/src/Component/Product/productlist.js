import React, {Component} from 'react';
import Product from './Product';
 export default class Productlist extends Component{
    
     render(){
        var  products =[
            {name:"Blue-Tshirt", price:1000,id: 1},
            {name:"Red-Tshirt", price:1208,id: 2},
            {name:"Green-Saree", price:2000,id: 3},
            {name:"Blue-Palazo", price:500,id: 4},
            {name:"Hoodie", price:4000,id: 5},
            {name:"Pink-Saree", price:3000,id: 6},
            {name:"Western-Dress", price:2500,id: 7},
            {name:"Kurti", price:700,id: 8},
            {name:"Red-Saree", price:1000,id: 9},
            {name:"White-Saree", price:1000,id: 10},
        ]
         return(
             <div>
                     <h1>List Of Avalaible Products</h1><hr/>
                 {
                 products.map(item =>(
                     <Product name={item.name} price={item.price} key={item.id}/>
                 ))
                  }
             </div>
         );
     }
 }