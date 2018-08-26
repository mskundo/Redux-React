import { FETCH_CUSTOMER, NEW_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER } from '../actions/types'

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CUSTOMER:
            console.log("reducer")
            return {
                ...state,
                items: action.payload
            }
        case NEW_CUSTOMER:
            console.log("added")
            return {
                ...state,
                item: action.payload
            }
        case DELETE_CUSTOMER:
            console.log("delete")
            return {
                ...state
                //items: action.payload
            }
        case UPDATE_CUSTOMER:
            console.log("update in reducer")
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}