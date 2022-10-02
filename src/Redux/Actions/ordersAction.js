import {
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAILED
} from '../types';
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';

// Orders get action
export const ordersList = () => {
    return async (dispatch) => {
        try {
            const header = {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }

            const user = JSON.parse(localStorage.getItem('user'))
            dispatch({ type: GET_ORDERS_REQUEST })
            const response = await axios.get(`${apiURL}user/orders/${user.id}/${user.email}`, header)
            dispatch({
                type: GET_ORDERS_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: GET_ORDERS_FAILED,
                payload: error.message
            })
        }
    }
}
