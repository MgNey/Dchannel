import React , { Component } from 'react';
import './../index.css';
import { NavLink } from 'react-router-dom';
import dchannel from "../img/dchannel.jpg";
class Menu extends Component {
    render() {
        return(
            <div className="border-right bg-black dchannel-sidebar" id="sidebar-wrapper">
                <div className="menu-logo">
                    <img src={dchannel} alt="dchannel"/>
                </div>
                <div className="list-group">
                    <NavLink to="/dashboard/order" activeClassName="activeme">Orders</NavLink>
                    <NavLink to="/dashboard/product" activeClassName="activeme">Products</NavLink>
                    <NavLink to="/dashboard/customers" activeClassName="activeme">Customers</NavLink>
                    <NavLink to="/dashboard/rule" activeClassName="activeme">Rule</NavLink>
                    <NavLink to="/login" activeClassName="activeme">Logout</NavLink>
                </div>
            </div>
        );
    }
}
export default Menu;
