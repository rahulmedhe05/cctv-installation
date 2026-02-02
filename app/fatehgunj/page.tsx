import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "fatehgunj");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Fatehgunj, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Fatehgunj, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Fatehgunj, CCTV installation Fatehgunj, security camera Fatehgunj, CCTV dealer Fatehgunj Vadodara, Hikvision Fatehgunj, CP Plus Fatehgunj`,
  openGraph: {
    title: `CCTV Camera Installation in Fatehgunj, Vadodara`,
    description: `Best CCTV and security system installation services in Fatehgunj, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function FatehgunjPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Fatehgunj" areaSlug="fatehgunj" />
      <MegaFooter />
    </>
  );
}
