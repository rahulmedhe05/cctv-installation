import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "jetalpur");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Jetalpur, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Jetalpur, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Jetalpur, CCTV installation Jetalpur, security camera Jetalpur, CCTV dealer Jetalpur Vadodara, Hikvision Jetalpur, CP Plus Jetalpur`,
  openGraph: {
    title: `CCTV Camera Installation in Jetalpur, Vadodara`,
    description: `Best CCTV and security system installation services in Jetalpur, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function JetalpurPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Jetalpur" areaSlug="jetalpur" />
      <MegaFooter />
    </>
  );
}
