// // Hero.jsx
// "use client";

// import { Search, MapPin, Briefcase, Sparkles, ArrowRight, TrendingUp, Users, Building2, CheckCircle2 } from "lucide-react";
// import { useState, useEffect } from "react";

// export default function Hero() {
//     const [isLoaded, setIsLoaded] = useState(false);

//     useEffect(() => {
//         setIsLoaded(true);
//     }, []);

//     const jobOptions = [
//         { key: "product-designer", label: "💼 Product Designer" },
//         { key: "ai-engineer", label: "🤖 AI Engineer" },
//         { key: "deep-learning", label: "🧠 Deep Learning Engineer" },
//         { key: "full-stack", label: "💻 Full Stack Developer" },
//         { key: "data-scientist", label: "📊 Data Scientist" },
//     ];

//     return (
//         <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
//             {/* Animated Background Gradient */}
//             <div className="absolute inset-0 z-0">
//                 <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"></div>
//                 <div className="absolute inset-0 bg-[url('/images/globe.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

//                 {/* Animated Grid Pattern */}
//                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

//                 {/* Animated Blobs */}
//                 <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
//                 <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
//             </div>

//             {/* Content */}
//             <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

//                 {/* Badge */}
//                 <div className="flex justify-center mb-5 md:mb-6">
//                     <div className="inline-flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 md:px-4 md:py-1.5 shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105 cursor-pointer group">
//                         <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
//                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                             <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500"></span>
//                         </span>
//                         <span className="text-emerald-400 text-[10px] md:text-xs font-semibold group-hover:text-emerald-300 transition-colors">
//                             🔥 56,000+ NEW JOBS THIS MONTH
//                         </span>
//                         <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3 text-emerald-400 group-hover:rotate-12 transition-transform" />
//                     </div>
//                 </div>

//                 {/* Heading */}
//                 <div className="text-center mb-6 md:mb-8">
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-4 leading-tight">
//                         <span className="text-white">Find Your</span>
//                         <br className="sm:hidden" />
//                         <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
//                             {" "}Dream Job
//                         </span>
//                         <br />
//                         <span className="text-white">Today</span>
//                     </h1>

//                     <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
//                         Join thousands of professionals who found their perfect role through HireLoop.
//                         Your next career opportunity is just a click away.
//                     </p>
//                 </div>

//                 {/* Search Form */}
//                 <div className="max-w-4xl mx-auto mb-10 md:mb-12">
//                     <div className="bg-white/5 backdrop-blur-xl rounded-xl p-2 border border-white/20 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
//                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
//                             {/* Job Title Input */}
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none z-10">
//                                     <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" />
//                                 </div>
//                                 <input
//                                     type="text"
//                                     placeholder="Job title, skill or company"
//                                     className="w-full h-9 md:h-10 pl-8 md:pl-9 pr-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 text-xs md:text-sm focus:outline-none focus:border-emerald-500/50 transition-all duration-300 hover:bg-white/10"
//                                 />
//                             </div>

//                             {/* Location Input */}
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none z-10">
//                                     <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" />
//                                 </div>
//                                 <input
//                                     type="text"
//                                     placeholder="Location or Remote"
//                                     className="w-full h-9 md:h-10 pl-8 md:pl-9 pr-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 text-xs md:text-sm focus:outline-none focus:border-emerald-500/50 transition-all duration-300 hover:bg-white/10"
//                                 />
//                             </div>

//                             {/* Select dropdown */}
//                             <select className="w-full h-9 md:h-10 px-3 rounded-lg bg-white/5 border border-white/20 text-white text-xs md:text-sm focus:outline-none focus:border-emerald-500/50 transition-all duration-300 hover:bg-white/10 cursor-pointer">
//                                 <option value="" className="bg-slate-800">Trending Position</option>
//                                 {jobOptions.map((job) => (
//                                     <option key={job.key} value={job.key} className="bg-slate-800">
//                                         {job.label}
//                                     </option>
//                                 ))}
//                             </select>

