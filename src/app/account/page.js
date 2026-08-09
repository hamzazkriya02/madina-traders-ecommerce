"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { User, ShoppingBag, LogOut } from "lucide-react";

export default function Account(){
  const [user,setUser]=useState(null);
  useEffect(()=>{try{setUser(JSON.parse(localStorage.getItem("madina-user")||"null"))}catch{}},[]);
  const logout=()=>{localStorage.removeItem("madina-user");setUser(null)};
  return <><Navbar/><main className="simple-page">{!user?<div className="empty-state"><User size={42}/><h1>Customer Account</h1><p>Sign in or create an account to continue.</p><Link className="btn btn-green" href="/login">Sign In / Register</Link></div>:<div className="account-card"><div className="account-avatar"><User/></div><div><span className="kicker">CUSTOMER ACCOUNT</span><h1>{user.name}</h1><p>{user.email}</p></div><div className="account-actions"><Link href="/shop"><ShoppingBag/> Shop Products</Link><button onClick={logout}><LogOut/> Sign Out</button></div></div>}</main></>
}
