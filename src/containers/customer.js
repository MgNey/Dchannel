import React, { Component } from 'react';
import { NavLink,BrowserRouter as Router, Route} from 'react-router-dom';
import CustomerInfo from './../containers/customer/customerInfo';
import CustomerForm from './../containers/customer/customerNew';
import CustomerInfoDetail from './../containers/customer/detail';

class Customers extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div  className="navbar navbar-expand-lg navbar-light bg-header border-bottom">
                        <p className="" id="menu-toggle">Order</p>
                    </div>
                    <div className="container-fluid">
                        <div className="dchannel-main">
                            <div className="dchannel-container">
                                <Route exact path="/dashboard/customers" component={CustomerInfo}/>
                                <Route exact path="/dashboard/customers/new" component={CustomerForm}/>
                                <Route exact path="/dashboard/customers/detail" component={CustomerInfoDetail}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
export default Customers;
