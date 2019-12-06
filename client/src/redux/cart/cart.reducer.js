import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";
const INIT_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };

    case CartActionTypes.CLEAR_CART: {
      return {
        ...state,
        cartItems: []
      };
    }

    default:
      return state;
  }
};
export default cartReducer;
