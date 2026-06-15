import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { services } from "@/data/data";

export const metadata = {
  title: "Spa Services | Blue Lotus Spa",
  description:
    "Explore our premium spa services including Swedish Massage, Deep Tissue Massage, Aromatherapy, Facials and Wellness Treatments.",
};

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
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-slate-900">
          {service.title}
        </h3>

        <p className="mb-6 text-slate-600 leading-relaxed">
          {service.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href="tel:+918433608211"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
          >
            <Phone size={18} />
            Call Now
          </a>

          <a
            href="https://wa.me/918433608211"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-700"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-cyan-50" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            Luxury Wellness Treatments
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900 md:text-7xl">
            Our Premium Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Experience luxury wellness treatments crafted to relax your body,
            refresh your mind, and restore your energy. Discover professional
            spa therapies designed for complete rejuvenation.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+918433608211"
              className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918433608211"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 transition hover:border-blue-600 hover:text-blue-600"
            >
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Choose Your Relaxation Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Indulge in our carefully curated spa treatments designed to provide
            ultimate relaxation, stress relief, and wellness.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}

    </main>
  );
}