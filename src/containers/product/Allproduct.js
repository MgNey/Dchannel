import React,{ Component } from 'react';
import {NavLink} from "react-router-dom";

class Allproduct extends Component {
    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        return (
            <div>
                <div className="pro-header">
                    <div className="p-2 mr-auto">
                        <div className="input-group md-form form-sm form-2 pl-0">
                            <input className="form-control my-0 py-1 red-border" type="text" placeholder="Search"
                                   aria-label="Search"/>
                        </div>
                    </div>
                    <div className="p-2">
                        <button className="btn btn-gray">
                            <NavLink to="/dashboard/productnew" activeClassName="tab-active">New</NavLink>
                        </button>
                    </div>
                </div>
                <div className="dchannel-content">
                    <div style={{ padding: "10px"}}>
                        <table style={{ width: "100%"}}>
                            <tr>
                                <th>Stock Code</th>
                                <th>
                                    <select name="" id="">
                                        <option value="">All Brand</option>
                                        <option value="">Royal</option>
                                        <option value="">Bella</option>
                                    </select>
                                </th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Stock</th>
                            </tr>
                            <tr onClick={() => this.nextPath('/dashboard/product/product-detail') }>
                                <td>3242</td>
                                <td>Bella</td>
                                <td>Cream</td>
                                <td>8000</td>
                                <td>2</td>
                            </tr>
                            <tr onClick={() => this.nextPath('/dashboard/product/product-detail') }>
                                <td>3242</td>
                                <td>Royal</td>
                                <td>Cream</td>
                                <td>8000</td>
                                <td>4</td>
                            </tr>
                            <tr onClick={() => this.nextPath('/dashboard/product/product-detail') }>
                                <td>3242</td>
                                <td>Royal</td>
                                <td>Cream</td>
                                <td>8000</td>
                                <td>5</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Allproduct;
