"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/data/products";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export default function CartPage(){
  const {cart,updateQty,removeFromCart,total} = useCart();
  return <>
    <Navbar/>
    <main className="simple-page">
      <div className="page-title"><ShoppingBag/><div><h1>Your Cart</h1><p>Review quantities before checkout.</p></div></div>
      {!cart.length ? <div className="empty-state"><h2>Your cart is empty</h2><p>Add products from the store to continue.</p><Link href="/shop" className="btn btn-green">Browse Products</Link></div> :
      <div className="cart-layout">
        <div className="cart-items">{cart.map(item=><div className="cart-item" key={item.id}>
          <div><span className="category-pill">{item.category}</span><h3>{item.name}</h3><p>{item.packSize} • {item.technical}</p></div>
          <div className="cart-controls"><div className="qty-control"><button onClick={()=>updateQty(item.id,item.qty-1)}><Minus size={15}/></button><b>{item.qty}</b><button onClick={()=>updateQty(item.id,item.qty+1)}><Plus size={15}/></button></div><strong>Rs. {formatPrice(item.price*item.qty)}</strong><button className="trash" onClick={()=>removeFromCart(item.id)}><Trash2 size={18}/></button></div>
        </div>)}</div>
        <aside className="summary"><h2>Order Summary</h2><div><span>Subtotal</span><b>Rs. {formatPrice(total)}</b></div><div><span>Delivery</span><b>Calculated on confirmation</b></div><hr/><div className="total"><span>Total</span><b>Rs. {formatPrice(total)}</b></div><Link href="/checkout" className="btn btn-green full">Proceed to Checkout</Link><Link href="/shop" className="text-link center">Continue shopping</Link></aside>
      </div>}
    </main>
  </>
}
