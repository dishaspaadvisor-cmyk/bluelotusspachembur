import { offers } from "@/data/data";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export const metadata = {
    title: "Spa Offers | Blue Lotus Spa Thane",
    description:
        "Exclusive spa offers, wellness packages, and massage deals at Blue Lotus Spa Thane.",
};

function OfferCard({ offer }) {
    return (<div className="group overflow-hidden rounded-[32px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

        {/* Offer Image */}
        <div className="relative bg-slate-100">
            <Image
                src={offer.image}
                alt={offer.title}
                width={700}
                height={1000}
                priority
                className="w-full object-contain transition duration-500 group-hover:scale-[1.02]"
            />

            {/* Title Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6">
                <h3 className="text-xl font-bold text-white md:text-2xl">
                    {offer.title}
                </h3>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 p-5">
            <a
                href="tel:+91 8433608211"
                className="flex items-center justify-center gap-2 rounded-2xl bg-blue-700 px-4 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
                <Phone size={18} />
                Call Now
            </a>

            <a
                href="https://wa.me/+918433608211"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700"
            >
                <MessageCircle size={18} />
                WhatsApp
            </a>
        </div>
    </div>

);
}

export default function OffersPage() {
return ( <main className="min-h-screen bg-slate-50">
{/* Hero Section */} 
{/* <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 py-24 text-white"> <div className="mx-auto max-w-7xl px-6 text-center"> <span className="rounded-full border border-white/30 px-5 py-2 text-sm backdrop-blur">
Premium Wellness Packages </span>

        < h1 className = "mt-6 text-5xl font-bold md:text-7xl" >
            Exclusive Spa Offers
      </h1 >

        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Discover luxury spa experiences, wellness treatments,
            and massage packages designed to relax your body and mind.
        </p>
    </div >
  </section > */}

        {/* Offers Section */ }
        < section className = "mx-auto max-w-7xl px-6 py-20" >
    <div className="mb-14 text-center">
      <h2 className="text-4xl font-bold text-slate-900">
        Special Offers & Packages
      </h2>

      <p className="mt-4 text-lg text-slate-600">
        Limited-time deals crafted for complete relaxation.
      </p>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  </section >

        {/* CTA Section */ }
        < section className = "pb-20" >
            <div className="mx-auto max-w-5xl px-6">
                <div className="rounded-[40px] bg-gradient-to-r from-blue-800 to-cyan-600 p-10 text-center text-white shadow-2xl">
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Ready To Relax?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-blue-100">
                        Book your appointment today and enjoy premium spa
                        treatments in a luxurious and peaceful atmosphere.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            href="tel:+91 8433608211"
                            className="rounded-2xl bg-white px-8 py-4 font-semibold text-blue-800 transition hover:scale-105"
                        >
                            Call Now
                        </a>

                        <a
                            href="https://wa.me/918433608211"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-2xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-800"
                        >
                            WhatsApp Booking
                        </a>
                    </div>
                </div>
            </div>
   </section >
  </main >
 );
}
