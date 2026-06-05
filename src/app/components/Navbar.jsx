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

    useEffect(() => {
        refetch();
    }, [pathname, refetch]);

    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl text-white select-none">
            <div className="flex h-16 items-center justify-between px-4 sm:px-6 max-w-7xl mx-auto w-full">

                {/* Left Side: Mobile Menu & Logo */}
                <div className="flex items-center gap-4 shrink-0">
                    <button
                        className="md:hidden text-slate-400 hover:text-emerald-400 p-1"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    <Link href="/" className="flex items-center gap-1">
                        <h2 className="text-xl font-bold tracking-tight text-white">
                            Hire<span className="text-emerald-500">Loop</span>
                        </h2>
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-6 justify-end">
                    <ul className="hidden md:flex items-center gap-8">
                        {["Jobs", "Company", "Pricing"].map((item) => (
                            <li key={item}>
                                <Link
                                    href={`/${item.toLowerCase()}`}
                                    className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors"
                                >
                                    {item === "Jobs" ? "Browse Jobs" : item}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-3">
                        {isPending ? (
                            <div className="text-slate-500 text-sm">Loading...</div>
                        ) : user ? (
                            <>
                                <span className="text-slate-400 text-sm hidden sm:inline">
                                    Hi, {user.name?.split(" ")[0] || "User"}
                                </span>
                                <Button
                                    onClick={handleSignOut}
                                    variant="flat"
                                    className="bg-white/5 text-white hover:bg-red-500/20 text-sm rounded-lg"
                                >
                                    Sign Out
                                </Button>
                            </>
                        ) : (
                            <Link href="/signin">
                                <Button variant="light" className="text-slate-300 hover:text-white text-sm">
                                    Sign In
                                </Button>
                            </Link>
                        )}

                        <Button
                            as={Link}
                            href="/signup"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-lg px-5 transition-all"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-white/10 bg-slate-950 p-4 absolute w-full shadow-2xl">
                    <ul className="flex flex-col gap-2">
                        {["Jobs", "Company", "Pricing"].map((item) => (
                            <li key={item}>
                                <Link
                                    href={`/${item.toLowerCase()}`}
                                    className="block py-3 px-4 rounded-lg text-slate-300 hover:bg-white/5 hover:text-emerald-400"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item === "Jobs" ? "Browse Jobs" : item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;