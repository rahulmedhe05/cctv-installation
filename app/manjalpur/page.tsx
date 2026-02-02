import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "manjalpur");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Manjalpur, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Manjalpur, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Manjalpur, CCTV installation Manjalpur, security camera Manjalpur, CCTV dealer Manjalpur Vadodara, Hikvision Manjalpur, CP Plus Manjalpur`,
  openGraph: {
    title: `CCTV Camera Installation in Manjalpur, Vadodara`,
    description: `Best CCTV and security system installation services in Manjalpur, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function ManjalpurPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Manjalpur" areaSlug="manjalpur" />
      <MegaFooter />
    </>
  );
}
