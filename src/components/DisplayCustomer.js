import React from 'react'
import { connect } from 'react-redux'
import { deleteCustomer, updateCustomer } from '../actions/actions'

class DisplayCustomer extends React.Component {
    componentWillMount() {
        this.state = {
            showUpdate: false,
            name: this.props.name,
            addressLine1: this.props.addressLine1,
            addressLine2: this.props.addressLine2,
            postCode: this.props.postCode,
            age: this.props.age
        }
        this.showUpdateDetails = this.showUpdateDetails.bind(this)
        this.readName = this.readName.bind(this)
        this.readAddressLine1 = this.readAddressLine1.bind(this)
        this.readAddressLine2 = this.readAddressLine2.bind(this)
        this.readPostcode = this.readPostcode.bind(this)
        this.readAge = this.readAge.bind(this)
        this.update = this.update.bind(this)
    }

    readName(e) {
        console.log(e.target.value)
        this.setState({ name: e.target.value })

    }
    readAddressLine1(e) {
        console.log(e.target.value)
        this.setState({ addressLine1: e.target.value })
    }
    readAddressLine2(e) {
        console.log(e.target.value)
        this.setState({ addressLine2: e.target.value })
    }
    readPostcode(e) {
        console.log(e.target.value)
        this.setState({ postCode: e.target.value })
    }
    readAge(e) {
        console.log(e.target.value)
        this.setState({ age: e.target.value })
    }

    update(event) {
        console.log("refresh");
        const customer = {
            id: this.props.id,
            name: this.state.name,
            addressLine1: this.state.addressLine1,
            addressLine2: this.state.addressLine2,
            postCode: this.state.postCode,
            age: this.state.age
        }

        this.props.updateCustomer(customer)

        this.showUpdateDetails()
    }

    showUpdateDetails = () => {
        console.log("open update")
        const temp = this.state.showUpdate
        this.setState({ showUpdate: !temp })
    }

    render() {
        return (

            <div>

                <table border="1px">
                    {/* <table border='1px'>
        <thead>
                        <tr>
                            <td>Name</td>
                            <td>Address Line1</td>
                            <td>Address Line2</td>
                            <td>Post Code</td>
                            <td>Age</td>
                        </tr>
                    </thead>
                    </table> */}
                    <tbody>
                        <tr>
                            <td>{this.props.name}</td>
                            <td>{this.props.addressLine1}</td>
                            <td>{this.props.addressLine2}</td>
                            <td>{this.props.postCode}</td>
                            <td>{this.props.age}</td>
                            <td><button onClick={() => { this.props.deleteCustomer(this.props.id) }}>Delete</button></td>
                            <td><button onClick={this.showUpdateDetails}>Update</button></td>
                        </tr>
                    </tbody>
                </table>


                {this.state.showUpdate === true ?
                    <div>
                        <div>
                            <label>
                                Name: </label><br />
                            <input type="text" value={this.state.name} onChange={this.readName} /><br />
                        </div>
                        <div>
                            <label>AddressLine1: </label><br />
                            <input type="text" value={this.state.addressLine1} onChange={this.readAddressLine1} /><br />
                        </div>
                        <div>
                            <label>AddressLine2:</label><br />
                            <input type="text" value={this.state.addressLine2} onChange={this.readAddressLine2} /><br />
                        </div>
                        <div>
                            <label>Post Code: </label><br />
                            <input type="text" value={this.state.postCode} onChange={this.readPostcode} /><br />
                        </div>
                        <div>
                            <label>Age: </label><br />
                            <input type="text" value={this.state.age} onChange={this.readAge} /><br />
                        </div>
                        <button type="submit"
                            className="btn btn-primary"
                            onClick={this.update}>Save</button>

                    </div> : null
                }
            </div>

        );
    }
}

const mapStateToProps = state => ({
    customers: state.customers.items,
    customer: state.customers.item
})



export default connect(mapStateToProps, { deleteCustomer, updateCustomer })(DisplayCustomer)