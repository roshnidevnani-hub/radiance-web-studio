export function BrowserMockup() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

        {/* Browser Bar */}

        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-5 py-4">

          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />

          <div className="ml-4 flex-1 rounded-full bg-white px-4 py-2 text-xs text-slate-400">
            www.radiancewebstudio.com
          </div>

        </div>

        {/* Website */}

        <div className="bg-white">

          {/* Navbar */}

          <div className="flex items-center justify-between border-b px-8 py-5">

            <div className="text-lg font-bold text-blue-600">
              Radiance
            </div>

            <div className="flex gap-6 text-sm text-slate-500">
              <span>Home</span>
              <span>Services</span>
              <span>Portfolio</span>
              <span>Contact</span>
            </div>

          </div>

          {/* Hero */}

          <div className="px-8 py-12">

            <div className="h-4 w-32 rounded-full bg-blue-100" />

            <div className="mt-6 h-10 w-3/4 rounded bg-slate-900" />

            <div className="mt-4 h-4 w-full rounded bg-slate-200" />
            <div className="mt-3 h-4 w-5/6 rounded bg-slate-200" />

            <div className="mt-8 flex gap-4">

              <div className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white">
                Get Started
              </div>

              <div className="rounded-xl border px-6 py-3 text-sm">
                Portfolio
              </div>

            </div>

          </div>

          {/* Services */}

          <div className="grid grid-cols-3 gap-4 px-8 pb-8">

            <div className="rounded-2xl bg-slate-100 p-6">
              <div className="h-12 w-12 rounded-xl bg-blue-200" />
              <div className="mt-4 h-3 rounded bg-slate-300" />
              <div className="mt-2 h-3 w-3/4 rounded bg-slate-200" />
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <div className="h-12 w-12 rounded-xl bg-cyan-200" />
              <div className="mt-4 h-3 rounded bg-slate-300" />
              <div className="mt-2 h-3 w-3/4 rounded bg-slate-200" />
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <div className="h-12 w-12 rounded-xl bg-indigo-200" />
              <div className="mt-4 h-3 rounded bg-slate-300" />
              <div className="mt-2 h-3 w-3/4 rounded bg-slate-200" />
            </div>

          </div>

        </div>

      </div>

      {/* Floating Cards */}

      <div className="absolute -left-10 top-20 hidden rounded-2xl border bg-white px-5 py-4 shadow-xl lg:block">
        <p className="font-semibold">⚡ 95+ Lighthouse</p>
        <p className="text-sm text-slate-500">
          Performance Optimized
        </p>
      </div>

      <div className="absolute -right-10 bottom-16 hidden rounded-2xl border bg-white px-5 py-4 shadow-xl lg:block">
        <p className="font-semibold">📱 Mobile First</p>
        <p className="text-sm text-slate-500">
          Responsive Design
        </p>
      </div>

    </div>
  );
}