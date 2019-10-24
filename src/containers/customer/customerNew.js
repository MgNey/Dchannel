import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

class CustomerForm extends Component{
    render() {
        return(
            <div>
                <div className="pro-header">
                    <div className="p-2 mr-auto">
                        <button className="btn btn-gray">
                            <NavLink to="/dashboard/customers" activeClassName="tab-active">Back</NavLink>
                        </button>
                    </div>
                    <div className="p-2 ml-auto">
                        <button className="btn btn-gray">
                            <NavLink to="/dashboard/customers" activeClassName="tab-active">Save</NavLink>
                        </button>
                    </div>
                </div>
                <div className="dchannel-content" id="deliver">
                    <div style={{ padding: "10px"}}>
                        <div className="row di-mg">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label>Phone No</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row di-mg">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row di-mg">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label>Shop Name</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row di-mg">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label>Address</label>
                                    </div>
                                    <div className="col-md-9">
                                        <textarea name="" id=""  cols={22
                                        }></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row di-mg">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label>Payment Term</label>
                                    </div>
                                    <div className="col-md-9">
                                        <select name="" id="" style={{ width: "180px"}}>
                                            <option value="">Cash</option>
                                            <option value="">Credit</option>
                                            <option value="">Consignment</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default CustomerForm;
