import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Madina Traders | Agricultural Inputs & Crop Solutions",
  description: "Trusted pesticides, herbicides, fungicides, fertilizers and plant health solutions for Pakistani farmers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
