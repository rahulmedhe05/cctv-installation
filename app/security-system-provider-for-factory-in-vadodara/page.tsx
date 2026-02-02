import { getKeywordBySlug } from "@/lib/keywords-config";
import { businessConfig } from "@/lib/business-config";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const slug = "security-system-provider-for-factory-in-vadodara";
const keyword = getKeywordBySlug(slug);

export const metadata: Metadata = keyword ? {
  title: keyword.metaTitle,
  description: keyword.metaDescription,
} : {
  title: "Page Not Found",
};

export default function Page() {
  if (!keyword) {
    notFound();
  }
  
  return <KeywordPageTemplate keyword={keyword} business={businessConfig} />;
}
