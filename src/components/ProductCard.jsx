"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/data/products";
import ProductVisual from "./ProductVisual";
import { useCart } from "./CartProvider";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <article className="product-card">
      <Link href={`/product/${product.slug}`} className="product-image-link">
        <ProductVisual category={product.category} name={product.name} />
      </Link>
      <div className="product-card-body">
        <span className="category-pill">{product.category.replace("planthealth","plant health")}</span>
        <Link href={`/product/${product.slug}`}><h3>{product.name}</h3></Link>
        <p className="technical">{product.technical}</p>
        <div className="product-meta"><span>{product.packSize}</span><strong>Rs. {formatPrice(product.price)}</strong></div>
        <button className="add-cart" onClick={()=>addToCart(product)}><ShoppingCart size={17}/> Add to Cart</button>
      </div>
    </article>
  );
}
