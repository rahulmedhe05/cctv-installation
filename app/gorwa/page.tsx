import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "gorwa");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Gorwa, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Gorwa, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Gorwa, CCTV installation Gorwa, security camera Gorwa, CCTV dealer Gorwa Vadodara, Hikvision Gorwa, CP Plus Gorwa`,
  openGraph: {
    title: `CCTV Camera Installation in Gorwa, Vadodara`,
    description: `Best CCTV and security system installation services in Gorwa, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function GorwaPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Gorwa" areaSlug="gorwa" />
      <MegaFooter />
    </>
  );
}