//                             {/* Search Button */}
//                             <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 group relative overflow-hidden h-9 md:h-10 flex items-center justify-center text-xs md:text-sm">
//                                 <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
//                                 <Search className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2 relative z-10" />
//                                 <span className="relative z-10">Search Jobs</span>
//                                 <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1.5 md:ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
//                             </button>
//                         </div>
//                     </div>

//                     {/* Trending tags */}
//                     <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mt-4">
//                         <span className="text-gray-400 text-[10px] md:text-xs flex items-center gap-1">
//                             <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3" />
//                             Trending:
//                         </span>
//                         {["Product Designer", "AI Engineer", "Deep Learning", "Full Stack", "Data Scientist"].map((tag, index) => (
//                             <a
//                                 key={tag}
//                                 href="#"
//                                 className="text-gray-300 hover:text-emerald-400 text-[10px] md:text-xs transition-all duration-300 hover:scale-105 inline-flex items-center gap-1 bg-white/5 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/30"
//                             >
//                                 {tag}
//                                 {index < 4 && <span className="text-gray-600 hidden sm:inline">•</span>}
//                             </a>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Stats */}
//                 <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8">
//                     <div className="text-center group cursor-pointer">
//                         <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-1">
//                             <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
//                             <div className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">50K+</div>
//                         </div>
//                         <div className="text-gray-400 text-[10px] md:text-xs">Active Jobs</div>
//                     </div>
//                     <div className="text-center group cursor-pointer">
//                         <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-1">
//                             <Building2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
//                             <div className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">12K+</div>
//                         </div>
//                         <div className="text-gray-400 text-[10px] md:text-xs">Companies</div>
//                     </div>
//                     <div className="text-center group cursor-pointer">
//                         <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-1">
//                             <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
//                             <div className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">2M+</div>
//                         </div>
//                         <div className="text-gray-400 text-[10px] md:text-xs">Job Seekers</div>
//                     </div>
//                     <div className="text-center group cursor-pointer">
//                         <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-1">
//                             <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
//                             <div className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">97%</div>
//                         </div>
//                         <div className="text-gray-400 text-[10px] md:text-xs">Satisfaction Rate</div>
//                     </div>
//                 </div>

//                 {/* Assisting text */}
//                 <div className="flex justify-center">
//                     <div className="inline-flex items-center gap-2 md:gap-3 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-1.5 border border-white/10">
//                         <div className="flex -space-x-1.5 md:-space-x-2">
//                             {[1, 2, 3, 4].map((i) => (
//                                 <div key={i} className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 border-2 border-slate-900 flex items-center justify-center text-[7px] md:text-[8px] font-bold text-white">
//                                     {String.fromCharCode(64 + i)}
//                                 </div>
//                             ))}
//                         </div>
//                         <p className="text-gray-400 text-[10px] md:text-xs">
//                             <span className="text-white font-semibold">15,000+</span> job seekers found their dream positions
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Scroll indicator */}
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
//                 <div className="w-4 h-6 md:w-5 md:h-8 border-2 border-white/30 rounded-full flex justify-center">
//                     <div className="w-0.5 h-1 md:w-1 md:h-1.5 bg-white/50 rounded-full mt-1 md:mt-1.5"></div>
//                 </div>
//             </div>
//         </section>
//     );
// }




