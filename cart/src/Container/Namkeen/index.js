import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../../Component/Head';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import '../style.css';
let biscut_image = [
    {
        path :"https://m.media-amazon.com/images/I/81XjdBF7MNL._AC_UL320_ML3_.jpg",
        price:499,
        name:"Neelam Foodland (Mumbai) Low Fat Soya Chakli, Fresh and Crispy, Tasty and Healthy Indian Food and Namkeen Snacks - 400 grams "
    },
    {
        path :"https://m.media-amazon.com/images/I/81Uk0wC46RL._AC_UL320_ML3_.jpg",
        price:1174,
        name:"Haldiram's Classic Indian Gulab Jamun - 2.2lb"
    },
    {
        path :"https://m.media-amazon.com/images/I/61iu+gWrKxL._AC_UL320_ML3_.jpg",
        price:499,
        name:"Bikaji Falahari Mix, Fasting Snacks, Fresh and Crispy, Authentic Indian Foods and Namkeen Snack, Fresh and Crispy - 200 grams"
    },
    {
        path :"https://m.media-amazon.com/images/I/71ZYhY3oUjL._AC_UL320_ML3_.jpg",
        price:599,
        name:"Bikaji Bikaneri Bhujia, Spicy Fried Noodle, Ready to Eat Spicy Mix, Indian Namkeen Snack, Fresh and Crispy - 200 grams"
    },
    {
        path :"https://m.media-amazon.com/images/I/51+RBLyNkoL._AC_UL320_ML3_.jpg",
        price:689,
        name:"Ghasitaram's (Mumbai) Kaju Katli, Authentic Indian Food and Sweets Mithai - 400 grams (14 oz)"
    },
    {
        path :"https://m.media-amazon.com/images/I/71Hg8dFRioL._AC_UL320_ML3_.jpg",
        price:449,
        name:"Chitale Bandhu (Pune) Indian Bakarwadi Snacks - 200 gm"
    },
    {
        path :"https://m.media-amazon.com/images/I/71jQA9wU7WL._AC_UL320_ML3_.jpg",
        price:169,
        name:"Kanwarji Dalbiji Wala (Delhi) Dal Biji Plain Indian Savory Snack - 500 gm"
    },
    {
        path :"https://m.media-amazon.com/images/I/81y-9V612TL._AC_UL320_ML3_.jpg",
        price:599,
        name:"Neelam Foodland (Mumbai) Schezwan Chakli, Fresh and Crispy, Tasty and Healthy Indian Food and Namkeen Snacks - 300 grams"
    },
    {
        path :"https://m.media-amazon.com/images/I/81hv5Nx-QXL._AC_UL320_ML3_.jpg",
        price:478,
        name:"Vaidehi Premium Besan Ladoo, Authentic Indian Food and Sweets Mithai - 500 grams"
    },

];
export default class Namkeen extends Component {
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