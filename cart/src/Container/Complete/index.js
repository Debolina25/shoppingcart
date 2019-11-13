import React,{Component} from 'react';
import Base from '../../Component/Button';
import { Link } from 'react-router-dom';
export default class Completemsg extends Component{
    render(){
        return(
            <div>
            <div className=" container">
                <div className="card " style={{ border:"1px solid black",marginTop:"10px", height:"200px"}}>
                   <div className="card-body">
                       <h2 className="card-text text-info">Your Order is placed Successfully.</h2>
                       <h4 className="card-text text-success">You will get a mail soon in your given email-id.</h4>
                       <h4 className="card-text">Thank you for Shopping from our Website.</h4>
                    </div>
                </div>
            </div>
            <br/>
            <Link to={'/'}> <Base variant="success" text="Back" /></Link>
            </div>
        );
    }
}