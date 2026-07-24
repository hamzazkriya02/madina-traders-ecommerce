import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Bug, Sprout, Leaf, FlaskConical, Wrench } from "lucide-react";

const categoryIcons = {
  insecticide: Bug,
  herbicide: Sprout,
  fungicide: FlaskConical,
  fertilizer: Leaf,
  planthealth: Wrench,
};

export default function Home() {
  const featured = products.slice(0, 8);

  return (
    <>
      <Navbar />

     {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image src="/hero-bg.jpg" alt="" fill className="object-cover" priority />
<div className="absolute inset-0 bg-gradient-to-b from-madina-green-dark/90 via-madina-green-dark/88 to-black/95" /> </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 text-center text-white">
          <p className="font-body uppercase tracking-[0.2em] text-madina-green-light text-xs mb-5">
            Trusted Agri Solutions Since Day One
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
            Protect Your Crop, Secure Your Yield
          </h1>
          <p className="font-body text-gray-100 max-w-lg mx-auto mt-6 mb-9 text-sm md:text-base [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
            Genuine pesticides, herbicides, fungicides and fertilizers for Pakistani farmers —
            delivered with trust.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-white text-madina-green-dark font-body font-semibold px-10 py-4 rounded-full hover:bg-madina-green hover:text-white hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Shop Now
          </Link>

          {/* Mobile category chips */}
          <div className="md:hidden flex gap-3 overflow-x-auto mt-10 pb-2 -mx-6 px-6">
            {categories.map((c) => (
              <span
                key={c.slug}
                className="flex-shrink-0 bg-white/15 backdrop-blur border border-white/30 rounded-full px-4 py-2 text-xs font-body whitespace-nowrap"
              >
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </section>

    {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="font-display text-3xl font-bold text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.slug] || Leaf;
            return (
              <Link
                key={cat.slug}
                href={`/shop?category=${cat.slug}`}
                className="group bg-madina-green-light rounded-xl py-8 px-4 flex flex-col items-center gap-3 hover:bg-madina-green transition-colors"
              >
                <div className="bg-white rounded-full p-4 group-hover:bg-white/20 transition-colors">
                  <Icon size={28} strokeWidth={1.75} className="text-madina-green group-hover:text-white transition-colors" />
                </div>
                <span className="font-semibold font-body text-madina-green-dark group-hover:text-white transition-colors">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link href="/shop" className="text-madina-green font-medium text-sm">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-madina-green text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold">15+</p>
            <p className="text-sm text-madina-green-light">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold">5000+</p>
            <p className="text-sm text-madina-green-light">Farmers Served</p>
          </div>
          <div>
            <p className="text-3xl font-bold">48+</p>
            <p className="text-sm text-madina-green-light">Products</p>
          </div>
          <div>
            <p className="text-3xl font-bold">100%</p>
            <p className="text-sm text-madina-green-light">Genuine Products</p>
          </div>
        </div>
      </section>
       <WhatsAppButton />
    </>
  );
}