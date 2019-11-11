import React, {Component} from 'react';
import Product from './Product';
import Display from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
 export default class Productlist extends Component{
    
     render(){
        var  products =[
            // {name:"Blue-Tshirt", price:1000,id: 1},
            // {name:"Red-Tshirt", price:1208,id: 2},
            // {name:"Green-Saree", price:2000,id: 3},
            // {name:"Blue-Palazo", price:500,id: 4},
            // {name:"Hoodie", price:4000,id: 5},
            // {name:"Pink-Saree", price:3000,id: 6},
            // {name:"Western-Dress", price:2500,id: 7},
            // {name:"Kurti", price:700,id: 8},
            // {name:"Red-Saree", price:1000,id: 9},
            // {name:"White-Saree", price:1000,id: 10},
            {
                id: 0,
                name: 'TC 2017 LS',
                description: 'VC FlexLight Jersey with spot sublimated Team Canada 2017 logo, from our Team Canada Collection.',
                price: 34.95,
                img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2017_LS_Mens_grande.jpg?v=1485541617',
              }, {
                id: 1,
                name: 'TC 2017 Shorts',
                description: 'VC FlexLight Shorts with spot sublimated Team Canada 2017 logo, from our Team Canada Collection.',
                price: 25.00,
                img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2017_Shorts_White_grande.jpg?v=1485541580',
              }, {
                id: 2,
                name: 'TC 2016 Red SS',
                description: 'VC Ultimate\'s fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
                price: 74.00,
                img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_red_SS_front_grande.jpg?v=1468602448',
              }, {
                id: 3,
                name: 'TC 2016 Dark SS',
                description: 'VC Ultimate\'s fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
                price: 35.99,
                img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_SS_front_grande.jpg?v=1460557226',
              }, {
                id: 4,
                name: 'TC 2016 Light SS',
                description: 'Official replica of the 2016 Team Canada light playing jersey. VC spot sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
                price: 35.99,
                img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TCsample2_white_front_grande.jpg?v=1480111096',
              }, {
                id: 5,
                name: 'Goat Shorts',
                description: 'This just in... VC\'s NEW signature \'GOAT\' style athletic shorts now with pockets! Made with our FlexLight material.',
                price: 29.00,
                img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/MedGreyPockets_front_grande400x600_grande_888f95c1-0f4d-483f-938e-c686892a855a_grande.jpg?v=1454966549',
              }, {
                id: 6,
                name: 'Friction Gloves',
                description: 'This is the glove that started it all! Friction Gloves work great in every condition: dry, hot, rain, snow, you name it. They will help you maintain a firm grip on the disc whether you\'re catching or throwing. They eliminate slippage when the disc is wet, keep your hands warm in cold weather, and ease the sting of zippy throws. Whether your goal is to throw with more accuracy, catch tough discs, or just look fly, Frictions will help.  Frictions are not bulky or stiff like other gloves. They are tight fitting and, after a while, you\'ll forget they\'re even on!',
                price: 33.95,
                img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/Gloves_grande.jpg?v=1446586810',
              }, {
                id: 7,
                name: 'TC 2017 Trucker',
                description: 'Premium meshback cotton front trucker hat. Made by FlexFit, with the official embroidered patch of Team Canada 2017! 47% Cotton / 25% Polyester / 28% Nylon, contrast trucker mesh back, matching plastic snap, hard buckram, matching undervisor. One size fits all',
                price: 15.00,
                img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2017_Hat_Snapback_BlackWhite_grande.jpg?v=1485538793',
              }, {
                id: 8,
                name: 'VC Discraft Disc',
                description: 'Discraft 175 gram Ultrastar disc, hot stamped with the original VC logo.',
                price: 14.00,
                image: 'https://cdn.shopify.com/https://w<Card.Img variant="top" ww.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FDiscraft-Elite-Roach-Approach-Colors%2Fdp%2FB01BFWTCYG&psig=AOvVaw0umo1P_XoIiEot46Jpzm8V&ust=1573553747996000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDx4tf24eUCFQAAAAAdAAAAABADs/files/1/0340/2849/products/Disc_VC_OG_grande_grande_cc0c1695-4247-426a-bd6c-5821da4e42da_grande.png?v=1485469652',
              },
        ]
         return(
             <div>
                     <h1>List Of Avalaible Products</h1><hr/>
                 {
                 products.map(item =>(
                     <div>
                     <Product   name={item.name} price={item.price} key={item.id} />
                     <Display  description={item.description} name={item.name} price={item.price} key={item.id} />
                     </div>
                 ))
                  }
             </div>
         );
     }
 }