"use client";

import { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget; // Save the form reference

  setIsSubmitting(true);

  // TODO: Connect to Resend later

  setTimeout(() => {
    alert("Thank you! Your enquiry has been received.");
    setIsSubmitting(false);
    form.reset(); // Use the saved form instead of e.currentTarget
  }, 1000);
}

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-6 md:grid-cols-2">

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Full Name *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="John Smith"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Email Address *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="john@example.com"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 XXXXX XXXXX"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Company
          </label>

          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your Company"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Service Required
          </label>

          <select
            id="service"
            name="service"
            title="Select the service you need"
            defaultValue="Business Website"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          >
            <option>Business Website</option>
            <option>E-commerce Website</option>
            <option>Landing Page</option>
            <option>Website Redesign</option>
            <option>SEO Optimization</option>
            <option>Maintenance</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label
            htmlFor="budget"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Estimated Budget
          </label>

          <select
            id="budget"
            name="budget"
            title="Select your estimated budget"
            defaultValue="₹10k - ₹25k"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          >
            <option>₹10k - ₹25k</option>
            <option>₹25k - ₹50k</option>
            <option>₹50k - ₹100k</option>
            <option>₹100k+</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Tell us about your project *
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Describe your project..."
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}