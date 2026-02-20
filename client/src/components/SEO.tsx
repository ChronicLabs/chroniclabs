import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  item?: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  schema?: object[];
  breadcrumbs?: BreadcrumbItem[];
}

export function SEO({
  title,
  description,
  canonical,
  ogImage = "https://chroniclabs.co/og-image.png",
  schema = [],
  breadcrumbs,
}: SEOProps) {
  // Generate breadcrumb schema if breadcrumbs are provided
  const breadcrumbSchema = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          ...(crumb.item && { "item": crumb.item }),
        })),
      }
    : null;

  // Combine custom schema with breadcrumb schema
  const allSchema = breadcrumbSchema ? [...schema, breadcrumbSchema] : schema;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Chronic Labs" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schema */}
      {allSchema.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
