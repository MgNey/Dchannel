import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

class List extends Component{

    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        return(
            <div>
                <div className="pro-header">
                    <div className="p-2 mr-auto">
                        <div className="input-group md-form form-sm form-2 pl-0">
                            <input className="form-control my-0 py-1 red-border" type="text" placeholder="Search"
                                   aria-label="Search"/>
                        </div>
                    </div>
                    <div className="p-2 ml-auto">
                        <button className="btn btn-gray">
                            <NavLink to="/dashboard/rule/new" activeClassName="tab-active">New</NavLink>
                        </button>
                    </div>
                </div>
                <div className="dchannel-content">
                    <div style={{ padding: "10px"}}>
                        <table style={{ width: "100%"}}>
                            <tr>
                                <th>Item</th>
                                <th>Minimum</th>
                                <th>Percentage</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                            </tr>
                            <tr onClick={() => this.nextPath('/dashboard/rule/edit') }>
                                <td>Make Up</td>
                                <td>3</td>
                                <td>10 </td>
                                <td>10-10-2019</td>
                                <td>22-10-2019</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}
export default List;
