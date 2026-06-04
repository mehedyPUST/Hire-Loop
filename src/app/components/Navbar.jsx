"use client";
import React, { useState, useEffect } from "react";
import { Link, Button } from "@heroui/react";
import { authClient, signOut, useSession } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";


function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { data: session, isPending, refetch } = useSession();
    const user = session?.user;

    // Force refetch session when route changes (Important Fix)
    useEffect(() => {
        refetch();
    }, [pathname, refetch]);

    const handleSignOut = async () => {
        await signOut()
    };

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-slate-900/80 bg-black/95 backdrop-blur-xl text-white select-none">
            <div className="flex h-14 md:h-16 items-center justify-between px-4 sm:px-6 max-w-7xl mx-auto w-full">

                {/* Left Side: Mobile Menu Button & Brand Logo */}
                <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                    <button
                        className="md:hidden text-gray-400 hover:text-emerald-400 focus:outline-none p-1"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white">
                            Hire<span className="text-emerald-400 font-medium">Loop</span>
                        </h2>
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3 sm:gap-6 md:gap-8 justify-end">

                    {/* Navigation Links */}
                    <ul className="hidden items-center md:flex gap-5 lg:gap-6">
                        <li>
                            <Link href="/jobs" className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors">
                                Browse Jobs
                            </Link>
                        </li>
                        <li>
                            <Link href="/company" className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors">
                                Company
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors">
                                Pricing
                            </Link>
                        </li>
                    </ul>

                    <span className="hidden md:inline h-5 w-px bg-slate-800" />

                    {/* Auth Section */}
                    <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                        {isPending ? (
                            <div className="text-slate-400 text-sm">Loading...</div>
                        ) : user ? (
                            <>
                                <span className="text-slate-300 text-sm hidden sm:inline">
                                    Hi, {user.name?.split(" ")[0] || "User"}
                                </span>
                                <Button
                                    onClick={handleSignOut}
                                    variant="ghost"
                                    className="text-white hover:bg-red-500 rounded-sm transition-colors"
                                >
                                    Sign Out
                                </Button>
                            </>
                        ) : (
                            <Link href="/signin"
                            >
                                <Button variant="ghost"
                                    className="text-white hover:bg-emerald-600 rounded-sm transition-colors">
                                    Sign In
                                </Button>
                            </Link>
                        )}

                        <Button
                            as={Link}
                            href="/signup"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-wide text-[11px] sm:text-xs uppercase h-8 sm:h-9 px-3 sm:px-4 rounded transition-all active:scale-95"
                            radius="none"
                            size="sm"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="border-t border-slate-900 md:hidden bg-black/98 absolute left-0 right-0 top-14 w-full shadow-2xl">
                    <ul className="flex flex-col p-4 gap-1">
                        <li>
                            <Link href="/jobs" className="block py-2.5 px-3 rounded-md text-slate-300 hover:text-emerald-400 hover:bg-slate-900 text-sm transition-all" onClick={() => setIsMenuOpen(false)}>
                                Browse Jobs
                            </Link>
                        </li>
                        <li>
                            <Link href="/company" className="block py-2.5 px-3 rounded-md text-slate-300 hover:text-emerald-400 hover:bg-slate-900 text-sm transition-all" onClick={() => setIsMenuOpen(false)}>
                                Company
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="block py-2.5 px-3 rounded-md text-slate-300 hover:text-emerald-400 hover:bg-slate-900 text-sm transition-all" onClick={() => setIsMenuOpen(false)}>
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;