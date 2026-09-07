import Link from "next/link";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import { categories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>Madina Traders</h3>
          <p className="footer-tag">Trusted agricultural inputs for healthier crops and stronger yields.</p>
          <div className="footer-badge"><ShieldCheck size={18}/> Genuine products • Farmer focused</div>
        </div>
        <div>
          <h4>Shop</h4>
          {categories.map(c => <Link key={c.slug} href={`/shop?category=${c.slug}`}>{c.name}</Link>)}
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/account">My Account</Link>
          <Link href="/cart">Cart</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p><MapPin size={16}/> Bahawalpur, Punjab, Pakistan</p>
          <p><Phone size={16}/> +92 301 9206314</p>
          <p><Mail size={16}/> hamzazakriya91@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Madina Traders. All rights reserved.</div>
    </footer>
  );
}
