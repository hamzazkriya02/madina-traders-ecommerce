import Link from "next/link";
import Image from "next/image";
import { categoryImages } from "@/data/products";

export default function ProductCard({ product, priority = false }) {
  const imageToShow = product.image || categoryImages[product.category];

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="aspect-[4/3] bg-madina-green-light rounded-lg overflow-hidden mb-3 relative">
        <Image
          src={imageToShow}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          priority={priority}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold text-gray-900 leading-tight">{product.name}</h3>
      <p className="text-sm text-madina-gray mb-1">{product.packSize}</p>
      <span className="text-madina-green font-bold">
        Rs. {product.price ? product.price.toLocaleString() : "N/A"}
      </span>
    </Link>
  );
}