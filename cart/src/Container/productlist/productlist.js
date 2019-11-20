import React, {Component} from 'react';
import Head from '../../Component/Head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import './style.css';
 export default class Productlist extends Component{

     render(){
        
        let images = [
            {
                id:"Kids_fashion",
                path:"https://m.media-amazon.com/images/I/713t8Oiej3L._AC_UL320_ML3_.jpg",
                link:"/kids"
            },
            {
                id:"womens_fashion",
                path:"https://m.media-amazon.com/images/I/817lcXuvlFL._AC_UL320_ML3_.jpg",
                link:"/womenwear"
            },
            {
                id:"mens_fashion",
                path:"https://m.media-amazon.com/images/I/412calVd-6L._AC_UL320_ML3_.jpg",
                link:"/menwear"
            },
            {
                id:"biscuits",
                path:"https://m.media-amazon.com/images/I/51-pP80KqzL._AC_UL320_ML3_.jpg",
                link:"/biscuts"
            },
            {
                id:"chocolate",
                path:"https://m.media-amazon.com/images/I/71TfBEc5R7L._AC_UL320_ML3_.jpg",
                link:"/chocolate"
            },
            {
                id:"namkeen",
                path:"https://m.media-amazon.com/images/I/71ZYhY3oUjL._AC_UL320_ML3_.jpg",
                link:"/namkeen"
            },
            {
                id:"mobile",
                path:"https://m.media-amazon.com/images/I/71CyW7YCRaL._AC_UL320_ML3_.jpg",
                link:"/mobile"
            },
            {
                id:"winter",
                path:"https://images-na.ssl-images-amazon.com/images/I/71kb%2BtF1kKL._AC_UX569_.jpg",
                link:"/winter"
            },
            {
                id:"household",
                path:"https://m.media-amazon.com/images/I/61yLH24wFML._AC_UL320_ML3_.jpg",
                link:"/household"
            },
        ];

         return(
             <div>
               <Head/>
                     <h1>List Of Avalaible Products</h1><hr/>
                <div className="container text-center">
                    {images.map((image) => 
                        <Link to={image.link} className="col-3 image_div">
                            <div>
                                <Image  className="images" src={image.path} thumbnail/><br/>
                                <span>{image.id}</span>
                            </div>
                        </Link>
                    )}
                </div>
             </div>
         );
     }
 }