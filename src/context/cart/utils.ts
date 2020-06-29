import { Variant, CartItem } from './CartProvider';

export const addItemToCart = (
  cartItems: CartItem[],
  cartItemToAdd: CartItem
) => {
  const isThereCartItem = cartItems.find(
    cartItem => cartItem.shopifyId === cartItemToAdd.shopifyId
  );

  if (isThereCartItem) {
    return cartItems.map(cartItem =>
      cartItem.shopifyId === cartItemToAdd.shopifyId
        ? { ...cartItem, qty: cartItem.qty + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, qty: 1 }];
};

export const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const existingCartItem = cartItems.find(
    item => item.shopifyId === cartItemToRemove.shopifyId
  );

  if (existingCartItem?.qty === 1) {
    return cartItems.filter(
      item => item.shopifyId !== cartItemToRemove.shopifyId
    );
  }

  return cartItems.map(item =>
    item.shopifyId === cartItemToRemove.shopifyId
      ? { ...item, qty: item.qty - 1 }
      : item
  );
};

export const countCartItems = (cartItems: CartItem[]) => {
  return cartItems.reduce((qty, item) => qty + item.qty, 0);
};
export const countCartTotalPricePerItem = (cartItems: CartItem[]) => {
  return cartItems.reduce((qty, item) => qty + item.qty * item.qty, 0);
};
