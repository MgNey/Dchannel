import React, { Component } from 'react';

class Deliver extends Component{

     render() {
         return(
             <div className="dchannel-content" id="deliver">
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
                             <th>Action</th>
                         </tr>
                         </thead>
                         <tbody>
                         <tr>
                             <td>04-09-2019</td>
                             <td>Mya Mya</td>
                             <td>cash</td>
                             <td>1</td>
                             <td><a href="">Delete</a></td>
                         </tr>
                         </tbody>
                     </table>
                 </div>
             </div>
         );
     }
}
export default Deliver;
