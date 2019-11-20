import Image from 'react-bootstrap/Image';
import React, { Component } from 'react';
import Head from '../../Component/Head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Component/Footer';
export default class Main extends Component{
    render(){
        return(
            <div>
            <Head/>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGiFtPRW-hDG-DJJ5fMb4e024jyQkAf2-HjAoDZJ9nlRAF-9Wk" rounded style={{marginTop:"5px",width:"1300px",height:"500px"}} /> 
            <Footer/>
            </div>
        );
    }
}