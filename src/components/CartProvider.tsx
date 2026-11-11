"use client";

import { createContext, useContext, useState } from "react";

type CartState = { inCart: boolean; toggle: () => void };

const CartContext = createContext<CartState>({ inCart: false, toggle: () => {} });

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [inCart, setInCart] = useState(false);
  return (
    <CartContext.Provider value={{ inCart, toggle: () => setInCart((v) => !v) }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
