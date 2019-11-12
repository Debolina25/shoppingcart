import React,{Component} from 'react';
import Base from '../../Component/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
export default  class Pay extends Component {
    constructor(props) {
      super(props);
      this.state = {value: '',
                    val:'',
                    valuee:'',
                    valueee:'',
                    valueeee:'',
                    valueeeee:''
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleChange4 = this.handleChange4.bind(this);
      this.handleChange5 = this.handleChange5.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleChange1(event) {
        this.setState({val: event.target.val});
      }
      handleChange2(event) {
        this.setState({valuee: event.target.valuee});
      }
      handleChange3(event) {
        this.setState({valueee: event.target.valueee});
      }
      handleChange4(event) {
        this.setState({valueeee: event.target.valueeee});
      }
      handleChange5(event) {
        this.setState({valueeeee: event.target.valueeeee});
      }
     render() {
      return (
          <div>
              <h2>Please Fill this Things</h2>
              <form >
              <div className="main1">
                  <div className="d1">
                    <label>Name:</label>
                   </div>
                   <div className="d2">
                     <input type="text" value={this.state.value} onChange={this.handleChange} required />
                   </div>
              </div>
              <div className="main1">
                  <div className="d1">
                    <label>Email:</label>
                   </div>
                   <div className="d2">
                     <input type="email" valueeeee={this.state.valueeeee} onChange={this.handleChange5} required />
                   </div>
              </div>
              <div className="main1">
                   <div className="d1">
                    <label>Shipping Address:</label>
                   </div>
                   <div className="d2">
                     <input type="text"  val={this.state.val} onChange={this.handleChange1}  required/>
                   </div>
              </div>
              <div className="main1">
                   <div className="d1">
                    <label>Card Type:</label>
                   </div>
                   <div className="d2">
                      <select valueeee={this.state.valueeee} onChange={this.handleChange4}>
                        <option value=" ">select a card</option>
                        <option value="Debit">Debit</option>
                        <option value="Credit">Credit</option>
                       </select>
                   </div>
                </div>
              <div className="main1">
                  <div className="d1">
                      <label>Card-Holder Name:</label>
                  </div>
                  <div className="d2">
                      <input type="text"  valuee={this.state.valuee} onChange={this.handleChange2} required/>
                  </div>
              </div>
              <div className="main1">
                  <div className="d1">
                       <label>CVV:</label>
                  </div>
                  <div className="d2">
                       <input type="password" valueee={this.state.valueee} onChange={this.handleChange3} required/>
                  </div>
              </div>
              <Link to={'/complete'}><Base variant="primary" text="Submit" type="submit"/></Link>
        </form>
        </div>
      );
    }
  }