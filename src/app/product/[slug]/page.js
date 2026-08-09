import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProductVisual from "@/components/ProductVisual";
import ProductBuyBox from "@/components/ProductBuyBox";
import ProductCard from "@/components/ProductCard";
import { getProductBySlug, products } from "@/data/products";
import { CheckCircle2, MessageCircle, ShieldCheck, Truck } from "lucide-react";

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = products.filter(p=>p.category===product.category && p.id!==product.id).slice(0,4);
  return (
    <>
      <Navbar/>
      <main className="product-page">
        <div className="breadcrumbs"><Link href="/">Home</Link> / <Link href={`/shop?category=${product.category}`}>{product.category}</Link> / <span>{product.name}</span></div>
        <section className="product-detail">
          <ProductVisual category={product.category} name={product.name} large/>
          <div className="product-info">
            <span className="category-pill">{product.category.replace("planthealth","plant health")}</span>
            <h1>{product.name}</h1>
            <p className="technical-large">{product.technical}</p>
            <div className="detail-list">
              <div><span>Pack Size</span><b>{product.packSize}</b></div>
              <div><span>Category</span><b>{product.category.replace("planthealth","Plant Health")}</b></div>
            </div>
            <ProductBuyBox product={product}/>
            <div className="mini-benefits"><span><ShieldCheck/> Genuine product</span><span><Truck/> Fast dispatch</span><span><MessageCircle/> WhatsApp support</span></div>
          </div>
        </section>
        <section className="product-notes">
          <h2>Product Information</h2>
          <p>This listing is designed to help customers identify the product, pack size and technical composition. Always follow the official product label and local agricultural guidance before use.</p>
          <ul><li><CheckCircle2/> Verify crop and target problem before application.</li><li><CheckCircle2/> Use recommended personal protection and application practices.</li><li><CheckCircle2/> Contact Madina Traders if you need pack or availability confirmation.</li></ul>
        </section>
        {related.length>0 && <section className="related"><h2>Related Products</h2><div className="products-grid">{related.map(p=><ProductCard key={p.id} product={p}/>)}</div></section>}
      </main>
    </>
  );
}
