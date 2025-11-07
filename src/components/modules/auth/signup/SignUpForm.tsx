"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { User, Mail, Lock, Shield, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "./singupValidation";
import { signUp } from "@/services/authService";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/context/UserContext";

const SignUpForm = () => {
  const { user, setIsLoading, isLoading } = useUser();

  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const form = useForm({
    resolver: zodResolver(signUpSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const password = form.watch("password");
  const confirmPassword = form.watch("confirmPassword");
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      const res = await signUp(data);
      if (res?.success === true) {
        toast.success(res?.message);
        setIsLoading(!isLoading);
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/profile");
        }
      } else {
        toast.success(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Card Container */}
        <div className="bg-slate-800/100  rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden">
          {/* Premium Header */}
          <div className="relative p-8 text-center bg-gradient-to-r from-yellow-500 to-yellow-600">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative flex justify-center items-center gap-2">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30">
                  <Shield className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
                  Join Our Community
                </h1>
                <p className="text-yellow-100/90 text-sm font-light tracking-wide">
                  Create your account and start your journey
                </p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-200">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg blur opacity-0 group-focus-within:opacity-30 transition-opacity duration-300"></div>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-5 w-5 text-slate-400 group-focus-within:text-yellow-400 transition-colors duration-200" />
                            <Input
                              {...field}
                              value={field.value || ""}
                              placeholder="Enter your full name"
                              className="pl-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-200 h-12 rounded-lg border-0"
                            />
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-200">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg blur opacity-0 group-focus-within:opacity-30 transition-opacity duration-300"></div>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400 group-focus-within:text-yellow-400 transition-colors duration-200" />
                            <Input
                              {...field}
                              value={field.value || ""}
                              type="email"
                              placeholder="Enter your email address"
                              className="pl-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-200 h-12 rounded-lg border-0"
                            />
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-200">
                        Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg blur opacity-0 group-focus-within:opacity-30 transition-opacity duration-300"></div>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400 group-focus-within:text-yellow-400 transition-colors duration-200" />
                            <Input
                              {...field}
                              value={field.value || ""}
                              type={showPassword ? "text" : "password"}
                              placeholder="Create a secure password"
                              className="pl-12 pr-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-200 h-12 rounded-lg border-0"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-3 text-slate-400 hover:text-yellow-400 transition-colors duration-200"
                            >
                              {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                              ) : (
                                <Eye className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Confirm Password Field */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-200">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg blur opacity-0 group-focus-within:opacity-30 transition-opacity duration-300"></div>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400 group-focus-within:text-yellow-400 transition-colors duration-200" />
                            <Input
                              {...field}
                              value={field.value || ""}
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="Confirm your password"
                              className="pl-12 pr-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-200 h-12 rounded-lg border-0"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              className="absolute right-3 top-3 text-slate-400 hover:text-yellow-400 transition-colors duration-200"
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="h-5 w-5" />
                              ) : (
                                <Eye className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                        </div>
                      </FormControl>
                      {confirmPassword && password !== confirmPassword ? (
                        <FormMessage className="text-red-400 text-xs">
                          Password dosen`t match
                        </FormMessage>
                      ) : (
                        <FormMessage className="text-red-400 text-xs" />
                      )}
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={
                    confirmPassword && password === confirmPassword
                      ? false
                      : true
                  }
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-2xl hover:shadow-yellow-500/25 border border-yellow-400/20 hover:border-yellow-300/30 text-lg tracking-wide"
                >
                  {isSubmitting ? "Creating Account ..." : "Create Account"}
                </Button>
              </form>
            </Form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-slate-800 text-slate-400">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Button
                type="button"
                variant="outline"
                className="bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white transition-all duration-200 h-11 rounded-lg"
              >
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white transition-all duration-200 h-11 rounded-lg"
              >
                GitHub
              </Button>
            </div>

            {/* Additional Links */}
            <div className="text-center space-y-3">
              <p className="text-sm text-slate-400">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors duration-200 hover:underline"
                >
                  Sign in
                </Link>
              </p>

              <p className="text-xs text-slate-500">
                By creating an account, you agree to our{" "}
                <a
                  href="#"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                >
                  Terms
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
