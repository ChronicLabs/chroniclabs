import { MatrixButton } from "@/components/MatrixButton";
import { Download } from "lucide-react";
import { trackAppStoreClick } from "@/lib/analytics";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  location?: string;
  appStoreUrl?: string;
  showIcon?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
}

export function CTASection({
  title = "Ready to Play?",
  subtitle = "Download Defrag free on iOS",
  location = "footer",
  appStoreUrl = "https://apps.apple.com/us/app/defrag-daily-timeline-puzzle/id6758625499",
  showIcon = true,
  variant = "primary",
  className = "",
}: CTASectionProps) {
  return (
    <section className={`py-16 bg-gray-900/30 border-t border-[#003B00] ${className}`}>
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-gray-400 mb-8">{subtitle}</p>
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackAppStoreClick(location)}
        >
          <MatrixButton variant={variant} size="lg" className="inline-flex items-center gap-3">
            {showIcon && <Download className="w-6 h-6" />}
            Download Free
          </MatrixButton>
        </a>
      </div>
    </section>
  );
}
