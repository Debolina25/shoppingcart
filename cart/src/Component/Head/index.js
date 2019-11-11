import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Head extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <h3 className="navbar-brand" >Debs Fashion</h3>
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link" to="/productlist">Productlist</Link>
                            <Link className="nav-item nav-link" to="/card">Card</Link>
                        </div>
                    </div>
                    </nav>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGiFtPRW-hDG-DJJ5fMb4e024jyQkAf2-HjAoDZJ9nlRAF-9Wk" rounded style={{marginTop:"5px",width:"1300px",height:"500px"}} />
                </div>
        );
    }
}