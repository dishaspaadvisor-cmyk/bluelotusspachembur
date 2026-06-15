import Image from "next/image";
import { Sparkles, Award, HeartHandshake, Users } from "lucide-react";

export const metadata = {
  title: "About Us | Blue Lotus Spa",
  description:
    "Discover Blue Lotus Spa, your destination for luxury wellness, relaxation, and professional massage therapies.",
};

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-50 opacity-50"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-blue-100 blur-3xl"></div>

              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/hero/ChatGPT Image Jun 11, 2026, 12_40_08 PM.png"
                  alt="Blue Lotus Spa"
                  width={700}
                  height={800}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <Sparkles size={16} />
                About Blue Lotus Spa
              </span>

              <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                Your Destination for
                <span className="block text-blue-600">
                  Luxury & Wellness
                </span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                At Blue Lotus Spa, we believe wellness is more than relaxation —
                it is a complete experience. Our expert therapists provide
                premium spa treatments, therapeutic massages, and rejuvenating
                wellness services designed to refresh your body and mind.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                We combine luxury, comfort, and professional care to create a
                peaceful environment where every guest can escape daily stress
                and enjoy true relaxation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Book Appointment
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <Award className="mb-4 text-blue-600" size={40} />
            <h3 className="mb-2 text-xl font-bold text-black">
              Premium Services
            </h3>
            <p className="text-slate-600">
              Luxury spa therapies designed to provide complete relaxation.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <HeartHandshake
              className="mb-4 text-blue-600"
              size={40}
            />
            <h3 className="mb-2 text-xl font-bold  text-black">
              Professional Care
            </h3>
            <p className="text-slate-600">
              Experienced therapists delivering personalized treatments.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <Users className="mb-4 text-blue-600" size={40} />
            <h3 className="mb-2 text-xl font-bold  text-black">
              Happy Clients
            </h3>
            <p className="text-slate-600">
              Hundreds of satisfied customers trust our wellness expertise.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
            <Sparkles className="mb-4 text-blue-600" size={40} />
            <h3 className="mb-2 text-xl font-bold  text-black">
              Luxury Ambience
            </h3>
            <p className="text-slate-600">
              Elegant interiors crafted for comfort and serenity.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">

            <div className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
              <h2 className="text-4xl font-bold text-blue-600">
                10+
              </h2>
              <p className="mt-3 text-slate-600">
                Years Experience
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
              <h2 className="text-4xl font-bold text-blue-600">
                5000+
              </h2>
              <p className="mt-3 text-slate-600">
                Happy Clients
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
              <h2 className="text-4xl font-bold text-blue-600">
                25+
              </h2>
              <p className="mt-3 text-slate-600">
                Spa Treatments
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
              <h2 className="text-4xl font-bold text-blue-600">
                4.9★
              </h2>
              <p className="mt-3 text-slate-600">
                Customer Rating
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}