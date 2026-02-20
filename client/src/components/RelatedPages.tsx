import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface RelatedPage {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

interface RelatedPagesProps {
  pages: RelatedPage[];
  title?: string;
}

export function RelatedPages({ pages, title = "Explore More" }: RelatedPagesProps) {
  return (
    <section className="py-12 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pages.map((page) => (
            <Link key={page.href} href={page.href}>
              <a className="block bg-gray-900/50 border border-gray-800 hover:border-blue-500 rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer group">
                {page.icon && (
                  <div className="text-4xl mb-3">{page.icon}</div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {page.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{page.description}</p>
                <div className="flex items-center text-blue-400 text-sm font-semibold">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
