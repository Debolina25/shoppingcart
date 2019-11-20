import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../../Component/Head';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import '../style.css';
let biscut_image = [
    {
        path :"https://m.media-amazon.com/images/I/81Lo0Vbl39L._AC_UL320_ML3_.jpg",
        price:4174,
        name:"Womens Hooded Warm Coats Parkas with Faux Fur Jackets"
    },
    {
        path :"https://images-na.ssl-images-amazon.com/images/I/81dAWrJzJvL._AC_SR300,300_.jpg",
        price:7174,
        name:"Fitz and Floyd Luster 5 Piece Whiskey Set, Gold"
    },
    {
        path :"https://m.media-amazon.com/images/I/91yJf1ZYTdL._AC_UL320_ML3_.jpg",
        price:3599,
        name:"Levi's Men's Washed Cotton Hooded Military Jacket (Regular and Big and Tall Sizes)"
    },
    {
        path :"https://m.media-amazon.com/images/I/719HSwCVHCL._AC_UL320_ML3_.jpg",
        price:1699,
        name:"Arshiner Little Girls Dress Short Sleeve Solid Color Casual Skater Pocket Dress"
    },
    {
        path :"https://m.media-amazon.com/images/I/51JR7ZwFw5L._AC_UL320_ML3_.jpg",
        price:199,
        name:"Yellow Weaves PVC Plastic Refrigerator Mats (12x17-inch, Multicolour)"
    },
    {
        path :"https://m.media-amazon.com/images/I/81AxW4TaMRL._AC_UL320_ML3_.jpg",
        price:1599,
        name:"Ashwini Girls' Netted Salwar Suit"
    },
    
    {
        path :"https://images-na.ssl-images-amazon.com/images/I/81NI0UFz4zL._AC_SR300,300_.jpg",
        price:449,
        name:"Bose Home Speaker 500 with Alexa voice control built-in, Black"
    },
    {
        path :"https://images-na.ssl-images-amazon.com/images/I/71Wp9qdTnjL._AC_SR300,300_.jpg",
        price:4169,
        name:"Corelle 18-Piece Service for 6, Chip Resistant Dinnerware Set, Amalfi Rosa"
    },
    {
        path :"https://m.media-amazon.com/images/I/81y-9V612TL._AC_UL320_ML3_.jpg",
        price:599,
        name:"Neelam Foodland (Mumbai) Schezwan Chakli, Fresh and Crispy, Tasty and Healthy Indian Food and Namkeen Snacks - 300 grams"
    },
    {
        path :"https://m.media-amazon.com/images/I/61JjkACMxIL._AC_UL320_ML3_.jpg",
        price:349,
        name:"Cadbury Dairy Milk Silk Miniatures Chocolate Gift Pack, 240 g"
    },
    {
        path :"https://images-na.ssl-images-amazon.com/images/I/81j0d8pNBFL._AC_SL1425_.jpg",
        price:978,
        name:"Canon EOS M50 Mirrorless Camera Kit w/EF-M15-45mm and 4K Video - Black"
    },
    {
        path :"https://m.media-amazon.com/images/I/81hv5Nx-QXL._AC_UL320_ML3_.jpg",
        price:478,
        name:"Vaidehi Premium Besan Ladoo, Authentic Indian Food and Sweets Mithai - 500 grams"
    },

];
export default class Deal extends Component {
    render() {
        return(
            <div>
                <Head/>
                <div className="container text-center main_div">
                    {biscut_image.map((image) => 
                        <Link to={{
                            pathname:"/singleproduct",
                            aboutProps : {
                                imgpath: image.path,
                                imgname: image.name,
                                imgprice: image.price
                            }
                        }}>
                        <div className="col-3 img_div">
                            <div>
                                <Image src={image.path} thumbnail/><br/>
                                <p>{image.name}</p>
                                <h5>Price: {image.price}</h5>
                            </div>
                        </div>
                        </Link>
                    )}
                </div>
                
            </div>
        );
    }
}