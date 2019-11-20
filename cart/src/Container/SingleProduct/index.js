import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../../Component/Head';
import Image from 'react-bootstrap/Image';
import Base from '../../Component/Button';
import { Link } from 'react-router-dom';
import './style.css';

export default class SingleProduct extends Component {
    render() {
        const data = this.props.location.aboutProps;
        return(
            <div>
                <Head/>
                <div className="container row main_container">
                    <div className="col-3"></div>
                    <div className="col">
                        <Image src={data.imgpath} thumbnail/>
                    </div>
                    <div className="col">
                        <h2>{data.imgname}</h2>
                        <h3>Price: <span className="text-danger">{data.imgprice}</span></h3>
                        <label>Quantity: </label> <input type="number"/><br/>
                        <Base variant="warning" text="Add to Cart" />
                        <Link to={'/pay'}><Base variant="success" text="Buy now"/></Link>
                    </div>
                </div>
            </div>
        );
    }
}