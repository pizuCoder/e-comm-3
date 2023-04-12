// CartContext.js
import React, { createContext, useReducer, useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";

const crudLink =
  "https://crudcrud.com/api/54cbe4a7cb0c462f998a7d094ca02979/cart";

export const CartContext = createContext();

const initialState = {
  items: [],
  total: 0,
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  email: "",
  setEmail: () => {},
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
      const itemToRemove = state.items.find(
        (item) => item.id === itemIdToRemove
      );
      const updatedItemArray = state.items.filter(
        (item) => item.id !== itemIdToRemove
      );
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
  // const [cartData, setCartData] = useState([]);
  const initialToken = localStorage.getItem("token");
  
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;
  const [email, setEmail] = useState("");
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

  

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (userIsLoggedIn) {
      const loginTime = Date.now();
      localStorage.setItem("loginTime", loginTime);

      const checkInactive = () => {
        const currentTime = Date.now();
        const loginTime = localStorage.getItem("loginTime");
        const inactiveTime = currentTime - loginTime;
        const minutesInactive = Math.floor(inactiveTime / 1000 / 60);

        if (minutesInactive >= 5) {
          logoutHandler();
          window.location.href = "/logout"; // Redirect to the logout page
        }
      };

      const timer = setInterval(checkInactive, 1000);

      return () => clearInterval(timer);
    }
  }, [userIsLoggedIn]);

  const setEmailHandler = (email) => {
    setEmail(email);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    email,
    setEmail: setEmailHandler,
  };

  useEffect(() => {
    const postCartData = async (cartState, email) => {
      try {
        const response = await axios.post(crudLink, { email, cartState });
        // console.log(response);
        return response
      } catch (error) {
        console.error(error);
      }
    };
    if (cartState.items.length > 0) {
      postCartData(cartState, email);
    }
  }, [cartState, email]);

  const getCartData = async (email) => {
    try {
      const response = await axios.get(`${crudLink}?email=${email}`);
      console.log(response.data);
      console.log('current cart state: ', cartState.items)
      // setCartData(response.data);
      // console.log(response.data[response.data.length-1].cartState.items)
      // return response.data
    } catch (error) {
      console.error(error);
    }
  };

  if (contextValue.isLoggedIn) {
    getCartData(contextValue.email);
  }
  // console.log(contextValue.isLoggedIn)

  // console.log('email is ', contextValue.email)

  return (
    <CartContext.Provider
      value={{
        cartState,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        contextValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
