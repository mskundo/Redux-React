import { FETCH_CUSTOMER, NEW_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER } from './types'

export const fetchCustomers = () => dispatch => {
    console.log("featching")
    fetch('https://customer-service-madhu.cfapps.io/customers')
        .then(res => res.json())
        .then(customers => dispatch({
            type: FETCH_CUSTOMER,
            payload: customers
        }));
}

export const addCustomer = (customer) => dispatch => {
    console.log("action ed")
    fetch('https://customer-service-madhu.cfapps.io/customers', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(customer)
    })
        // .then((res) => res.json())
        .then(customer => dispatch({
            type: NEW_CUSTOMER,
            payload: customer
        }));
}

export const deleteCustomer = (id) => dispatch => {
    console.log("deleteing")
    fetch('https://customer-service-madhu.cfapps.io/customers/'+id,{
        method: 'DELETE'
    })
        .then(res => dispatch(
            fetchCustomers()
        ))
        .then(customers => dispatch({
            type: DELETE_CUSTOMER,
            payload: customers
        }));
}

export const updateCustomer = (customer) => dispatch => {
    console.log("update")
    fetch('https://customer-service-madhu.cfapps.io/customers', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(customer)
    })
        // .then((res) => res.json())
        .then(customer => dispatch({
            type: UPDATE_CUSTOMER,
            payload: customer
        }));
}