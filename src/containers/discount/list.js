import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

class List extends Component{
    render() {
        return(
            <div>
                <div className="pro-header">
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
                            <tr>
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
