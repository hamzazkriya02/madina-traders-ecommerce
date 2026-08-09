import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";
import { Bug, Sprout, Leaf, FlaskConical, HeartPulse, ShieldCheck, Truck, Headphones, BadgeCheck, ArrowRight, Quote } from "lucide-react";

const icons = { insecticide: Bug, herbicide: Sprout, fungicide: FlaskConical, fertilizer: Leaf, planthealth: HeartPulse };

export default function Home() {
  const featured = products.filter(p => p.featured).slice(0,8);
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-glow hero-glow-a"></div><div className="hero-glow hero-glow-b"></div>
          <div className="hero-inner">
            <p className="eyebrow">TRUSTED AGRI SOLUTIONS SINCE DAY ONE</p>
            <h1>Protect Your Crop,<br/>Secure Your Yield</h1>
            <p className="hero-copy">Genuine pesticides, herbicides, fungicides, fertilizers and plant nutrition products — selected for Pakistani farms and delivered with trust.</p>
            <div className="hero-actions">
              <Link href="/shop" className="btn btn-light">Shop Products <ArrowRight size={18}/></Link>
              <Link href="/contact" className="btn btn-outline">Talk to an Expert</Link>
            </div>
            <div className="hero-proof">
              <span><ShieldCheck size={18}/> Genuine Products</span>
              <span><Truck size={18}/> Fast Dispatch</span>
              <span><Headphones size={18}/> Farmer Support</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head centered">
            <span className="kicker">PRODUCT RANGE</span>
            <h2>Shop by Category</h2>
            <p>Find the right crop protection and nutrition solution for your farm.</p>
          </div>
          <div className="category-grid">
            {categories.map(cat => {
              const Icon = icons[cat.slug] || Leaf;
              return <Link href={`/shop?category=${cat.slug}`} className="category-card" key={cat.slug}>
                <div className="cat-icon"><Icon size={30}/></div><h3>{cat.name}</h3><span>Explore products →</span>
              </Link>
            })}
          </div>
        </section>

        <section className="section soft-section">
          <div className="section-head row">
            <div><span className="kicker">POPULAR PICKS</span><h2>Featured Products</h2></div>
            <Link href="/shop" className="text-link">View all products <ArrowRight size={16}/></Link>
          </div>
          <div className="products-grid">{featured.map(p => <ProductCard key={p.id} product={p}/>)}</div>
        </section>

        <section className="why">
          <div className="why-copy">
            <span className="kicker light">WHY MADINA TRADERS</span>
            <h2>Farm inputs you can buy with confidence.</h2>
            <p>We focus on genuine products, clear product information and practical support so growers can choose with confidence.</p>
            <Link href="/about" className="btn btn-light">Our Story <ArrowRight size={18}/></Link>
          </div>
          <div className="why-grid">
            <div><BadgeCheck/><h3>Genuine Products</h3><p>Carefully selected crop protection and nutrition products.</p></div>
            <div><Headphones/><h3>Practical Support</h3><p>Need help choosing? Contact us before placing your order.</p></div>
            <div><Truck/><h3>Reliable Dispatch</h3><p>Clear order communication and fast handling.</p></div>
            <div><ShieldCheck/><h3>Trusted Service</h3><p>Built around long-term relationships with farmers.</p></div>
          </div>
        </section>

        <section className="stats">
          <div><strong>15+</strong><span>Years Experience</span></div>
          <div><strong>5000+</strong><span>Farmers Served</span></div>
          <div><strong>{products.length}+</strong><span>Listed Products</span></div>
          <div><strong>100%</strong><span>Customer Focus</span></div>
        </section>

        <section className="section testimonials">
          <div className="section-head centered"><span className="kicker">FARMER FIRST</span><h2>Built on trust, not just transactions</h2></div>
          <div className="testimonial-grid">
            {[
              ["Reliable product guidance and quick response whenever we need information.","Grower, Bahawalpur"],
              ["The website makes it easy to compare categories and find the right pack size.","Farm Customer, Punjab"],
              ["Simple ordering and direct WhatsApp support are very useful for farmers.","Dealer Customer"]
            ].map(([t,n]) => <blockquote key={n}><Quote/><p>{t}</p><cite>{n}</cite></blockquote>)}
          </div>
        </section>

        <section className="cta">
          <div><span className="kicker light">NEED HELP CHOOSING?</span><h2>Tell us your crop problem. We’ll help you find the right product.</h2></div>
          <Link href="/contact" className="btn btn-light">Contact Madina Traders <ArrowRight size={18}/></Link>
        </section>
      </main>
    </>
  );
}
