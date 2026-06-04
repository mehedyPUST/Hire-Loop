// Footer.jsx
"use client";

import { Link } from "@heroui/react";
import {
    Briefcase,
    Users,
    TrendingUp,
    Globe,
    Mail
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-black to-green-950 text-gray-200 border-t border-green-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

                    {/* Brand */}
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-green-500">
                            hireloop
                        </h2>
                        <p className="text-gray-400 text-xs md:text-sm mt-3 md:mt-4 leading-relaxed">
                            The AI-native career platform. Built for people who take their work seriously.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-6 justify-center sm:justify-start">
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center bg-green-900/30 hover:bg-green-800 rounded-xl text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Globe size={20} /> {/* Temporary replacement */}
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center bg-green-900/30 hover:bg-green-800 rounded-xl text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <Users size={20} /> {/* Temporary replacement */}
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center bg-green-900/30 hover:bg-green-800 rounded-xl text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                                aria-label="X (Twitter)"
                            >
                                <Mail size={20} /> {/* Temporary replacement */}
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div className="text-center sm:text-left">
                        <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
                            <Briefcase className="text-green-500" size={18} />
                            <h3 className="text-green-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                                Product
                            </h3>
                        </div>
                        <ul className="space-y-2.5 md:space-y-3 text-xs md:text-sm">
                            <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Job discovery</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Worker AI</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Companies</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Salary data</Link></li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div className="text-center sm:text-left">
                        <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
                            <Users className="text-green-500" size={18} />
                            <h3 className="text-green-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                                Navigation
                            </h3>
                        </div>
                        <ul className="space-y-2.5 md:space-y-3 text-xs md:text-sm">
                            <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Help center</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Career library</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="text-center sm:text-left">
                        <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
                            <TrendingUp className="text-green-500" size={18} />
                            <h3 className="text-green-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                                Resources
                            </h3>
                        </div>
                        <ul className="space-y-2.5 md:space-y-3 text-xs md:text-sm">
                            <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Brand Guideline</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">Newsroom</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 md:mt-16 border-t border-green-900/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] md:text-xs text-gray-500">
                    <p>
                        Copyright © 2026 — HireLoop
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-green-400 transition-colors">Terms & Policy</a>
                        <a href="#" className="hover:text-green-400 transition-colors">Privacy Guideline</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}