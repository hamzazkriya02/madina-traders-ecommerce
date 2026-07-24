"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { categories } from "@/data/products";
import { User, ShoppingBag, Menu, Search } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/shop?search=${encodeURIComponent(query.trim())}`);
            setSearchOpen(false);
            setQuery("");
        }
    };

    return (
        <header className="bg-white border-b border-madina-green-light sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
                <Link href="/" className="flex flex-col items-center leading-none flex-shrink-0">
                    <span className="font-display text-2xl font-bold text-madina-forest tracking-wide">
                        Madina Traders
                    </span>
                    <div className="flex items-center gap-2 mt-1.5">
                        <span className="h-px w-4 bg-madina-gold/60"></span>
                        <span className="font-body text-[10px] tracking-[0.35em] text-madina-gold uppercase">
                            Agri Solutions
                        </span>
                        <span className="h-px w-4 bg-madina-gold/60"></span>
                    </div>
                </Link>
                <nav className="hidden md:flex gap-7 text-[15px] font-semibold font-body text-gray-800">
                    {categories.map((cat) => (
                        <Link
                            key={cat.slug}
                            href={`/shop?category=${cat.slug}`}
                            className="hover:text-madina-green transition-colors"
                        >
                            {cat.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-7 pl-6 border-l border-gray-100 ml-2">          {/* Search */}
                    <div className="hidden sm:flex items-center mr-2">            {searchOpen ? (
                        <form onSubmit={handleSearch} className="flex items-center border border-madina-green rounded-full overflow-hidden">
                            <input
                                autoFocus
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onBlur={() => !query && setSearchOpen(false)}
                                placeholder="Search products..."
                                className="px-4 py-1.5 text-sm outline-none w-48"
                            />
                            <button type="submit" className="px-3 text-madina-green">
                                <Search size={18} strokeWidth={1.75} />
                            </button>
                        </form>
                    ) : (
                        <button onClick={() => setSearchOpen(true)} className="text-gray-700 hover:text-madina-green transition-colors">
                            <Search size={20} strokeWidth={1.75} />
                        </button>
                    )}
                    </div>

                    <Link href="/login" className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-madina-green transition-colors">
                        <User size={20} strokeWidth={1.75} />
                        <span className="text-[10px] font-body hidden sm:block">Account</span>
                    </Link>
                    <Link href="/cart" className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-madina-green transition-colors">
                        <ShoppingBag size={20} strokeWidth={1.75} />
                        <span className="text-[10px] font-body hidden sm:block">Cart</span>
                    </Link>
                    <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
                        <Menu size={22} strokeWidth={1.75} />
                    </button>
                </div>
            </div>

            {/* Mobile search + menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col gap-3 px-6 pb-4 text-sm font-semibold font-body text-gray-800">
                    <form onSubmit={handleSearch} className="flex items-center border border-madina-green rounded-full overflow-hidden mb-2">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search products..."
                            className="px-4 py-2 text-sm outline-none flex-1"
                        />
                        <button type="submit" className="px-3 text-madina-green">
                            <Search size={18} strokeWidth={1.75} />
                        </button>
                    </form>
                    {categories.map((cat) => (
                        <Link
                            key={cat.slug}
                            href={`/shop?category=${cat.slug}`}
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-madina-green transition-colors"
                        >
                            {cat.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}