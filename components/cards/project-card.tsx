import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
};

export function ProjectCard({
  title,
  category,
  description,
}: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Project Preview */}
      <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="flex h-full items-center justify-center text-slate-400 text-lg font-medium transition-transform duration-500 group-hover:scale-105">
          Website Preview
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          {category}
        </span>

        <h3 className="mt-3 text-2xl font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>

        <button className="mt-6 flex items-center gap-2 font-medium text-blue-600 transition-colors hover:text-blue-700">
          View Project
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
}