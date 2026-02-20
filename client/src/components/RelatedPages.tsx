import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import { trackInternalLinkClick } from "@/lib/analytics";

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
  const [location] = useLocation();

  const handleLinkClick = (page: RelatedPage) => {
    trackInternalLinkClick({
      link_text: page.title,
      link_url: page.href,
      source_page: location,
      link_type: 'related_page',
    });
  };

  return (
    <section className="py-12 bg-gray-900/30 border-t border-[#003B00]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pages.map((page) => (
            <Link key={page.href} href={page.href}>
              <a
                onClick={() => handleLinkClick(page)}
                className="block bg-gray-900/50 border border-[#003B00] hover:border-[#00FF41] rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer group"
              >
                {page.icon && (
                  <div className="text-4xl mb-3">{page.icon}</div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00FF41] transition-colors">
                  {page.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{page.description}</p>
                <div className="flex items-center text-[#00FF41] text-sm font-semibold">
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
