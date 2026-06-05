"use client";

import { Search, MapPin, Briefcase, Sparkles, ArrowRight, TrendingUp, Users, Building2, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const jobOptions = [
        { key: "product-designer", label: "💼 Product Designer" },
        { key: "ai-engineer", label: "🤖 AI Engineer" },
        { key: "deep-learning", label: "🧠 Deep Learning Engineer" },
        { key: "full-stack", label: "💻 Full Stack Developer" },
        { key: "data-scientist", label: "📊 Data Scientist" },
    ];

    return (
        <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/30"></div>
                <div className="absolute inset-0 bg-[url('/images/globe.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415530_1px,transparent_1px),linear-gradient(to_bottom,#33415530_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

                {/* Animated Blobs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Content */}
            <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Badge */}
                <div className="flex justify-center mb-5 md:mb-6">
                    <div className="inline-flex items-center gap-2 bg-indigo-500/10 backdrop-blur-md border border-indigo-500/20 rounded-full px-4 py-1.5 shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer group">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        <span className="text-indigo-300 text-xs font-semibold tracking-wide">
                            🔥 56,000+ NEW JOBS THIS MONTH
                        </span>
                        <Sparkles className="w-3 h-3 text-indigo-400" />
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight">
                        <span className="text-white">Find Your</span>
                        <br className="sm:hidden" />
                        <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent"> Dream Job </span>
                        <br />
                        <span className="text-white">Today</span>
                    </h1>

                    <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                        Join thousands of professionals who found their perfect role through HireLoop.
                        Your next career opportunity is just a click away.
                    </p>
                </div>

                {/* Search Form */}
                <div className="max-w-4xl mx-auto mb-10">
                    <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-2 border border-slate-700/50 shadow-2xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <Briefcase className="w-4 h-4 text-slate-500" />
                                </div>
                                <input type="text" placeholder="Job title, skill or company" className="w-full h-10 pl-9 pr-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none transition-all" />
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <MapPin className="w-4 h-4 text-slate-500" />
                                </div>
                                <input type="text" placeholder="Location or Remote" className="w-full h-10 pl-9 pr-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none transition-all" />
                            </div>
                            <select className="w-full h-10 px-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 focus:border-indigo-500 focus:outline-none cursor-pointer">
                                <option value="" className="bg-slate-900">Trending Position</option>
                                {jobOptions.map((job) => (
                                    <option key={job.key} value={job.key} className="bg-slate-900">{job.label}</option>
                                ))}
                            </select>
                            <button className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-emerald-500 transition-all h-10 flex items-center justify-center text-sm shadow-lg">
                                <Search className="w-4 h-4 mr-2" />
                                Search Jobs
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                    {[
                        { val: "50K+", label: "Active Jobs", icon: Briefcase },
                        { val: "12K+", label: "Companies", icon: Building2 },
                        { val: "2M+", label: "Job Seekers", icon: Users },
                        { val: "97%", label: "Satisfaction", icon: CheckCircle2 }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 hover:border-indigo-500/30 transition-all">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <stat.icon className="w-5 h-5 text-indigo-400" />
                                <div className="text-2xl font-bold text-white">{stat.val}</div>
                            </div>
                            <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}