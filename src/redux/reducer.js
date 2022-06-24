import { ADD_TO_CART, REMOVE_FROM_CART ,GET_PRODUCTS} from "./constants";


const initialState = {
  cartItems: [],
  products:[],
  loading: false,

}

const cartItemsReducer = (state = initialState, action) => {
 

switch (action.type) {
  case GET_PRODUCTS:
    return {
      ...state,
      products: action.payload,
      // loading:true
    }

    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems,action.payload]
      }
    case REMOVE_FROM_CART:
      return {
                ...state,
        cartItems:[...state.cartItems.filter((item,index) => index !== state.cartItems.findIndex(x=>x.ItemId==action.payload.ItemId) )]
              }
    default:
      return state
  }

}

export default cartItemsReducer