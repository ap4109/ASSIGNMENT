import { ADD_TO_CART, REMOVE_FROM_CART ,GET_PRODUCTS} from "./constants";
import { BASE_URL } from "../utils/API";
import axios from "axios";
export const addToCart=payload=>({
    type:ADD_TO_CART,
    payload:payload
})


export const removeFromCart=payload=>({
    type:REMOVE_FROM_CART,
    payload:payload
})

export const getProducts=()=>{  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);

      if (res.data) {
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data,
        });
      } else {
        alert('Unable to fetch');
      }
    };
   
  } catch (error) {
   
  }}
