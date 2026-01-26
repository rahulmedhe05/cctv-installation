import { keywords, getKeywordBySlug, vadodaraAreas } from "@/lib/keywords-config";
import { businessConfig } from "@/lib/business-config";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Generate static params for all keywords
export async function generateStaticParams() {
  return keywords.map((keyword) => ({
    slug: keyword.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const keyword = getKeywordBySlug(slug);
  
  if (!keyword) {
    return {
      title: "Page Not Found",
    };
  }
  
  return {
    title: keyword.metaTitle,
    description: keyword.metaDescription,
    keywords: [
      keyword.keyword,
      `${keyword.keyword} in Vadodara`,
      `Best ${keyword.keyword} in Vadodara`,
      `${keyword.keyword} near me`,
      `${keyword.keyword} services`,
      "CCTV installation Vadodara",
      "Security system Vadodara",
      "CCTV camera dealer Vadodara",
      ...vadodaraAreas.slice(0, 10).map(area => `${keyword.keyword} in ${area.name}`),
    ],
    openGraph: {
      title: keyword.metaTitle,
      description: keyword.metaDescription,
      type: "website",
      locale: "en_IN",
    },
  };
}

export default async function KeywordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const keyword = getKeywordBySlug(slug);
  
  if (!keyword) {
    notFound();
  }
  
  return <KeywordPageTemplate keyword={keyword} business={businessConfig} />;
}
