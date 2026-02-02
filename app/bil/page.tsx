import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "bil");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Bil, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Bil, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Bil, CCTV installation Bil, security camera Bil, CCTV dealer Bil Vadodara, Hikvision Bil, CP Plus Bil`,
  openGraph: {
    title: `CCTV Camera Installation in Bil, Vadodara`,
    description: `Best CCTV and security system installation services in Bil, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function BilPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Bil" areaSlug="bil" />
      <MegaFooter />
    </>
  );
}
