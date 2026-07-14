"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Globe,
  LayoutDashboard,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export function BrowserMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto w-full max-w-3xl"
    >
      {/* Glow */}

      <div className="absolute inset-0 -z-20 rounded-[40px] bg-linear-to-r from-blue-500/20 via-cyan-400/20 to-indigo-500/20 blur-3xl" />

      {/* Browser */}

      <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_40px_100px_rgba(15,23,42,0.18)]">

        {/* Browser Bar */}

        <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-100 px-6 py-4">

          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />

          <div className="ml-4 flex-1 rounded-full bg-white px-5 py-2 text-xs text-slate-400 shadow-sm">
            https://radiancewebstudio.com
          </div>

        </div>

        {/* Dashboard */}

        <div className="bg-linear-to-br from-slate-50 to-white">

          {/* Navbar */}

          <div className="flex items-center justify-between border-b px-8 py-5">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 p-3 text-white">

                <LayoutDashboard size={18} />

              </div>

              <div>

                <p className="font-bold text-slate-900">
                  Radiance
                </p>

                <p className="text-xs text-slate-500">
                  Premium Web Studio
                </p>

              </div>

            </div>

            <div className="flex gap-6 text-sm text-slate-500">

              <span>Home</span>
              <span>Services</span>
              <span>Portfolio</span>
              <span>Contact</span>

            </div>

          </div>

          {/* Hero */}

          <div className="px-8 pt-8">

            <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-700">
              Trusted by Growing Businesses
            </div>

            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900">
              Build a website that
              <span className="block bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                actually generates leads.
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
              Modern websites designed for speed, SEO and higher conversions.
            </p>

            <div className="mt-8 flex gap-4">

              <button className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg">
                Get Started
              </button>

              <button className="rounded-xl border px-6 py-3 text-sm">
                Portfolio
              </button>

            </div>

          </div>

          {/* Analytics */}

          <div className="grid gap-5 px-8 py-10 md:grid-cols-3">

            <div className="rounded-2xl border bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <Activity className="text-blue-600" />

                <span className="text-xs font-semibold text-emerald-600">
                  +28%
                </span>

              </div>

              <p className="mt-5 text-3xl font-black">
                12.4k
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Monthly Visitors
              </p>

            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <BarChart3 className="text-cyan-600" />

                <span className="text-xs font-semibold text-emerald-600">
                  +19%
                </span>

              </div>

              <p className="mt-5 text-3xl font-black">
                96%
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Lighthouse Score
              </p>

            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <Globe className="text-indigo-600" />

                <span className="text-xs font-semibold text-emerald-600">
                  #1
                </span>

              </div>

              <p className="mt-5 text-3xl font-black">
                SEO
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Google Optimized
              </p>

            </div>

          </div>
                    {/* Website Preview */}

          <div className="px-8 pb-8">

            <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-300">
                    Website Performance
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    +187% Growth
                  </h3>

                </div>

                <div className="rounded-2xl bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-300">
                  ▲ 24% This Month
                </div>

              </div>

              {/* Chart */}

              <div className="mt-8 flex h-32 items-end gap-3">

                {[35, 55, 42, 70, 65, 88, 110].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.8,
                    }}
                    className="flex-1 rounded-t-xl bg-linear-to-t from-blue-600 to-cyan-400"
                  />
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Floating Card 1 */}

      <motion.div
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute -left-10 top-24 hidden rounded-3xl border border-white/60 bg-white/90 p-5 shadow-2xl backdrop-blur-xl lg:block"
      >

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-emerald-100 p-3">

            <ShieldCheck className="h-5 w-5 text-emerald-600" />

          </div>

          <div>

            <p className="font-semibold">
              Secure Hosting
            </p>

            <p className="text-sm text-slate-500">
              SSL Protected
            </p>

          </div>

        </div>

      </motion.div>

      {/* Floating Card 2 */}

      <motion.div
        animate={{
          y: [10, -10, 10],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute -right-10 bottom-16 hidden rounded-3xl border border-white/60 bg-white/90 p-5 shadow-2xl backdrop-blur-xl lg:block"
      >

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-100 p-3">

            <MessageCircle className="h-5 w-5 text-blue-600" />

          </div>

          <div>

            <p className="font-semibold">
              New Enquiry
            </p>

            <p className="text-sm text-slate-500">
              2 minutes ago
            </p>

          </div>

        </div>

      </motion.div>

      {/* Floating Card 3 */}

      <motion.div
        animate={{
          x: [-6, 6, -6],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="absolute right-24 -top-6 hidden rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-xl xl:block"
      >
        🚀 Fast • SEO Ready • Premium
      </motion.div>

    </motion.div>
  );
}