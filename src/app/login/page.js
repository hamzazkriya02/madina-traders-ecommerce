"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { UserRound } from "lucide-react";

export default function Login(){
  const router=useRouter(); const [mode,setMode]=useState("login"); const [name,setName]=useState(""); const [email,setEmail]=useState("");
  const submit=(e)=>{e.preventDefault(); localStorage.setItem("madina-user",JSON.stringify({name:name||email.split("@")[0]||"Customer",email})); router.push("/account");}
  return <><Navbar/><main className="auth-page"><form className="auth-card" onSubmit={submit}><div className="auth-icon"><UserRound/></div><h1>{mode==="login"?"Welcome Back":"Create Customer Account"}</h1><p>{mode==="login"?"Sign in to view your local demo account.":"Create a simple local demo account for this frontend."}</p>{mode==="signup"&&<label>Name<input required value={name} onChange={e=>setName(e.target.value)}/></label>}<label>Email<input type="email" required value={email} onChange={e=>setEmail(e.target.value)}/></label><label>Password<input type="password" required minLength={6}/></label><button className="btn btn-green full">{mode==="login"?"Sign In":"Create Account"}</button><button type="button" className="switch-auth" onClick={()=>setMode(mode==="login"?"signup":"login")}>{mode==="login"?"New customer? Create account":"Already have an account? Sign in"}</button></form></main></>
}
