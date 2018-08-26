import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DisplayCustomer from './DisplayCustomer'
import { fetchCustomers, deleteCustomer } from '../actions/actions'

class CustomerList extends React.Component {


    componentWillMount() {
        this.props.fetchCustomers();
    }

    render() {
        const CustomerLists = this.props.customers.map(customer => (
            <DisplayCustomer key={customer.id}
                id={customer.id}
                name={customer.name}
                addressLine1={customer.addressLine1}
                addressLine2={customer.addressLine2}
                postCode={customer.postCode}
                age={customer.age}>
            </DisplayCustomer>
        ))
        return (
            <div>
                <h1>Customers</h1>
                {CustomerLists}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    customers: state.customers.items
})

export default connect(mapStateToProps, { fetchCustomers })(CustomerList)