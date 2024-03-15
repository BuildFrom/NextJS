import type { Metadata } from "next";

const config = {
  appName: "Your App Name",
  appDescription: "Your App Description",
  domainName: "localhost",
};

export const SEO = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: Metadata & {
  canonicalUrlRelative?: string;
  extraTags?: Record<string, any>;
} = {}) => {
  return {
    title: title,
    description: description,
    keywords: keywords || [config.appName],
    applicationName: config.appName,
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `https://${config.domainName}/`
    ),
    openGraph: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      url: openGraph?.url || `https://${config.domainName}/`,
      siteName: openGraph?.title || config.appName,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      card: "summary_large_image",
      creator: "@marc_louvion",
    },
    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),
    ...extraTags,
  };
};

// renderSchemaTags function corrected and returned as string
export const renderSchemaTags = () => {
  return `<script type="application/ld+json">${JSON.stringify({
    "@context": "http://schema.org",
    "@type": "SoftwareApplication",
    name: config.appName,
    description: config.appDescription,
    image: `https://${config.domainName}/icon.png`,
    url: `https://${config.domainName}/`,
    author: {
      "@type": "Person",
      name: "Your name",
    },
    datePublished: "2023-08-01",
    applicationCategory: "EducationalApplication",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "12",
    },
  })}</script>`;
};
