"use client";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";
import { Search, SlidersHorizontal } from "lucide-react";

function ShopContent() {
  const params = useSearchParams();
  const initialCategory = params.get("category") || "all";
  const initialSearch = params.get("search") || "";
  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState(initialSearch);
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let arr = products.filter(p => category === "all" || p.category === category)
      .filter(p => `${p.name} ${p.technical} ${p.packSize}`.toLowerCase().includes(search.toLowerCase()));
    if (sort === "low") arr = [...arr].sort((a,b)=>a.price-b.price);
    if (sort === "high") arr = [...arr].sort((a,b)=>b.price-a.price);
    if (sort === "name") arr = [...arr].sort((a,b)=>a.name.localeCompare(b.name));
    return arr;
  }, [category, search, sort]);

  return (
    <>
      <Navbar/>
      <main className="shop-page">
        <section className="page-hero"><span className="kicker light">MADINA TRADERS STORE</span><h1>Crop Protection & Nutrition</h1><p>Browse trusted agricultural inputs by category, formulation and pack size.</p></section>
        <section className="shop-content">
          <aside className="filters">
            <h3><SlidersHorizontal size={18}/> Categories</h3>
            <button className={category==="all"?"active":""} onClick={()=>setCategory("all")}>All Products</button>
            {categories.map(c=><button key={c.slug} className={category===c.slug?"active":""} onClick={()=>setCategory(c.slug)}>{c.name}</button>)}
          </aside>
          <div className="shop-main">
            <div className="shop-toolbar">
              <label className="shop-search"><Search size={18}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search product or active ingredient..."/></label>
              <select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option><option value="name">Name A–Z</option></select>
            </div>
            <div className="result-line">{filtered.length} products found</div>
            {filtered.length ? <div className="products-grid">{filtered.map(p=><ProductCard product={p} key={p.id}/>)}</div> : <div className="empty-state"><h3>No products found</h3><p>Try another category or search term.</p></div>}
          </div>
        </section>
      </main>
    </>
  );
}
export default function Shop(){ return <Suspense fallback={<div className="loading">Loading store…</div>}><ShopContent/></Suspense> }
