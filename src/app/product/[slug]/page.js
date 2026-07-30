import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products, categoryImages } from "@/data/products";
import { ShieldAlert, Leaf } from "lucide-react";

export default async function ProductDetail({ params }) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  const imageToShow = product.image || categoryImages[product.category];

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const whatsappMessage =
    `Assalam o Alaikum, I want to order: ${product.name} (${product.packSize}) - Rs. ${product.price}`;

  const whatsappLink =
    `https://wa.me/923443691242?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-sm text-madina-gray mb-8">
          <Link href="/shop" className="hover:text-madina-green">
            Shop
          </Link>
          {" / "}
          <Link
            href={`/shop?category=${product.category}`}
            className="hover:text-madina-green capitalize"
          >
            {product.category}
          </Link>
          {" / "}
          <span className="text-gray-800">{product.name}</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-[4/3] bg-madina-green-light rounded-xl overflow-hidden relative">
            <Image
              src={imageToShow}
              alt={product.name}
              fill
              priority
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <span className="inline-block bg-madina-green-light text-madina-green-dark text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4 capitalize">
              {product.category}
            </span>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-madina-forest mb-2">
              {product.name}
            </h1>

            <p className="text-madina-gray mb-6">
              Pack Size: {product.packSize}
            </p>

            <p className="text-3xl font-bold text-madina-green mb-6">
              Rs. {product.price.toLocaleString()}
            </p>

            {product.technical && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-2">
                  <Leaf
                    size={18}
                    className="text-madina-green mt-0.5 flex-shrink-0"
                  />

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Active Ingredient / Technical
                    </p>

                    <p className="text-sm text-madina-gray">
                      {product.technical}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-2">
                <ShieldAlert
                  size={18}
                  className="text-amber-600 mt-0.5 flex-shrink-0"
                />

                <div>
                  <p className="text-sm font-semibold text-amber-800">
                    Usage & Safety
                  </p>

                  <p className="text-sm text-amber-700">
                    Use strictly as per label instructions. Keep away from
                    children and food items. Wear protective gloves and mask
                    while handling and spraying.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-madina-green text-white text-center font-semibold py-4 rounded-full hover:bg-madina-green-dark transition-colors"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold text-madina-forest mb-6">
              Related Products
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  className="group block"
                >
                  <div className="aspect-[4/3] bg-madina-green-light rounded-lg overflow-hidden mb-3 relative">
                    <Image
                      src={p.image || categoryImages[p.category]}
                      alt={p.name}
                      fill
                      sizes="25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="font-semibold text-sm text-gray-900 leading-tight">
                    {p.name}
                  </h3>

                  <p className="text-madina-green font-bold text-sm">
                    Rs. {p.price.toLocaleString()}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <WhatsAppButton />
    </>
  );
}