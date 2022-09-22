import React, { createContext, useContext, useState, ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartContextProviderProps = {
  children?: ReactNode;
};

type CartContextType = {
  getItemQuantity: (id: string) => number;
  setItemToCart: (id: string, date: string, quantity: number) => void;
  removeFromCart: (position: number) => void;
  cartItems: Ticket[];
  openCart: () => void;
  closeCart: () => void;
  cartQuantity: number;
  isOpen: boolean;
};

type Ticket = {
  id: string;
  quantity: number;
  date: string;
};

export const CartContext = createContext({} as CartContextType);

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<Ticket[]>("cart", []);

  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function setItemToCart(id: string, date: string, quantity: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, date, quantity }];
      } else if (
        currItems.find((item) => item.id === id && item.date === date) == null
      ) {
        return [...currItems, { id, date, quantity }];
      } else {
        return currItems.map((item) => {
          if (item.id === id && item.date === date) {
            return { ...item, quantity: item.quantity + quantity };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(position: number) {
    setCartItems((currItems) => {
      return currItems.filter((i, index) => index !== position);
    });
  }

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        setItemToCart,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
        isOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};
