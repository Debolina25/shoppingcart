import React, { Component } from 'react';
import Product from './Product';
 export default  class Productitem extends Component {
    constructor(props) {
        super(props)
        this.renderProductItems = this.renderProductItems.bind(this);
    }
    renderProductItems(item) {
        return (
            <div className="col-md-6" key={item.id}>
            <Product
                item={item}
                
            ></Product>
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.props.items.map(this.renderProductItems)}
            </div>
        );
    }
}