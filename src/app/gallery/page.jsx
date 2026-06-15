
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
            <section className="bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 py-20 text-white">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <h1 className="text-4xl font-bold md:text-6xl">
                        Spa Gallery
                    </h1>

                    <p className="mt-4 text-lg text-blue-100">
                        Explore our luxury spa ambiance, premium rooms and wellness
                        experiences.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