// Hero.jsx
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
        <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"></div>
                <div className="absolute inset-0 bg-[url('/images/globe.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

                {/* Animated Blobs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Content */}
            <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Badge */}
                <div className="flex justify-center mb-5 md:mb-6">
                    <div className="inline-flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 md:px-4 md:py-1.5 shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105 cursor-pointer group">
                        <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500"></span>
                        </span>
                        <span className="text-emerald-400 text-[10px] md:text-xs font-semibold group-hover:text-emerald-300 transition-colors">
                            🔥 56,000+ NEW JOBS THIS MONTH
                        </span>
                        <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3 text-emerald-400 group-hover:rotate-12 transition-transform" />
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center mb-6 md:mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-4 leading-tight">
                        <span className="text-white">Find Your</span>
                        <br className="sm:hidden" />
                        <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                            {" "}Dream Job
                        </span>
                        <br />
                        <span className="text-white">Today</span>
                    </h1>

                    <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                        Join thousands of professionals who found their perfect role through HireLoop.
                        Your next career opportunity is just a click away.
                    </p>
                </div>

                {/* Search Form */}
                <div className="max-w-4xl mx-auto mb-10 md:mb-12">
                    <div className="bg-white/5 backdrop-blur-xl rounded-xl p-2 border border-white/20 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                            {/* Job Title Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none z-10">
                                    <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Job title, skill or company"
                                    className="w-full h-9 md:h-10 pl-8 md:pl-9 pr-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 text-xs md:text-sm focus:outline-none focus:border-emerald-500/50 transition-all duration-300 hover:bg-white/10"
                                />
                            </div>

                            {/* Location Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none z-10">
                                    <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Location or Remote"
                                    className="w-full h-9 md:h-10 pl-8 md:pl-9 pr-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 text-xs md:text-sm focus:outline-none focus:border-emerald-500/50 transition-all duration-300 hover:bg-white/10"
                                />
                            </div>

                            {/* Select dropdown */}
                            <select className="w-full h-9 md:h-10 px-3 rounded-lg bg-white/5 border border-white/20 text-white text-xs md:text-sm focus:outline-none focus:border-emerald-500/50 transition-all duration-300 hover:bg-white/10 cursor-pointer">
                                <option value="" className="bg-slate-800">Trending Position</option>
                                {jobOptions.map((job) => (
                                    <option key={job.key} value={job.key} className="bg-slate-800">
                                        {job.label}
                                    </option>
                                ))}
                            </select>

                            {/* Search Button */}
                            <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 group relative overflow-hidden h-9 md:h-10 flex items-center justify-center text-xs md:text-sm">
                                <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                <Search className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2 relative z-10" />
                                <span className="relative z-10">Search Jobs</span>
                                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1.5 md:ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Trending tags */}
                    <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mt-4">
                        <span className="text-gray-400 text-[10px] md:text-xs flex items-center gap-1">
                            <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3" />
                            Trending:
                        </span>
                        {["Product Designer", "AI Engineer", "Deep Learning", "Full Stack", "Data Scientist"].map((tag, index) => (
                            <a
                                key={tag}
                                href="#"
                                className="text-gray-300 hover:text-emerald-400 text-[10px] md:text-xs transition-all duration-300 hover:scale-105 inline-flex items-center gap-1 bg-white/5 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/30"
                            >
                                {tag}
                                {index < 4 && <span className="text-gray-600 hidden sm:inline">•</span>}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Stats - ENLARGED */}
                <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-6 md:mb-8">
                    <div className="text-center group cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 md:px-8 md:py-5 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
                            <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-emerald-400 transition-colors">50K+</div>
                        </div>
                        <div className="text-gray-400 text-sm md:text-base font-medium">Active Jobs</div>
                    </div>
                    <div className="text-center group cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 md:px-8 md:py-5 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
                            <Building2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-emerald-400 transition-colors">12K+</div>
                        </div>
                        <div className="text-gray-400 text-sm md:text-base font-medium">Companies</div>
                    </div>
                    <div className="text-center group cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 md:px-8 md:py-5 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
                            <Users className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-emerald-400 transition-colors">2M+</div>
                        </div>
                        <div className="text-gray-400 text-sm md:text-base font-medium">Job Seekers</div>
                    </div>
                    <div className="text-center group cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 md:px-8 md:py-5 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
                            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-emerald-400 transition-colors">97%</div>
                        </div>
                        <div className="text-gray-400 text-sm md:text-base font-medium">Satisfaction Rate</div>
                    </div>
                </div>

                {/* Assisting text */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 md:gap-3 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-1.5 border border-white/10">
                        <div className="flex -space-x-1.5 md:-space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 border-2 border-slate-900 flex items-center justify-center text-[7px] md:text-[8px] font-bold text-white">
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-400 text-[10px] md:text-xs">
                            <span className="text-white font-semibold">15,000+</span> job seekers found their dream positions
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <div className="w-4 h-6 md:w-5 md:h-8 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-0.5 h-1 md:w-1 md:h-1.5 bg-white/50 rounded-full mt-1 md:mt-1.5"></div>
                </div>
            </div>
        </section>
    );
}