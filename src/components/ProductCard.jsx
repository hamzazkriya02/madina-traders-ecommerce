import Link from "next/link";
import Image from "next/image";
import { categoryImages } from "@/data/products";

export default function ProductCard({ product }) {
  const imageToShow = product.image || categoryImages[product.category];

  // Primary variant (pehla variant default uthayen ge)
  const mainVariant = product.variants?.[0];
  const price = mainVariant?.price;
  const packSize = mainVariant?.packSize;

  // Agar discount price setup karni ho to
  const hasDiscount = product.discountPrice && product.discountPrice < price;

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="aspect-[4/3] bg-madina-green-light rounded-lg overflow-hidden mb-3 relative">
        <Image
          src={imageToShow}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {hasDiscount && (
          <span className="absolute top-2 left-2 bg-madina-green text-white text-xs px-2 py-1 rounded">
            Sale
          </span>
        )}
      </div>
      <h3 className="font-semibold text-gray-900 leading-tight">{product.name}</h3>
      
      {/* Pack Size Display */}
      {packSize && (
        <p className="text-sm text-madina-gray mb-1">
          {product.variants.length > 1 ? `${product.variants.length} Sizes Available (${packSize})` : packSize}
        </p>
      )}

      {/* Price Display */}
      <div className="flex items-center gap-2">
        {hasDiscount ? (
          <>
            <span className="text-madina-green font-bold">
              Rs. {product.discountPrice?.toLocaleString()}
            </span>
            <span className="text-sm text-gray-400 line-through">
              Rs. {price?.toLocaleString()}
            </span>
          </>
        ) : (
          <span className="text-madina-green font-bold">
            {product.variants?.length > 1 ? "Starting from " : ""}
            Rs. {price ? price.toLocaleString() : "N/A"}
          </span>
        )}
      </div>
    </Link>
  );
}