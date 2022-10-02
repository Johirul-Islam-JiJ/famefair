import {
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAILED
} from '../types';

const initialState = {
    loading: false,
    orders: [],
    singleOrder: {},
    error: "",
}

export default function (state = initialState, action) {
    switch (action.type) {

        case GET_ORDERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload,
                error: false
            }
        case GET_ORDERS_FAILED:
            return {
                ...state,
                loading: false,
                orders: [],
                error: action.payload
            }

        default:
            return state

    }
}