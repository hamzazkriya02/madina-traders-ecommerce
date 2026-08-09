"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2 } from "lucide-react";

export default function Contact(){
 const [sent,setSent]=useState(false);
 return <><Navbar/><main><section className="page-hero"><span className="kicker light">CONTACT US</span><h1>Need product or order help?</h1><p>Send your question and Madina Traders can follow up with availability, pack and delivery details.</p></section><section className="contact-grid"><div className="contact-info"><h2>Talk to Madina Traders</h2><p><MapPin/> Bahawalpur, Punjab, Pakistan</p><p><Phone/> +92 300 0000000</p><p><Mail/> sales@madinatraders.pk</p><a href="https://wa.me/923000000000" target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp Support</a></div>{sent?<div className="success-box"><CheckCircle2 size={52}/><h2>Message prepared</h2><p>This frontend demo does not send email yet. Connect this form to your email/API when deploying the production site.</p><button className="btn btn-green" onClick={()=>setSent(false)}>Send another</button></div>:<form className="contact-form" onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Name<input required/></label><label>Phone / WhatsApp<input required/></label><label>Email<input type="email"/></label><label>Message<textarea required rows={6}/></label><button className="btn btn-green full">Submit Message</button></form>}</section></main></>
}
