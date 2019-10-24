import React , { Component } from 'react';
import { NavLink,BrowserRouter as Router,Route } from 'react-router-dom';
import List from './../containers/discount/list';
import New from './../containers/discount/new';

class Rule extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="navbar navbar-expand-lg navbar-light bg-header border-bottom">
                        <p className="" id="menu-toggle">Rule</p>
                    </div>
                    <div className="container-fluid">
                        <div className="dchannel-main">
                            <div className="rp_wcdpd_tabs_container nav-tab-wrapper">
                                <NavLink exact to="/dashboard/rule" className="nav-tab" activeClassName="tab-active">List</NavLink>
                            </div>
                            <div className="dchannel-container">
                                    <Route exact path="/dashboard/rule" component={List}/>
                                    <Route path="/dashboard/rule/new" component={New}/>
                            </div>

                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
export default Rule;
