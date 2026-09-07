"use client";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/data/products";
import { useCart } from "./CartProvider";

export default function ProductBuyBox({ product }) {
  const [qty,setQty] = useState(1);
  const { addToCart } = useCart();
  return (
    <div className="buy-box">
      <div className="price">Rs. {formatPrice(product.price)}</div>
      <div className="qty-row"><span>Quantity</span><div><button onClick={()=>setQty(Math.max(1,qty-1))}>−</button><b>{qty}</b><button onClick={()=>setQty(qty+1)}>+</button></div></div>
      <button className="primary-cart" onClick={()=>addToCart(product,qty)}><ShoppingCart size={19}/> Add {qty} to Cart</button>
      <a className="whatsapp-order" href={`https://wa.me/923019206314?text=${encodeURIComponent(`Assalamualaikum, I want ${qty} x ${product.name} (${product.packSize}).`)}`} target="_blank" rel="noreferrer">Order / Ask on WhatsApp</a>
    </div>
  );
}
