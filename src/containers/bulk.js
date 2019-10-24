import React , { Component } from 'react';

class Bulk
    extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg navbar-light bg-header border-bottom">
                    <p className="" id="menu-toggle">Bulk</p>
                </div>
                <div className="container-fluid">
                    <div className="dchannel-main">
                        {/*<div className="rp_wcdpd_tabs_container nav-tab-wrapper">*/}
                        {/*    <a className="nav-tab nav-tab-active" href="#">Active</a>*/}
                        {/*    <a className="nav-tab " href="#">Inactive</a>*/}
                        {/*    <a className="nav-tab " href="#">New</a>*/}
                        {/*</div>*/}
                        <div className="dchannel-container">
                            <div className="dchannel-content">
                                <div style={{ padding: "10px"}}>
                                    <div>
                                        <label>Select CSV with drug item</label>
                                        <div className="">
                                            <input type="file" className="csv-input" accept=".csv, text/csv"/>
                                        </div>
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
export default Bulk;
