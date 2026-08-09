import { MessageCircle } from "lucide-react";
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923000000000?text=Assalamualaikum%20Madina%20Traders%2C%20I%20need%20product%20information."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp"
    >
      <MessageCircle size={29} />
    </a>
  );
}
