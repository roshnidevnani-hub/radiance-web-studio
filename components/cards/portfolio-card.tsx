import { ArrowUpRight } from "lucide-react";

type PortfolioCardProps = {
  title: string;
  category: string;
};

export function PortfolioCard({
  title,
  category,
}: PortfolioCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
  <div className="relative h-56 overflow-hidden bg-linear-to-br from-blue-100 via-white to-slate-100">
  <div className="absolute left-6 top-6 h-20 w-32 rounded-xl bg-white shadow-lg"></div>

  <div className="absolute right-6 top-10 h-28 w-40 rounded-2xl bg-blue-200"></div>

  <div className="absolute bottom-6 left-8 h-6 w-44 rounded bg-slate-300"></div>

  <div className="absolute bottom-14 left-8 h-4 w-60 rounded bg-slate-200"></div>
</div>
      <div className="p-8">
        <p className="text-sm font-medium text-blue-600">
          {category}
        </p>

        <h3 className="mt-2 text-2xl font-semibold">
          {title}
        </h3>

        <button className="mt-6 inline-flex items-center gap-2 font-medium text-slate-900 transition group-hover:text-blue-600">
          View Project
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
}