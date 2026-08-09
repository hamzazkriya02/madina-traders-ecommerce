"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { categories } from "@/data/products";
import { User, ShoppingBag, Menu, Search, X } from "lucide-react";
import { useCart } from "./CartProvider";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { count } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/shop?search=${encodeURIComponent(q)}`);
      setMenuOpen(false);
      setSearchOpen(false);
    }
  };

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand">
          <span className="brand-title">Madina Traders</span>
          <span className="brand-sub">AGRI SOLUTIONS</span>
        </Link>

        <nav className="desktop-nav">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/shop?category=${cat.slug}`}>{cat.name}</Link>
          ))}
        </nav>

        <div className="nav-actions">
          {searchOpen ? (
            <form onSubmit={handleSearch} className="search-inline">
              <input autoFocus value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search products..." />
              <button aria-label="Search"><Search size={18}/></button>
              <button type="button" aria-label="Close search" onClick={()=>setSearchOpen(false)}><X size={17}/></button>
            </form>
          ) : (
            <button className="icon-btn desktop-search" onClick={()=>setSearchOpen(true)} aria-label="Open search"><Search size={21}/></button>
          )}

          <Link href="/account" className="action-link"><User size={21}/><span>Account</span></Link>
          <Link href="/cart" className="action-link cart-link">
            <ShoppingBag size={21}/><span>Cart</span>{count > 0 && <b>{count}</b>}
          </Link>
          <button className="icon-btn mobile-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Menu"><Menu size={23}/></button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-panel">
          <form onSubmit={handleSearch} className="mobile-search">
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search products..." />
            <button><Search size={18}/></button>
          </form>
          <Link href="/shop" onClick={()=>setMenuOpen(false)}>All Products</Link>
          {categories.map((cat)=><Link key={cat.slug} href={`/shop?category=${cat.slug}`} onClick={()=>setMenuOpen(false)}>{cat.name}</Link>)}
          <Link href="/about" onClick={()=>setMenuOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={()=>setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
