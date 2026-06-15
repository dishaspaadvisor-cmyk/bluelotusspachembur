import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { services } from "@/data/data";

/* Service Card */
function ServiceCard({ service }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3">
            <a
              href="tel:+91 +91 8433608211"
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900"
            >
              <Phone size={16} />
              Call
            </a>

            <a
              href="https://wa.me/918433608211"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-slate-900">
          {service.title}
        </h3>

        <p className="mb-4 text-slate-600">
          {service.description}
        </p>

        {/* <Link
          href="/contact"
          className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
        >
          Book Now
          <ArrowRight size={16} />
        </Link> */}
      </div>
    </div>
  );
}

export const metadata = {
  title: "Spa Services",
  description:
    "Explore our premium spa services including Swedish Massage, Deep Tissue Massage, Aromatherapy, Facials and Wellness Treatments.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-blue-600 md:text-5xl">
            Our Premium Services
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Experience luxury wellness treatments crafted to relax
            your body, refresh your mind, and restore your energy.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </section>
    </main>
  );
}