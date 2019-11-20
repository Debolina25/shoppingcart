import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../../Component/Head';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import '../style.css';
let biscut_image = [
    {
        path :"https://m.media-amazon.com/images/I/81iuaehQwWL._AC_UL320_ML3_.jpg",
        price:2499,
        name:"Tommy Hilfiger Men's Classic Hooded Puffer Jacket (Regular and Big & Tall Sizes)"
    },
    {
        path :"https://m.media-amazon.com/images/I/81Lo0Vbl39L._AC_UL320_ML3_.jpg",
        price:4174,
        name:"Womens Hooded Warm Coats Parkas with Faux Fur Jackets"
    },
    {
        path :"https://m.media-amazon.com/images/I/61B+W-q3pLL._AC_UL320_ML3_.jpg",
        price:4499,
        name:"Chicwish Women's Turn Down Shawl Collar Earth Tone Check/Black White Grid/Black/Plum/Cream/Pink Wool Blend Coat"
    },
    {
        path :"https://m.media-amazon.com/images/I/91yJf1ZYTdL._AC_UL320_ML3_.jpg",
        price:3599,
        name:"Levi's Men's Washed Cotton Hooded Military Jacket (Regular and Big and Tall Sizes)"
    },
    {
        path :"https://m.media-amazon.com/images/I/51tbUx8-HiL._AC_UL320_ML3_.jpg",
        price:2689,
        name:"INCHOICE Women Long Hooded Down Jacket Thickened Winter Puffer Parka Coats Extra Seams Zipper Closure"
    },
    {
        path :"https://m.media-amazon.com/images/I/81t0-mjKx3L._AC_UL320_ML3_.jpg",
        price:5449,
        name:"Amazon Essentials Women's Lightweight Water-Resistant Packable Puffer Coat"
    },
    {
        path :"https://m.media-amazon.com/images/I/61Sl5hKC5qL._AC_UL320_ML3_.jpg",
        price:6169,
        name:"MOERDENG Women's Waterproof Ski Jacket Warm Winter Snow Coat Mountain Windbreaker Hooded Raincoat"
    },
    {
        path :"https://m.media-amazon.com/images/I/91Co8STCd+L._AC_UL320_ML3_.jpg",
        price:5599,
        name:"Dickies Men's Insulated Eisenhower Front-Zip Jacket"
    },
    {
        path :"https://m.media-amazon.com/images/I/619+u0U0-zL._AC_UL320_ML3_.jpg",
        price:6478,
        name:"Akalnny Women Thickened Water-Resistant Down Jacket Stylish Down Coat Winter Jacket with Hood"
    },

];
export default class Winter extends Component {
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