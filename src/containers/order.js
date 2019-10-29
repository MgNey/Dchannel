import React, { Component } from 'react';
import { NavLink,BrowserRouter as Router, Route} from 'react-router-dom';
import Open from './../containers/order/open';
import Deliver from './../containers/order/deliver';
import Paid from './../containers/order/paid';
import Details from './../containers/order/detail';
import Received from './../containers/order/received';
import DeliverDetail from './order/deliverdetail';
import ReceiveDetail from './order/receivedetail';
import PaidDetail from './order/paid-detail';

class Order extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div  className="navbar navbar-expand-lg navbar-light bg-header border-bottom">
                        <p className="" id="menu-toggle">Order</p>
                    </div>
                    <div className="container-fluid">
                        <div className="dchannel-main">
                            <div className="rp_wcdpd_tabs_container nav-tab-wrapper">
                                <NavLink exact to="/dashboard/order" className="nav-tab" activeClassName="order-active">Open</NavLink>
                                <NavLink to="/dashboard/order/deliver" className="nav-tab" activeClassName="order-active">Deliver</NavLink>
                                <NavLink to="/dashboard/order/received" className="nav-tab" activeClassName="order-active">Received</NavLink>
                                <NavLink to="/dashboard/order/paid" className="nav-tab" activeClassName="order-active">Paid</NavLink>
                            </div>
                            <div className="dchannel-container">
                                <Route exact path="/dashboard/order" component={Open}/>
                                <Route path="/dashboard/order/deliver" component={Deliver}/>
                                <Route exact path="/dashboard/order/received" component={Received}/>
                                <Route path="/dashboard/order/paid" component={Paid}/>
                                <Route path="/dashboard/order/detail" component={Details}/>
                                <Route path="/dashboard/order/devilverdetail" component={DeliverDetail}/>
                                <Route path="/dashboard/order/received-detail" component={ReceiveDetail}/>
                                <Route path="/dashboard/order/paid-detail" component={PaidDetail}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
export default Order;
