import React , { Component } from 'react';
import Menu from './../containers/menu';
import { Route } from "react-router-dom";
import Order from './../containers/order';
import Product from './../containers/product';
import Customers from './../containers/customer';
import Rule from './../containers/rule';

class Dashoboard extends Component {
    render() {
        return(
            <div className="d-flex " id="wrapper">
                    <Menu/>
                <div id="page-content-wrapper">
                    <Route path="/dashboard/order" component={Order}/>
                    <Route path="/dashboard/product" component={Product}/>
                    <Route path="/dashboard/customers" component={Customers}/>
                    <Route path="/dashboard/rule" component={Rule}/>
                </div>
            </div>
        );
    }
}
export default Dashoboard;
