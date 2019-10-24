import React ,{ Component } from 'react';

class Paid extends Component{
    render() {
        return(
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
                            <th>Order Ref No</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>04-09-2019</td>
                            <td>Mya Mya</td>
                            <td>cash</td>
                            <td>1</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Paid;
