import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export default function OfferCard({ title, image }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-[420px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <div className="flex h-full items-center justify-center">
            <h3 className="px-4 text-center text-2xl font-bold text-white">
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 p-5">
        <a
          href="tel:+91 8433608211"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 font-semibold text-white transition hover:bg-slate-800"
        >
          <Phone size={18} />
          Call Now
        </a>

        <a
          href="https://wa.me/918433608211"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}