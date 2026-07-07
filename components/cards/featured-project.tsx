import { ArrowUpRight, CheckCircle2 } from "lucide-react";

type PortfolioCardProps = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
};

export function PortfolioCard({
  title,
  category,
  description,
  technologies,
}: PortfolioCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Project Image */}

      <div className="relative aspect-16/10 overflow-hidden bg-slate-100">

        <img
          src={`https://placehold.co/900x600/e2e8f0/0f172a?text=${encodeURIComponent(
            title
          )}`}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent" />

      </div>

      {/* Content */}

      <div className="p-8">

        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {category}
        </span>

        <h3 className="mt-5 text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>

        {/* Technologies */}

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}

        <div className="mt-6 space-y-3">

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2 size={18} className="text-green-500" />
            Responsive Design
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2 size={18} className="text-green-500" />
            SEO Optimized
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2 size={18} className="text-green-500" />
            Fast Performance
          </div>

        </div>

        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 hover:gap-3"
        >
          View Case Study
          <ArrowUpRight size={18} />
        </a>

      </div>

    </div>
  );
}