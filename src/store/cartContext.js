// CartContext.js
import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      const updatedItems = existingItem
        ? state.items.map((item) =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          )
        : [...state.items, { ...newItem, quantity: newItem.quantity }];
      const updatedTotal = state.total + newItem.price * newItem.quantity;
      return { items: updatedItems, total: updatedTotal };
    case "REMOVE_ITEM":
      const itemIdToRemove = action.payload;
      const itemToRemove = state.items.find((item) => item.id === itemIdToRemove);
      const updatedItemArray = state.items.filter((item) => item.id !== itemIdToRemove);
      const updatedCost =
        state.total - itemToRemove.price * itemToRemove.quantity;
      return { items: updatedItemArray, total: updatedCost };
    case "CLEAR_ITEMS":
      return initialState;
    case "UPDATE_QUANTITY":
      const { itemId, quantity } = action.payload;
      const updatedItemsArray = state.items.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      );
      return { ...state, items: updatedItemsArray };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_ITEMS" });
  };

  const updateQuantity = (itemId, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { itemId, quantity } });
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
