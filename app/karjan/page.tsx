import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "karjan");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Karjan, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Karjan, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Karjan, CCTV installation Karjan, security camera Karjan, CCTV dealer Karjan Vadodara, Hikvision Karjan, CP Plus Karjan`,
  openGraph: {
    title: `CCTV Camera Installation in Karjan, Vadodara`,
    description: `Best CCTV and security system installation services in Karjan, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function KarjanPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Karjan" areaSlug="karjan" />
      <MegaFooter />
    </>
  );
}
