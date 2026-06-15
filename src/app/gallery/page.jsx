
"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, X } from "lucide-react";
import { galleryImages } from "@/data/data";

function GalleryCard({ item, onView }) {
    return (
        <div className="group overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
            <div className="relative h-80 overflow-hidden">
                <Image
                    src={item.image}
                    alt={`Gallery ${item.id}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                        <button
                            onClick={() => onView(item.image)}
                            className="flex items-center gap-2 rounded-full bg-white/95 px-6 py-3 font-semibold text-blue-700 shadow-lg backdrop-blur"
                        >
                            <Eye size={18} />
                            View Image
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white py-24">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-slate-50" />

                <div className="relative mx-auto max-w-7xl px-6 text-center">
                    <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
                        Luxury Wellness Experience
                    </span>

                    <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-6xl">
                        Spa Gallery
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
                        Explore our luxury spa ambiance, premium rooms, elegant interiors,
                        and wellness experiences designed for complete relaxation and comfort.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {galleryImages.map((item) => (
                        <GalleryCard
                            key={item.id}
                            item={item}
                            onView={setSelectedImage}
                        />
                    ))}
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute right-5 top-5 rounded-full bg-white p-3 text-blue-700 shadow-lg"
                    >
                        <X size={24} />
                    </button>

                    <div className="relative h-[90vh] w-full max-w-6xl">
                        <Image
                            src={selectedImage}
                            alt="Gallery Preview"
                            fill
                            priority
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </main>
    );
}

