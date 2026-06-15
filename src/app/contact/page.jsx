import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Star,
} from "lucide-react";

import { contactInfo, services } from "@/data/data";

export const metadata = {
  title: "Contact Us | Blue Lotus Spa chembur",
  description:
    "Book your spa experience at Blue Lotus Spa chembur. Contact our wellness experts and schedule your relaxing spa treatment today.",
};

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="group rounded-[28px] border border-blue-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
        <Icon size={24} />
      </div>

      <h3 className="mb-3 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <div className="leading-relaxed text-slate-600">
        {children}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 py-16 text-white">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur">
            <Sparkles size={16} />
            Premium Wellness & Relaxation
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            Contact Us
          </h1>

          <p className="mt-5 text-xl text-blue-100">
            Book Your Spa Experience
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-50">
            Contact our wellness experts and schedule your relaxing
            spa treatment today. Experience luxury therapies,
            wellness treatments, and complete rejuvenation.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="-mt-12 relative z-10 px-6">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-white p-8 shadow-2xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-700">
                5000+
              </h3>
              <p className="mt-2 text-slate-600">
                Happy Clients
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-700">
                10+
              </h3>
              <p className="mt-2 text-slate-600">
                Spa Treatments
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-700">
                7 Days
              </h3>
              <p className="mt-2 text-slate-600">
                Open Weekly
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-700">
                5★
              </h3>
              <p className="mt-2 text-slate-600">
                Premium Service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="mb-10">
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                Get In Touch
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                We'd Love To Hear From You
              </h2>

              <p className="mt-4 text-slate-600">
                Whether you're planning a relaxing spa session or
                have questions about our services, our team is here
                to assist you.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <InfoCard
                icon={MapPin}
                title="Visit Our Spa"
              >
                <p className="font-semibold">
                  {contactInfo.spaName}
                </p>

                <p>{contactInfo.subtitle}</p>

                <p>{contactInfo.address}</p>
              </InfoCard>

              <InfoCard
                icon={Phone}
                title="Call Us"
              >
                <p>{contactInfo.phone}</p>
              </InfoCard>

              <InfoCard
                icon={MessageCircle}
                title="WhatsApp Booking"
              >
                <p>{contactInfo.whatsapp}</p>
              </InfoCard>

              <InfoCard
                icon={Clock}
                title="Business Hours"
              >
                <p>{contactInfo.hours}</p>
                <p>{contactInfo.timing}</p>
              </InfoCard>
            </div>

            <div className="mt-10 rounded-[30px] bg-gradient-to-r from-blue-700 to-cyan-500 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold">
                Quick Booking Support
              </h3>

              <p className="mt-3 text-blue-100">
                Our spa consultants are available daily to help you
                choose the perfect treatment package.
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="rounded-2xl bg-white px-6 py-4 text-center font-semibold text-blue-700 transition hover:bg-blue-50"
                >
                  Call Now
                </a>

                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(
                    /\D/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-center font-semibold backdrop-blur transition hover:bg-white/20"
                >
                  WhatsApp Booking
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-[36px] border border-blue-100 bg-white p-8 shadow-[0_20px_60px_rgba(37,99,235,0.15)] md:p-10">
            <div className="mb-8 flex items-center gap-4 rounded-2xl bg-blue-50 p-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Phone size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Book Appointment
                </h3>

                <p className="text-sm text-slate-500">
                  Our team will contact you shortly.
                </p>
              </div>
            </div>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full name "

                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-500 focus:bg-white text-black"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-500 focus:bg-white  text-black"
              />

              <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-500 focus:bg-white  text-black">
                <option>Select Service</option>

                {services.map((service) => (
                  <option
                    key={service.id}
                    value={service.title}
                  >
                    {service.title}
                  </option>
                ))}
              </select>

              <textarea
                rows={5}
                placeholder="Additional Details..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-500 focus:bg-white  text-black"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 px-6 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Submit Booking Request
              </button>
            </form>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t pt-6">
              <div className="text-center">
                <ShieldCheck className="mx-auto text-blue-600" />
                <p className="mt-2 text-xs text-slate-500">
                  Trusted
                </p>
              </div>

              <div className="text-center">
                <Star className="mx-auto text-yellow-500" />
                <p className="mt-2 text-xs text-slate-500">
                  Premium
                </p>
              </div>

              <div className="text-center">
                <Sparkles className="mx-auto text-cyan-600" />
                <p className="mt-2 text-xs text-slate-500">
                  Luxury Care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-[40px] border border-blue-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2631165830426!2d72.89897047520475!3d19.05216578214755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c602d7c83375%3A0x301be03ddb52351a!2sK%20Star%20Mall.!5e0!3m2!1sen!2sin!4v1781508998803!5m2!1sen!2sin"
            width="100%"
            height="500"
            loading="lazy"
            className="border-0"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}