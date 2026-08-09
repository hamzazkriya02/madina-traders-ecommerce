"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/data/products";
import { CheckCircle2 } from "lucide-react";

export default function Checkout(){
  const {cart,total,clearCart} = useCart();
  const [done,setDone]=useState(false);
  const [form,setForm]=useState({name:"",phone:"",city:"",address:"",notes:""});
  const submit=(e)=>{e.preventDefault(); if(!cart.length)return; setDone(true); clearCart();};
  if(done) return <><Navbar/><main className="simple-page"><div className="success-box"><CheckCircle2 size={54}/><h1>Order request received</h1><p>This demo checkout stores no payment information. Madina Traders can confirm stock, delivery and payment directly with the customer.</p><a className="btn btn-green" href="/">Back to Home</a></div></main></>
  return <><Navbar/><main className="simple-page"><h1>Checkout</h1><div className="checkout-grid">
    <form className="checkout-form" onSubmit={submit}>
      <h2>Delivery Details</h2>
      <label>Full Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label>
      <label>Phone / WhatsApp<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/></label>
      <label>City<input required value={form.city} onChange={e=>setForm({...form,city:e.target.value})}/></label>
      <label>Complete Address<textarea required value={form.address} onChange={e=>setForm({...form,address:e.target.value})}/></label>
      <label>Order Notes<textarea value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})}/></label>
      <button className="btn btn-green full" disabled={!cart.length}>Place Order Request</button>
    </form>
    <aside className="summary"><h2>Your Order</h2>{cart.map(x=><div key={x.id}><span>{x.qty}× {x.name}</span><b>Rs. {formatPrice(x.qty*x.price)}</b></div>)}<hr/><div className="total"><span>Total</span><b>Rs. {formatPrice(total)}</b></div><small>Payment and delivery method can be confirmed after the order request.</small></aside>
  </div></main></>
}
