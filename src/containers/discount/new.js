import React, { Component } from 'react';

class New extends Component{
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
                                    <input type="text" style={{ width: "100%"}}/>
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
                                <input type="number"/>
                            </div>
                        </div>
                    </div>
                    <div className="row di-mg">
                        <div className="col-md-8">
                            <div className="rule-lable">
                                <lable>Discount</lable>
                            </div>
                            <div className="rul-dis">
                                <input type="number"/>
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
                                <input type="text"/>
                                <br/>
                                <label>End</label>
                                <input type="text"/>
                            </div>
                            <br/>
                        </div>
                    </div>
                    <div className="row di-mg">
                        <div className="col-md-6 text-right">
                            <button className="btn btn-gray">SAVE</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default New;
