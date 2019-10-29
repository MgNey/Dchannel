import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class RuleEdit extends Component{
    render() {
        return(
            <div className="dchannel-content">
                <div className="discount-new">
                    <div className="row di-mg">
                        <div className="col-md-8">
                            <div className="align-top rule-lable">
                                <lable>Product</lable>
                            </div>
                            <div className="rul-prd">
                                <div className="">
                                    <input type="text" style={{ width: "100%"}} value="Make Up"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row di-mg">
                        <div className="col-md-6">
                            <div className="rule-lable">
                                <lable>Minimun</lable>
                            </div>
                            <div className="rul-min">
                                <select >
                                    <option value="1" selected>Qty</option>
                                    <option value="2">Amount</option>
                                </select>
                            </div>
                            <div className="rul-min-num">
                                <input type="number" value="10"/>
                            </div>
                        </div>
                    </div>
                    <div className="row di-mg">
                        <div className="col-md-8">
                            <div className="rule-lable">
                                <lable>Discount</lable>
                            </div>
                            <div className="rul-dis">
                                <input type="number" value="20"/>
                                <span>%</span>
                            </div>
                        </div>
                    </div>
                    <div className="row di-mg">
                        <div className="col-md-8">
                            <div className="rule-lable align-top">
                                <lable>Time Period</lable>
                            </div>
                            <div className="rul-date">
                                <label>Start</label>
                                <input type="text" value="10-10-2019"/>
                                <br/>
                                <label>End</label>
                                <input type="text" value="22-10-2019"/>
                            </div>
                            <br/>
                        </div>
                    </div>
                    <div className="row di-mg">
                        <div className="col-md-6 text-right">
                            <button className="btn btn-gray">
                                <NavLink exact to="/dashboard/rule">Update</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default RuleEdit;
