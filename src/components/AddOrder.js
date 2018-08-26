// import React from 'react';

// export default class AddCustomer extends React.Component {

//     componentWillMount() {
//         this.state = {
//             customerId: this.props.customerId,
//             orderName: "",
//         }
//     }

//     captureOrderName(e) {
//         this.setState({ orderName: e.target.value })
//     }


//     render() {

//         return (
           
//                 <form>
                   
//                             <label for="customerId">Customer Id</label>
                      
//                             <input type="number" value={this.state.customerId} readOnly></input><br/>
                     
                    
//                             <label for="orderName">Order Name</label>
                       

//                             <input type="text" value={this.state.orderName} onChange={this.captureOrderName.bind(this)}></input> <br />
                  
                   
//                     <button type="submit" onClick={() => {
//                         this.props.orderClick(this.state.customerId, this.state.orderName)
//                     }} id="save-c">Add Order</button>
//                 </form>
           
//         )
//     }

// }