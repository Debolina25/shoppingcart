import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../../Component/Head';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import '../style.css';
let biscut_image = [
    {
        path :"https://m.media-amazon.com/images/I/51E-7Y2kEdL._AC_UL320_ML3_.jpg",
        price:1399,
        name:"VIKITA Winter Toddler Girl Clothes Cotton Long Sleeve Girls Dresses for Kids 2-8 Years "
    },
    {
        path :"https://m.media-amazon.com/images/I/51K2RxnDmwL._AC_UL320_ML3_.jpg",
        price:1629,
        name:"Toddler Baby Boy Girl Raincoat for Kids Dinosaur Rain Jacket"
    },
    {
        path :"https://m.media-amazon.com/images/I/61UB0gKAORL._AC_UL320_ML3_.jpg",
        price:2499,
        name:"TTYAOVO Girls Pageant Princess Flower Dress Kids Prom Puffy Ball Gowns"
    },
    {
        path :"https://images-na.ssl-images-amazon.com/images/I/61NTq5CyHJL._AC_UX679_.jpg",
        price:998,
        name:"VIKITA Baby Girl Cartoon Flower Cotton Dress Long Sleeve Winter Dresses for 2-8 Years Little Girls"
    },
    {
        path :"https://m.media-amazon.com/images/I/81-5UUQMoaL._AC_UL320_ML3_.jpg",
        price:689,
        name:"Columbia Kids' Frosty Slope Set"
    },
    {
        path :"https://m.media-amazon.com/images/I/61U9b1ZOlBL._AC_UL320_ML3_.jpg",
        price:1449,
        name:"WEONEDREAM Princess Girls Dress for Wedding Birthday Party with Train Size 3-14 Years"
    },
    {
        path :"https://m.media-amazon.com/images/I/719HSwCVHCL._AC_UL320_ML3_.jpg",
        price:1699,
        name:"Arshiner Little Girls Dress Short Sleeve Solid Color Casual Skater Pocket Dress"
    },
    {
        path :"https://m.media-amazon.com/images/I/81AxW4TaMRL._AC_UL320_ML3_.jpg",
        price:1599,
        name:"Ashwini Girls' Netted Salwar Suit"
    },
    {
        path :"https://m.media-amazon.com/images/I/71ISN6uWJvL._AC_UL320_ML3_.jpg",
        price:1478,
        name:"GRACE KARIN Girls Shift Flower Lace Dresses with Sleeves"
    },

];
export default class Kidwear extends Component {
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