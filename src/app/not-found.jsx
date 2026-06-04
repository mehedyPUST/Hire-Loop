import Link from "next/link";
import { GiSunglasses } from "react-icons/gi";

const NotFound = () => {
    return (
        <div className="bg-gradient-to-b from-black via-slate-950 to-black min-h-screen py-8 text-white select-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <GiSunglasses className="text-base" />
                        <span>Oops!</span>
                    </div>

                    {/* 404 Title */}
                    <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent tracking-tight">
                        404
                    </h1>

                    {/* Underline */}
                    <div className="mt-4 w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />

                    {/* Message */}
                    <p className="mt-6 text-2xl md:text-3xl font-bold text-slate-200">
                        Page Not Found
                    </p>

                    <p className="mt-3 text-slate-400 max-w-md text-sm sm:text-base">
                        The page you're looking for doesn't exist or has been moved.
                    </p>

                    {/* Back to Home Button */}
                    <Link
                        href="/"
                        className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-emerald-600 rounded hover:bg-emerald-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 uppercase tracking-wide"
                    >
                        ← Back to Home
                    </Link>

                    {/* Helpful Links */}
                    <div className="mt-12 pt-6 border-t border-slate-900 w-full max-w-md">
                        <p className="text-sm text-slate-500 mb-3">Looking for something?</p>
                        <div className="flex flex-wrap gap-3 justify-center items-center">
                            <Link href="/" className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors">
                                Home
                            </Link>
                            <span className="text-slate-800">•</span>
                            <Link href="/all-products" className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors">
                                All Products
                            </Link>
                            <span className="text-slate-800">•</span>
                            <Link href="/contact" className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors">
                                Contact Support
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotFound;