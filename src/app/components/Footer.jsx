"use client";

import { Link } from "@heroui/react";
import { Briefcase, Users, TrendingUp, Globe, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-black to-slate-950 text-slate-400 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

                    {/* Brand */}
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                            hireloop
                        </h2>
                        <p className="text-sm mt-3 leading-relaxed text-slate-500">
                            The AI-native career platform. Built for people who take their work seriously.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-6 justify-center sm:justify-start">
                            {[Globe, Users, Mail].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-9 h-9 flex items-center justify-center bg-slate-900/50 hover:bg-emerald-500/10 border border-slate-800 hover:border-emerald-500/50 rounded-lg text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns Helper Component */}
                    {[
                        { title: "Product", icon: Briefcase, links: ["Job discovery", "Worker AI", "Companies", "Salary data"] },
                        { title: "Navigation", icon: Users, links: ["Help center", "Career library", "Contact"] },
                        { title: "Resources", icon: TrendingUp, links: ["Brand Guideline", "Newsroom"] }
                    ].map((section) => (
                        <div key={section.title} className="text-center sm:text-left">
                            <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start text-emerald-500">
                                <section.icon size={16} />
                                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300">
                                    {section.title}
                                </h3>
                            </div>
                            <ul className="space-y-3 text-sm">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-16 border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
                    <p>Copyright © 2026 — HireLoop</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-emerald-400 transition-colors">Terms & Policy</a>
                        <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Guideline</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}