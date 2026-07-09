"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send, ChevronDown } from "lucide-react";

import { quoteSchema, QuoteFormData } from "@/lib/schemas";
import { submitQuoteAction } from "@/app/actions/submitQuote";

const serviceOptions = [
  "Mowing",
  "Pine Straw Installation",
  "Mulching",
  "Planting & Landscaping"
] as const;

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      service: undefined,
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    const result = await submitQuoteAction(data);
    setIsSubmitting(false);

    if (result?.success) {
      setIsSuccess(true);
      reset();
    } else {
      alert(result?.message || "Something went wrong.");
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-xl p-8 text-center border border-brand-grass/20 max-w-md mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="w-16 h-16 mx-auto mb-4 bg-brand-grass/10 rounded-full flex items-center justify-center text-brand-grass-dark"
        >
          <CheckCircle2 size={36} strokeWidth={2.5} />
        </motion.div>
        <h3 className="text-2xl font-bold text-brand-forest mb-2">Request Received!</h3>
        <p className="text-brand-forest-light text-sm mb-6">
          Thank you for reaching out. We have received your request and will follow up with your free estimate shortly.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="w-full inline-flex h-11 items-center justify-center rounded-lg border-2 border-brand-forest px-6 text-sm font-semibold text-brand-forest transition-colors hover:bg-brand-forest/5"
        >
          Submit Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-brand-forest-light/10 max-w-md mx-auto">
      <h3 className="text-xl font-bold text-brand-forest mb-1">Get a Free Estimate</h3>
      <p className="text-sm text-brand-forest-light mb-6">Fast, friendly service in Ladson & Charleston.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-xs font-bold text-brand-forest uppercase tracking-wider mb-1">Your Name</label>
          <input
            type="text"
            {...register("name")}
            placeholder="John Doe"
            className="w-full bg-brand-offwhite border border-brand-forest-light/20 rounded-lg px-4 py-2.5 text-base min-h-[44px] focus:outline-none focus:border-brand-grass-dark focus:ring-1 focus:ring-brand-grass-dark transition-colors text-brand-forest placeholder:text-brand-forest-light/40"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>}
        </div>

        {/* Phone Input */}
        <div>
          <label className="block text-xs font-bold text-brand-forest uppercase tracking-wider mb-1">Phone Number</label>
          <input
            type="tel"
            {...register("phone")}
            placeholder="(843) 555-0199"
            className="w-full bg-brand-offwhite border border-brand-forest-light/20 rounded-lg px-4 py-2.5 text-base min-h-[44px] focus:outline-none focus:border-brand-grass-dark focus:ring-1 focus:ring-brand-grass-dark transition-colors text-brand-forest placeholder:text-brand-forest-light/40"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>}
        </div>

        {/* Address Input */}
        <div>
          <label className="block text-xs font-bold text-brand-forest uppercase tracking-wider mb-1">Address / Neighborhood</label>
          <input
            type="text"
            {...register("address")}
            placeholder="e.g. Ladson, SC or Wescott Plantation"
            className="w-full bg-brand-offwhite border border-brand-forest-light/20 rounded-lg px-4 py-2.5 text-base min-h-[44px] focus:outline-none focus:border-brand-grass-dark focus:ring-1 focus:ring-brand-grass-dark transition-colors text-brand-forest placeholder:text-brand-forest-light/40"
          />
          {errors.address && <p className="text-red-500 text-xs mt-1 font-medium">{errors.address.message}</p>}
        </div>

        {/* Service Dropdown */}
        <div>
          <label className="block text-xs font-bold text-brand-forest uppercase tracking-wider mb-1">Service Needed</label>
          <div className="relative">
            <select
              {...register("service")}
              className="w-full bg-brand-offwhite border border-brand-forest-light/20 rounded-lg pl-4 pr-10 py-2.5 text-base min-h-[44px] appearance-none focus:outline-none focus:border-brand-grass-dark focus:ring-1 focus:ring-brand-grass-dark transition-colors text-brand-forest"
            >
              <option value="">Select a service...</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown 
              size={18} 
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-brand-forest-light/80" 
            />
          </div>
          {errors.service && <p className="text-red-500 text-xs mt-1 font-medium">{errors.service.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 h-12 rounded-lg font-bold text-brand-forest bg-brand-grass hover:bg-brand-grass-dark shadow-md shadow-brand-grass/15 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none mt-2"
        >
          {isSubmitting ? (
            <Loader2 size={18} className="animate-spin text-brand-forest" />
          ) : (
            <Send size={16} />
          )}
          <span>{isSubmitting ? "Sending..." : "Get Your Free Quote"}</span>
        </button>

        {/* Expectation Setting Micro-copy */}
        <p className="text-center text-xs text-brand-forest-light/75 font-medium mt-3">
          We usually respond within a few hours.
        </p>
      </form>
    </div>
  );
}
