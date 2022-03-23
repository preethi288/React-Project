import { ADD_ITEM } from "./CartType";
import { REMOVE_ITEM } from "./CartType";

export const addItems = (product) => (dispatch, getState) => {

  const cartItems = getState().cartreducer.cartItems.slice();

  let alreadyExist = false;
  cartItems.forEach((x) => {
    if (x.id === product.id) {
      alreadyExist = true;
      x.qty++;
    }
  });
  if (!alreadyExist) {
    cartItems.push({ ...product, qty: 1 });
  }

  dispatch({
    type: ADD_ITEM,
    payload: { cartItems },
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeItems = (product) => (dispatch, getState) => {

  let cartItems = getState().cartreducer.cartItems.slice();

  cartItems.forEach((x) => {
    if (x.id === product.id && x.qty > 1) {
      x.qty--;
    } 

    else if (x.id===product.id && x.qty === 1) {
      let newarr = cartItems.filter((x) => x.id !== product.id);
      cartItems = newarr;
    }

  });

  dispatch({
    type: REMOVE_ITEM,
    payload: { cartItems },
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
};
