import React,{ Component } from 'react';

class ProductNew extends Component {
    render() {
        return(
            <div className="dchannel-content productnew">
                <div style={{ padding: "10px"}}>
                    <div className="row di-mg">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-2">
                                    <label>Stock</label>
                                </div>
                                <div className="col-md-10">
                                    <input type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row di-mg">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-2">
                                    <label>Brand</label>
                                </div>
                                <div className="col-md-10">
                                    <input type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row di-mg">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-2">
                                    <label>Type</label>
                                </div>
                                <div className="col-md-10">
                                    <input type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row di-mg">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-2">
                                    <label>Price</label>
                                </div>
                                <div className="col-md-10">
                                    <input type="text"/>
                                </div>
                            </div>
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
export default ProductNew;
