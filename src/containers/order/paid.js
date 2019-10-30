import React ,{ Component } from 'react';

class Paid extends Component{

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
                </div>
                <div className="dchannel-content">
                    <div style={{ padding: "10px"}}>
                        <table style={{ width: "100%"}}>
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Buyer Name</th>
                                <th>
                                    <select name="" id="">
                                        <option value="">Cash</option>
                                        <option value="">Credit</option>
                                    </select>
                                </th>
                                <th>
                                    <select name="" id="">
                                        <option value="">Pazundaung</option>
                                        <option value="">Kyaukdata</option>
                                    </select>
                                </th>
                                <th>Order Ref No</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr onClick={() => this.nextPath('/dashboard/order/paid-detail') }>
                                <td>04-09-2019</td>
                                <td>Mya Mya</td>
                                <td>cash</td>
                                <td>Kyaukdata</td>
                                <td>1</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}

export default Paid;
