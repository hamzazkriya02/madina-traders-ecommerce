"use client";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export default function Shop() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialSearch = searchParams.get("search") || "";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [search, setSearch] = useState(initialSearch);

  const filtered = useMemo(() => {
    let result = products;
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return result;
  }, [activeCategory, search]);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-madina-forest mb-2">
          Shop
        </h1>
        {search && (
          <p className="text-madina-gray mb-6">
            Search results for: <span className="font-semibold">{search}</span>
          </p>
        )}

        {/* Category filter chips */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setActiveCategory("")}
            className={`px-4 py-2 text-sm font-semibold rounded-full border transition-colors ${
              !activeCategory
                ? "bg-madina-green text-white border-madina-green"
                : "border-gray-300 text-gray-700 hover:border-madina-green"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 text-sm font-semibold rounded-full border transition-colors ${
                activeCategory === cat.slug
                  ? "bg-madina-green text-white border-madina-green"
                  : "border-gray-300 text-gray-700 hover:border-madina-green"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products grid */}
        {filtered.length === 0 ? (
          <p className="text-madina-gray text-center py-20">
            No products found in this category.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           {filtered.map((p, index) => (
              <ProductCard key={p.id} product={p} priority={index < 4} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}