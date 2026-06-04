"use client";
import { authClient } from "@/lib/auth-client";
import "animate.css";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Check, Mail, Lock, User, Image as ImageIcon } from "lucide-react";

export default function SignUpPage() {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        const loadingToast = toast.loading("Creating your HireLoop account...");

        try {
            const { error } = await authClient.signUp.email({
                name,
                email,
                password,
                image,
                callbackURL: '/'
            });

            if (error) {
                toast.dismiss(loadingToast);

                if (error.message?.includes("already")) {
                    toast.error("This email is already registered. Try signing in instead.");
                } else {
                    toast.error("Signup failed. Please check your details and try again.");
                }
                return;
            }

            toast.dismiss(loadingToast);
            toast.success("Account created successfully! Welcome to HireLoop.");

            // 🔥 Navbar session update fix
            setTimeout(() => {
                router.refresh();
                window.location.href = "/";     // ← এটা ব্যবহার করুন
            }, 800);
        } catch (err) {
            toast.dismiss(loadingToast);
            toast.error("Something went wrong. Please try again.");
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
                        Create Account
                    </h1>
                    <div className="w-16 h-[3px] bg-emerald-500 mx-auto rounded-full mt-3"></div>
                    <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                        Sign up today to automate your tech recruitment loop
                    </p>
                </div>

                {/* Sign Up Card */}
                <Card className="w-full border border-slate-800 shadow-2xl bg-slate-900 rounded-lg overflow-hidden">
                    <div className="p-6 md:p-8">
                        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>

                            {/* Name Field */}
                            <TextField isRequired name="name" type="text">
                                <Label className="text-slate-300 font-medium text-xs uppercase tracking-wider mb-1 block">Full Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                    <Input
                                        placeholder="Enter your name"
                                        className="pl-10 bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded transition-all w-full text-sm"
                                    />
                                </div>
                                <FieldError className="text-xs text-rose-400 mt-1" />
                            </TextField>

                            {/* Profile Image URL Field */}
                            <TextField isRequired name="image" type="text">
                                <Label className="text-slate-300 font-medium text-xs uppercase tracking-wider mb-1 block">Profile Image URL</Label>
                                <div className="relative">
                                    <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                    <Input
                                        placeholder="https://example.com/avatar.jpg"
                                        className="pl-10 bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded transition-all w-full text-sm"
                                    />
                                </div>
                                <FieldError className="text-xs text-rose-400 mt-1" />
                            </TextField>

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
                                minLength={8}
                                name="password"
                                type="password"
                                validate={(value) => {
                                    if (value.length < 8) {
                                        return "Password must be at least 8 characters";
                                    }
                                    if (!/[A-Z]/.test(value)) {
                                        return "Password must contain at least one uppercase letter";
                                    }
                                    if (!/[0-9]/.test(value)) {
                                        return "Password must contain at least one number";
                                    }
                                    return null;
                                }}
                            >
                                <Label className="text-slate-300 font-medium text-xs uppercase tracking-wider block">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                    <Input
                                        placeholder="Enter your password"
                                        className="pl-10 bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded transition-all w-full text-sm"
                                    />
                                </div>
                                <Description className="text-[11px] text-slate-500 mt-1 leading-normal">
                                    Must be at least 8 characters with 1 uppercase and 1 number
                                </Description>
                                <FieldError className="text-xs text-rose-400 mt-1" />
                            </TextField>

                            {/* Action Buttons */}
                            <div className="flex gap-3 pt-2">
                                <Button
                                    type="submit"
                                    className="flex-1 bg-emerald-600 hover:bg-emerald-500  font-bold tracking-wide py-2.5 rounded shadow-lg shadow-emerald-950/10 active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-white"
                                >
                                    <Check size={16} strokeWidth={3} />
                                    Create Account
                                </Button>
                                <Button
                                    type="reset"
                                    variant="flat"
                                    className="border border-slate-800 text-slate-400 bg-slate-950 hover:bg-slate-900 rounded px-4 text-sm"
                                >
                                    Reset
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

                        {/* Sign In Link */}
                        <p className="text-center text-xs text-slate-400 mt-6 tracking-wide">
                            Already have an account?{' '}
                            <Link href="/signin" className="text-emerald-400 font-semibold hover:text-emerald-300 hover:underline transition-colors ml-1">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
}