import React , { Component } from 'react';
import { NavLink,BrowserRouter as Router,Route } from 'react-router-dom';
import Active from './../containers/product/active';
import Allproduct from './../containers/product/Allproduct';
import ProductNew from './../containers/product/productNew';
import ItemDetail from './../containers/product/detail';
class Product extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-header border-bottom">
                        <p className="" id="menu-toggle">Product</p>
                    </nav>
                    <div className="container-fluid">
                        <div className="dchannel-main">
                            <div className="rp_wcdpd_tabs_container nav-tab-wrapper">
                                <NavLink exact to="/dashboard/product" className="nav-tab" activeClassName="tab-active">Active</NavLink>
                                <NavLink to="/dashboard/product/all" className="nav-tab" activeClassName="tab-active">All</NavLink>
                            </div>
                            <div className="dchannel-container">
                                <Route exact path="/dashboard/product" component={Active}/>
                                <Route path="/dashboard/product/all" component={Allproduct}/>
                                <Route path="/dashboard/productnew" component={ProductNew}/>
                                <Route path="/dashboard/product/product-detail" component={ItemDetail}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
export default Product;
