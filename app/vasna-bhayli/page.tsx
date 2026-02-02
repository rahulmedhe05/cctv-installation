import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "vasna-bhayli");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Vasna Bhayli, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Vasna Bhayli, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Vasna Bhayli, CCTV installation Vasna Bhayli, security camera Vasna Bhayli, CCTV dealer Vasna Bhayli Vadodara, Hikvision Vasna Bhayli, CP Plus Vasna Bhayli`,
  openGraph: {
    title: `CCTV Camera Installation in Vasna Bhayli, Vadodara`,
    description: `Best CCTV and security system installation services in Vasna Bhayli, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function VasnaBhayliPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Vasna Bhayli" areaSlug="vasna-bhayli" />
      <MegaFooter />
    </>
  );
}
