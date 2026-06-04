"use client";
import { authClient } from "@/lib/auth-client";
import "animate.css";
import {
    Button,
    Card,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LogIn, Mail, Lock } from "lucide-react";

export default function SignInPage() {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const loadingToast = toast.loading("Signing into your HireLoop account...");

        try {
            const { error } = await authClient.signIn.email({
                email,
                password,
            });

            if (error) {
                toast.dismiss(loadingToast);
                toast.error(error.message || "Invalid credentials");
                return;
            }

            toast.dismiss(loadingToast);
            toast.success("Welcome back to HireLoop!");

            // 🔥 Strong Fix
            setTimeout(() => {
                router.refresh();           // 1st try
                window.location.href = "/"; // 2nd strong fallback
            }, 800);

        } catch (err) {
            toast.dismiss(loadingToast);
            toast.error("Something went wrong.");
        }
    };

    return (
        <div className="bg-slate-950 min-h-screen py-8 flex flex-col justify-center items-center font-sans animate__animated animate__backInDown selection:bg-emerald-500/30 selection:text-emerald-400">
            <div className="w-full max-w-md px-4">

                {/* HireLoop Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="text-xl font-bold text-white tracking-tight">
                            Hire<span className="text-emerald-400 font-medium">Loop</span>
                        </span>
                    </div>
                    <h1 className="text-2xl font-semibold text-slate-100 tracking-tight">
                        Welcome Back
                    </h1>
                    <div className="w-16 h-[3px] bg-emerald-500 mx-auto rounded-full mt-3"></div>
                    <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                        Sign in to continue automating your tech recruitment loop
                    </p>
                </div>

                {/* Sign In Card */}
                <Card className="w-full border border-slate-800 shadow-2xl bg-slate-900 rounded-lg overflow-hidden">
                    <div className="p-6 md:p-8">
                        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>

                            {/* Email Field */}
                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                validate={(value) => {
                                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                        return "Please enter a valid email address";
                                    }
                                    return null;
                                }}
                            >
                                <Label className="text-slate-300 font-medium text-xs uppercase tracking-wider mb-1 block">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                    <Input
                                        placeholder="john@example.com"
                                        className="pl-10 bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded transition-all w-full text-sm"
                                    />
                                </div>
                                <FieldError className="text-xs text-rose-400 mt-1" />
                            </TextField>

                            {/* Password Field */}
                            <TextField
                                isRequired
                                name="password"
                                type="password"
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <Label className="text-slate-300 font-medium text-xs uppercase tracking-wider block">Password</Label>
                                    <Link href="/forgot-password" className="text-[11px] text-emerald-400 hover:text-emerald-300 hover:underline transition-colors">
                                        Forgot Password?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                    <Input
                                        placeholder="Enter your password"
                                        className="pl-10 bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded transition-all w-full text-sm"
                                    />
                                </div>
                                <FieldError className="text-xs text-rose-400 mt-1" />
                            </TextField>

                            {/* Sign In Button */}
                            <div className="flex gap-3 pt-2">
                                <Button
                                    type="submit"
                                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold tracking-wide py-2.5 rounded shadow-lg shadow-emerald-950/10 active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-white"
                                >
                                    <LogIn size={16} strokeWidth={3} />
                                    Sign In
                                </Button>
                            </div>
                        </Form>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-800"></div>
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="px-2 bg-slate-900 text-slate-500 uppercase tracking-widest">Or continue with</span>
                            </div>
                        </div>

                        {/* Sign Up Link */}
                        <p className="text-center text-xs text-slate-400 mt-6 tracking-wide">
                            Don't have an account?{' '}
                            <Link href="/signup" className="text-emerald-400 font-semibold hover:text-emerald-300 hover:underline transition-colors ml-1">
                                Create Account
                            </Link>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
}