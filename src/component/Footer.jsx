import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo & About */}
                    <div>
                        <Image
                            src="/logo/logo.png"
                            alt="Blue Lotus Spa"
                            width={180}
                            height={70}
                            className="mb-5 h-auto"
                        />

                        <p className="leading-7 text-slate-300">
                            Discover relaxation and rejuvenation at Blue Lotus Spa. Your wellness
                            is our priority. Experience premium spa therapies designed to
                            refresh your body, mind, and soul.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-6 text-xl font-bold">Contact Us</h3>

                        <div className="space-y-4">
                            <a
                                href="tel:+91+91 8433608211"
                                className="flex items-start gap-3 text-slate-300 transition hover:text-cyan-400"
                            >
                                <Phone size={18} className="mt-1" />
                                <span>+91 8433608211</span>
                            </a>

                            <a
                                href="mailto:austinspa.chembur@gmail.com"
                                className="flex items-start gap-3 text-slate-300 transition hover:text-cyan-400"
                            >
                                <Mail size={18} className="mt-1" />
                                <span>bluelotusspa.chembur@gmail.com</span>
                            </a>

                            <div className="flex items-start gap-3 text-slate-300">
                                <MapPin size={18} className="mt-1 min-w-[18px]" />

                                <span>
                                    Shop no. 10, 1st floor, K Star Mall, VN Purav Marg, Diamond Garden,
                                     Basant Garden, Chembur, East Mumbai, Maharashtra 400071
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-xl font-bold">Quick Links</h3>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-slate-300 transition hover:text-cyan-400"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="text-slate-300 transition hover:text-cyan-400"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/services"
                                    className="text-slate-300 transition hover:text-cyan-400"
                                >
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/gallery"
                                    className="text-slate-300 transition hover:text-cyan-400"
                                >
                                    Gallery
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="text-slate-300 transition hover:text-cyan-400"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="mb-6 text-xl font-bold">Follow Us</h3>

                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/Bluelotus.spa.chembur/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:scale-110"
                            >
                                <FaFacebookF size={18} />
                            </a>

                            <a
                                href="https://www.instagram.com/?next=https%3A%2F%2Fwww.instagram.com%2Fbluelotusspa.chembur%2F%3F__coig_ufac%3D1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 text-white transition-all duration-300 hover:scale-110"
                            >
                                <FaInstagram size={18} />
                            </a>

                            {/* <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:scale-110"
                            >
                                <FaXTwitter size={18} />
                            </a> */}
                        </div>

                        <p className="mt-4 text-sm text-slate-400">
                            Follow  for wellness updates,
                            exclusive offers and spa experiences.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-white/10 pt-6 text-center">
                    <p className="text-sm text-slate-400">
                        © {new Date().getFullYear()} Blue Lotus Spa chembur. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}