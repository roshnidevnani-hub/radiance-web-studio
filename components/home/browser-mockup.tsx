export function BrowserMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

        {/* Browser Bar */}

        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-5 py-4">

          <div className="h-3 w-3 rounded-full bg-red-400" />

          <div className="h-3 w-3 rounded-full bg-yellow-400" />

          <div className="h-3 w-3 rounded-full bg-green-400" />

          <div className="ml-4 h-8 flex-1 rounded-full bg-white" />

        </div>

        {/* Website Preview */}

        <div className="space-y-6 p-8">

          <div className="h-8 w-48 rounded bg-slate-200" />

          <div className="h-4 w-full rounded bg-slate-100" />

          <div className="h-4 w-10/12 rounded bg-slate-100" />

          <div className="mt-10 grid grid-cols-3 gap-4">

            <div className="h-32 rounded-xl bg-blue-100" />

            <div className="h-32 rounded-xl bg-slate-100" />

            <div className="h-32 rounded-xl bg-cyan-100" />

          </div>

        </div>

      </div>

      {/* Floating Card */}

      <div className="absolute -left-8 top-16 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl lg:block">

        <p className="text-sm font-semibold">
          SEO Ready
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Optimized for Google
        </p>

      </div>

      {/* Floating Card */}

      <div className="absolute -right-8 bottom-12 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl lg:block">

        <p className="text-sm font-semibold">
          Mobile First
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Responsive Design
        </p>

      </div>

    </div>
  );
}