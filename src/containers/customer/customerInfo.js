import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class CustomerInfo extends Component{
    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        return(
            <div>
                <div className="pro-header">
                    <div className="p-2 ml-auto">
                        <button className="btn btn-gray">
                            <NavLink to="/dashboard/customers/new">New</NavLink>
                        </button>
                    </div>
                </div>
                <div className="dchannel-content" id="deliver">
                    <div style={{ padding: "10px"}}>
                        <table style={{ width: "100%"}}>
                            <thead>
                                <tr>
                                    <th>Phone No</th>
                                    <th>Email</th>
                                    <th>Shop Name</th>
                                    <th>Address</th>
                                    <th>
                                        <select name="" id="">
                                            <option value="">Cash</option>
                                            <option value="">Credit</option>
                                            <option value="">Consignment</option>
                                        </select>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr onClick={() => this.nextPath('/dashboard/customers/detail') }>
                                    <td>0912345678</td>
                                    <td>admin@gmail.com</td>
                                    <td>D Channel Shop</td>
                                    <td>Yangon</td>
                                    <td>Cash</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        );
    }
}
export default CustomerInfo;
