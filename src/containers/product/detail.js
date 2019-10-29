import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

class ItemDetail extends Component{
    render() {
        return(
            <div>
                <div className="dchannel-content" id="deliver">
                    <div style={{ padding: "10px"}}>
                        <div className="row di-mg">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label>Stock Code</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text" value="3425"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row di-mg">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label>Brand</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text" value="Bella"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row di-mg">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label>Type</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text" value="Cream"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row di-mg">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label>Price</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text" value="8000"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row di-mg">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label>Stock</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text" value="2"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row di-mg">
                        <div className="col-md-6 text-right">
                            <button className="btn btn-gray">
                                <NavLink exact to="/dashboard/product">Update</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default ItemDetail;
