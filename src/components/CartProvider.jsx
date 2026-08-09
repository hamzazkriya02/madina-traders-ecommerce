"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("madina-cart") || "[]");
      setCart(Array.isArray(saved) ? saved : []);
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem("madina-cart", JSON.stringify(cart));
  }, [cart, ready]);

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((x) => x.id === product.id);
      if (found) return prev.map((x) => x.id === product.id ? { ...x, qty: x.qty + qty } : x);
      return [...prev, { ...product, qty }];
    });
  };

  const updateQty = (id, qty) => setCart((prev) =>
    qty <= 0 ? prev.filter((x) => x.id !== id) : prev.map((x) => x.id === id ? { ...x, qty } : x)
  );
  const removeFromCart = (id) => setCart((prev) => prev.filter((x) => x.id !== id));
  const clearCart = () => setCart([]);

  const count = cart.reduce((n, x) => n + x.qty, 0);
  const total = cart.reduce((n, x) => n + x.price * x.qty, 0);

  const value = useMemo(() => ({ cart, addToCart, updateQty, removeFromCart, clearCart, count, total }), [cart, count, total]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
